import {useEffect, useState} from "react";
import {GiftTable} from "./GiftTable";
import {GiftEntity} from 'types';

export const GiftList = () => {
    const [giftsList, setGiftsList] = useState<GiftEntity[] | null>(null)

    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:3001/gift")
            const data = await response.json()
            setGiftsList(data.giftsList);
        })();
    }, [])

    if (giftsList === null) {
        return <p>Loading...</p>
    }
    return <><h1>Gifts</h1>
        <GiftTable gifts={giftsList}/>
    </>
}