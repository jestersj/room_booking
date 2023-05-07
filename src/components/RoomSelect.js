import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Dropdown from "react-bootstrap/Dropdown";
import {DropdownButton} from "react-bootstrap";

const RoomSelect = observer(() => {
    const {form} = useContext(Context)
    const rooms = []
    for (let i = 1; i < 11; i++) {
        rooms.push(i)
    }
    return (
        <DropdownButton
            title={form.room || 'Переговорка'}
        >
            {
                rooms.map(el =>
                    <Dropdown.Item
                        key={el}
                        onClick={() => form.setRoom(el)}
                    >
                        {el}
                    </Dropdown.Item>
                )
            }
        </DropdownButton>
    );
});

export default RoomSelect;