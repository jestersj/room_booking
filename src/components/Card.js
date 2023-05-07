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
    const parseDate = (date) => {
        if (!date) {
            return '--'
        }
        const obj = {
            Mon: 'Пн',
            Tue: 'Вт',
            Wed: 'Ср',
            Thu: 'Чт',
            Fri: 'Пт',
            Sut: 'Сб',
            Sun: 'Вс',
            Jan: 'января',
            Feb: 'февраля',
            Mar: 'марта',
            Apr: 'апреля',
            May: 'мая',
            Jun: 'июня',
            Jul: 'июля',
            Aug: 'августа',
            Sep: 'сентября',
            Oct: 'октября',
            Nov: 'ноября',
            Dec: 'декабря',
        }
        const dateArr = date.split(' ')
        const weekDay = obj[dateArr[0]]
        const month = obj[dateArr[1]]
        const day = dateArr[2]
        const time = dateArr[4]
        return `${weekDay}, ${day} ${month}, ${time}`
    }
    return (
           <Container fluid>
               <div className={style.card}>
                   <h1 className={style.h1}>Бронирование переговорной</h1>
                   <Row style={{alignItems: "flex-start"}}>
                       <Col lg={6}>
                           <Row className={style.button_row}>
                               <Col xs={6}>
                                   <p className={style.text}>Выберите башню</p>
                               </Col>
                               <Col xs={6}>
                                   <TowerSelect/>
                               </Col>
                           </Row>
                           <Row className={style.button_row}>
                               <Col xs={6}>
                                   <p className={style.text}>Выберите этаж</p>
                               </Col>
                               <Col xs={6}>
                                   <FloorSelect/>
                               </Col>
                           </Row>
                           <Row className={style.button_row}>
                               <Col xs={6}>
                                   <p className={style.text}>Выберите переговорку</p>
                               </Col>
                               <Col xs={6}>
                                   <RoomSelect/>
                               </Col>
                           </Row>
                           <Row className={style.button_row}>
                               <Col xs={6}>
                                   <p className={style.text}>Выберите дату и время</p>
                               </Col>
                               <Col xs={6}>
                                   <DateSelect/>
                               </Col>
                           </Row>
                           <CommentTextarea/>
                       </Col>
                       <Col lg={6}>
                           <h3 className={style.text}>Ваш выбор:</h3>
                           <p className={style.text}>Башня: {form.tower || '--'}</p>
                           <p className={style.text}>Этаж: {form.floor || '--'}</p>
                           <p className={style.text}>Переговорка: {form.room || '--'}</p>
                           <p className={style.text}>Дата: {parseDate(String(form.date))}</p>
                           <Button
                               className={style.btn}
                               onClick={() => {
                                   console.log(JSON.stringify({
                                       tower: form.tower,
                                       floor: String(form.floor),
                                       room: String(form.room),
                                       date: form.date,
                                       comment: form.comment
                                   }))
                               }}
                           >
                               Отправить
                           </Button>
                           <Button className={style.btn} onClick={() => form.clear()}>Очистить</Button>
                       </Col>
                   </Row>
               </div>
           </Container>

    );
};

export default observer(Card);