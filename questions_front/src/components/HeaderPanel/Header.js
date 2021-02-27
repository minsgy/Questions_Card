import React from 'react';
import styled from 'styled-components';
import LogoImage from '../..//assets/Img/slogan.png';

const LogoImg = styled.div`
        background: url(${LogoImage}) center center no-repeat;
        position: fixed;
        top: 10px;
        left: 20px;
        width: 30px;
        height: 30px;
        background-size: contain;
        z-index: 400;
    `;

const HeaderContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 50px;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
    text-align: right;
`;

const HeaderText = styled.h2`
    font-size: 20px;
    font-weight: 600;
    line-height: 50px;
    padding-right: 3vw;
    text-shadow: 1px 2px 3px #000;


`;


const Header = () => {
    return (
        <HeaderContainer>
            <LogoImg />
            <HeaderText>멋쟁이사자처럼 at SCH</HeaderText>
        </HeaderContainer>
    );
}

export default Header;
