import {GiftEntity} from "../../types/gift";
import {GiftTableRow} from "./GiftTableRow";

interface Props {
    gifts: GiftEntity[];
}

export const GiftTable = (props: Props) => (
    <table>
        <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Count</th>
        </tr>
        </thead>
        <tbody>
        {
            props.gifts.map(gift => <GiftTableRow gift={gift} key={gift.id}/>)
        }
        </tbody>
    </table>
);