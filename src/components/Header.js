import React from 'react';
import style from '../style/Header.module.css'
import {Container, Image} from "react-bootstrap";

const Header = () => {
    return (
        <header className={style.header}>
            <Container className={style.container}>
                <h1>Специально для</h1>
                <Image src='https://internship.vk.company/_next/static/media/vk.6c2cf4fd.svg' alt='VK'/>
                <h1>стажировки</h1>
            </Container>
        </header>
    );
};

export default Header;