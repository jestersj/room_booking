import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Dropdown from "react-bootstrap/Dropdown";
import style from '../style/Select.module.css'

const RoomSelect = observer(() => {
    const {form} = useContext(Context)
    const rooms = []
    for (let i = 1; i < 11; i++) {
        rooms.push(i)
    }
    return (
        <Dropdown>
            <Dropdown.Toggle>{form.room || 'Переговорка'}</Dropdown.Toggle>
            <Dropdown.Menu className={style.dropdown_menu}>
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
            </Dropdown.Menu>
        </Dropdown>
    );
});

export default RoomSelect;