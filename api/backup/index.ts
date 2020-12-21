/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NowRequest, NowResponse } from "@vercel/node";
import { connectToDatabase } from '../../lib/database';

export default async (req: NowRequest, res: NowResponse) => {
    
    try {
        const db = await connectToDatabase();
        const collection = await db.collection("recipes");
        const collectionBackup = await db.collection("recipe_backups");

        // No query so return all
        const recipes = await collection.find({}).toArray(); 
        const recipesBackup = await collectionBackup.insertMany(recipes);
        res.status(200).json( {recipesBackup} );
        
    } catch (err) {
        res.status(500).json({ status: "Error" + err });
    }

};