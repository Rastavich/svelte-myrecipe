/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NowRequest, NowResponse } from "@vercel/node";
import { connectToDatabase } from '../../lib/database';

export default async (req: NowRequest, res: NowResponse) => {
    
    try {
        const db = await connectToDatabase();
        const collection = await db.collection("recipes");
        const recipes = await collection.find({}).toArray(); 

        const collectionBackup = await db.collection("recipe_backups");
        if (recipes != "") {
            collectionBackup.drop();      
            const recipesBackup = await collectionBackup.insertMany(
                recipes
            );
            res.status(200).json( {recipesBackup} );
        } else {
            res.status(400).json({ status: "Error - cannot drop backup as recipes is empty"});
        }
        
        
    } catch (err) {
        res.status(500).json({ status: "Error" + err });
    }

};