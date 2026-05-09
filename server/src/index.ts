import 'dotenv/config';
import express from 'express';
import type { Request, Response } from 'express';
import cors from 'cors';

import { findBusiness, getBusinessDetails} from './getBusinessInformation'

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
    hoursOfOperation: object
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
        hoursOfOperation: businessInformationCache.regularOpeningHours.weekdayDescriptions});
})

app.listen(3000, () => console.log('Server on http://localhost:3000'));