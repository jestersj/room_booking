import React, {useContext} from 'react';
import TowerSelect from "./components/TowerSelect";
import {Context} from "./index";
import FloorSelect from "./components/FloorSelect";
import DateSelect from "./components/DateSelect";
import CommentTextarea from "./components/CommentTextarea";
import {Button, Container} from "react-bootstrap";
import RoomSelect from "./components/RoomSelect";
import Card from "./components/Card";
import style from './style/Container.module.css'


const App = () => {
    const {form} = useContext(Context)

    return (
        <Container className={style.container}>
            <Card/>
        </Container>
    );
};

export default App;