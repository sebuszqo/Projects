import {ChildEntity, GiftEntity} from "types";
import {MouseEvent} from "react";
import {Link} from "react-router-dom";

interface Props {
    child: ChildEntity;
    gifts: GiftEntity[];
}

export const ChildrenTableRow = (props: Props) => {
    return (
        <tr>
            <th>{props.child.name}</th>
            <td>{props.child.giftId}</td>
        </tr>
    );
};