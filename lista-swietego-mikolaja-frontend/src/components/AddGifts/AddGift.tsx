import {useState} from "react";
import {CreateGiftRequest} from "types";

export const AddGift = () => {
    const [form, setForm] = useState<CreateGiftRequest>({count: 0, name: ""})

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };

    return <form>
        <h2>Add gift </h2>

        <p><label>
            Name: <br/>
            <input
                type="text"
                value={form.name}
                onChange={e => updateForm('name', e.target.value)}/>
        </label>
        </p>
        <p>
            <label>
                Count: <br/>
                <input
                    type="text"
                    value={form.count}
                    onChange={e => updateForm('count', Number(e.target.value))}/>
            </label>
        </p>
        <button>Add new Gift</button>
    </form>
};