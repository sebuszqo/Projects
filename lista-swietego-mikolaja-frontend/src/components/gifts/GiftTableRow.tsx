import {GiftEntity} from "../../types/gift";

interface Props {
    gift: GiftEntity;
}

export const GiftTableRow = (props: Props) => (
    <tr>
        <th>{props.gift.id}</th>
        <th>{props.gift.name}</th>
        <th>{props.gift.count}</th>
    </tr>
)