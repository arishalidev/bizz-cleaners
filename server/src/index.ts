import 'dotenv/config';
import express from 'express';
import type { Request, Response } from 'express';
import cors from 'cors';

import {findBusiness, getBusinessDetails, isOpenNow} from './getBusinessInformation'

const MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;
const CLEANCLOUD_API_KEY = process.env.CLEANCLOUD_API_KEY;

const app = express();
app.use(cors());
app.use(express.json());

interface BusinessDetailsCache {
    rating: number;
    userRatingCount: number;
    regularOpeningHours: {
        weekdayDescriptions: string[];
        periods: any[];
    };
}

let businessInformationCache: BusinessDetailsCache | undefined;

interface BusinessInformationResponse {
    rating: number,
    userRatingCount: number,
    hoursOfOperation: object,
    isOpen: boolean
}

app.get("/api/get/business-information", async (req: Request, res: Response<BusinessInformationResponse>)=> {
    if(businessInformationCache === undefined) {
        console.log("Querying Google Places API for business information.")
        const match = await findBusiness("Bizz Cleaners, Flower Mound Denton TX");
        if (!match) throw new Error("Business Not Found!");
        businessInformationCache = await getBusinessDetails(match.id);
    }

    if(businessInformationCache === undefined) {
        throw new Error("Could not find business data");
    }

    res.json({rating: businessInformationCache.rating,
        userRatingCount: businessInformationCache.userRatingCount,
        hoursOfOperation: businessInformationCache.regularOpeningHours.weekdayDescriptions,
        isOpen: isOpenNow(businessInformationCache.regularOpeningHours.periods)});
})

interface apiKeyResponse {
    key: string;
}

app.get("/api/get/google-maps-api-key", (req: Request, res: Response<apiKeyResponse>)=> {
    if(MAPS_API_KEY === undefined) throw new Error("Could not find google maps api key!");
    res.json({key: MAPS_API_KEY});
})

interface validationResponse {
    valid: boolean;
}

const validZips = [76205, 76208, 76210, 75065, 75057, 75067, 75019, 75063, 76039, 76051, 76092, 76262, 76226, 75077, 75028, 75022, 76247]

app.post("/api/validate-location", async (req: Request, res: Response<validationResponse>) => {
    if(CLEANCLOUD_API_KEY === undefined) throw new Error("Could not find cleancloud api key!");

    const {lat, lng} = req.body;

    const reqBody = {
        api_token: CLEANCLOUD_API_KEY,
        lat: lat,
        lng: lng
    }

    const cleancloudRes = await fetch("https://cleancloudapp.com/api/getRoute", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reqBody),
    });

    const data = await cleancloudRes.json();

    const valid = data?.Success === 'True'
    res.json({ valid });


});

app.post("/api/validate-zip", (req: Request, res: Response<validationResponse>) => {
    const { zip } = req.body;
    const valid = zip?.length === 5 && !isNaN(Number(zip)) && validZips.includes(Number(zip));
    res.json({ valid });
});

const PORT = process.env.PORT || 3000;
app.listen(Number(PORT), '0.0.0.0', () => console.log('Server online on port ' + PORT));