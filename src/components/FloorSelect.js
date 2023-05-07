import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Dropdown from "react-bootstrap/Dropdown";
import {Form} from "react-bootstrap";

const FloorSelect = observer(() => {
    const {form} = useContext(Context)
    const defaultFloors = []
    for (let i = 3; i < 28; i++) {
        defaultFloors.push(i)
    }
    const [floors, setFloors] = useState([...defaultFloors])
    const [filter, setFilter] = useState('')

    return (
        <Dropdown>
            <Dropdown.Toggle>{form.floor || 'Этаж'}</Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={(e) => e.stopPropagation()}>
                    <Form.Control
                        type='number'
                        value={filter}
                        onChange={(e) => {
                            setFilter(e.target.value)
                            setFloors(
                                defaultFloors.filter(el => el === Number(e.target.value))
                            )
                        }}
                    />
                </Dropdown.Item>
                {
                    floors.map(el =>
                        <Dropdown.Item
                            key={el}
                            onClick={() => form.setFloor(el)}
                        >
                            {el}
                        </Dropdown.Item>
                    )
                }
            </Dropdown.Menu>
        </Dropdown>
    );
});

export default FloorSelect;