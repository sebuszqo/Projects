import {Router} from "express";
import {GiftRecord} from "../records/gift.record";

export const giftRouter = Router();

giftRouter

    .get('/', async (req, res) => {
        const giftsList = await GiftRecord.listAll();

        res.json({
            giftsList,
        });
    })

    .delete("/:id", async (req, res) => {

    })

    .post('/', async (req, res) => {
        const data = {
            ...req.body,
            count: Number(req.body.count),
        };

        const newGift = new GiftRecord(data);
        await newGift.insert();

        res.redirect('/gift');
    });
