import React from 'react';
import {Container} from "react-bootstrap";
import Card from "./components/Card";
import style from './style/Container.module.css'
import Header from "./components/Header";


const App = () => {
    return (
        <div>
            <Header/>
            <Container className={style.container}>
                <Card/>
            </Container>
        </div>
    );
};

export default App;