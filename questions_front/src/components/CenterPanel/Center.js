import React from 'react';
import FadeIn from 'react-fade-in';
import styled from 'styled-components';
import BGImg from '../../assets/Img/mimmi.jpeg';
import CardComponent from './CardComponent';

const CenterContainer = styled.div`
    height: 100vh; 
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CenterDisplay = styled.div`
        position: fixed;
        top:0;
        left:0;
        bottom:0;
        right: 0;
        background: url(${BGImg}) center center no-repeat;
        background-size: cover;
        z-index: -1;
`;

const Center = () => {
    return (
        <>
        <CenterDisplay />
            <CenterContainer>
                <FadeIn>
                    <CardComponent />
                </FadeIn>
            </CenterContainer>
        </>
    );
}

export default Center;
