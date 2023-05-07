import React, {useContext} from 'react';
import {Context} from "../index";
import Dropdown from "react-bootstrap/Dropdown";
import {observer} from "mobx-react-lite";
import style from '../style/Select.module.css'

const TowerSelect = observer(() => {
    const {form} = useContext(Context)
    const towers = ['А', 'Б']
    return (
        <Dropdown>
            <Dropdown.Toggle className={style.select}>
                {form.tower || 'Башня'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {
                    towers.map(tower =>
                        <Dropdown.Item className={style.select}
                                       key={tower}
                                       onClick={() => form.setTower(tower)}
                        >
                            {tower}
                        </Dropdown.Item>
                    )
                }
            </Dropdown.Menu>
        </Dropdown>

    );
});

export default TowerSelect;