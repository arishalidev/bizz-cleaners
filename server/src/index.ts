import 'dotenv/config';
import express from 'express';
import type { Request, Response } from 'express';
import cors from 'cors';

import {findBusiness, getBusinessDetails, isOpenNow} from './getBusinessInformation'

const MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

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

app.get("/get/business-information", async (req: Request, res: Response<BusinessInformationResponse>)=> {
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

app.get("/get/google-maps-api-key", (req: Request, res: Response<apiKeyResponse>)=> {
    if(MAPS_API_KEY === undefined) throw new Error("Could not find google maps api key!");
    res.json({key: MAPS_API_KEY});
})



app.listen(3000, () => console.log('Server on http://localhost:3000'));