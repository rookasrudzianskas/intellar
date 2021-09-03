// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {getAllSites, getUserSites} from "@/lib/db-admin";
import {auth} from "@/lib/firebase-admin";

export default async function handler(req, res) {
    // console.log(req.headers);
    // const token = req.headers.token;
    try {
        const { uid } = await auth.verifyIdToken(req.headers.token);
        // console.log("This is user something", user);
        const sites = await  getUserSites(uid);

        res.status(200).json({sites});

    } catch (error) {
        res.status(500).json({ error: error });
    }
};

