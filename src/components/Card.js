import React, {useContext} from 'react';
import {Context} from "../index";
import TowerSelect from "./TowerSelect";
import FloorSelect from "./FloorSelect";
import RoomSelect from "./RoomSelect";
import DateSelect from "./DateSelect";
import CommentTextarea from "./CommentTextarea";
import {Button, Col, Container, Row} from "react-bootstrap";
import style from '../style/Card.module.css'
import {observer} from "mobx-react-lite";

const Card = () => {
    const {form} = useContext(Context)
    return (
           <Container fluid>
               <div className={style.card}>
                   <h1 className={style.h1}>Бронирование переговорной</h1>
                   <Row style={{alignItems: "center"}}>
                       <Col lg={6}>
                           <TowerSelect/>
                           <FloorSelect/>
                           <RoomSelect/>
                           <DateSelect/>
                           <CommentTextarea/>
                       </Col>
                       <Col lg={6}>
                           <h3 className={style.text}>Ваш выбор:</h3>
                           <p className={style.text}>Башня: {form.tower || '--'}</p>
                           <p className={style.text}>Этаж: {form.floor || '--'}</p>
                           <p className={style.text}>Переговорка: {form.room || '--'}</p>
                           <p className={style.text}>Дата: {String(form.date) || '--'}</p>
                           <Button
                               onClick={() => {
                                   console.log(JSON.stringify({
                                       tower: form.tower,
                                       floor: form.floor,
                                       date: form.date,
                                       comment: form.comment
                                   }))
                               }}
                           >
                               Отправить
                           </Button>
                           <Button onClick={() => form.clear()}>Очистить</Button>
                       </Col>
                   </Row>
               </div>
           </Container>

    );
};

export default observer(Card);