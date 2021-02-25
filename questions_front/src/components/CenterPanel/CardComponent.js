import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    display: flex;
    width: 100%;
    height: 50vh;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const CardForm = styled.div`
    display: flex;
    text-align: left;
    align-items: center;
    flex-direction: column;
    background-color: rgba(0,0,0, 0.5);
    width: 70%;
    height: 100%;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 2px 4px rgba(#000, 0.2);
    cursor: pointer;
    transition: 0.3s ease;
    
    &:hover {
      box-shadow: 0 2px 4px rgba(#000, 0.2),
        0 4px 8px rgba(#000, 0.2);
    }
    
    &:active {
      box-shadow: none;
      transform-origin: center;
      transform: scale(0.95);
    }
    
`; 

const CardTitleText = styled.h2`
    display: block;
    width: 100%;
    font-size: 40px;
    color: #fad207;
    text-shadow: 1px 2px 3px #000;
    margin: 30px 0;
`;

const CardText = styled.p`
    width: 100%;
    font-size: 30px;
    color: white;
    text-shadow: 1px 2px 3px #000;
`;




const CardComponent = () => {
    return (
        <CardContainer>
            <CardForm>
                <CardTitleText>Q1.</CardTitleText>
                <CardText>
                    후~하~! 이츠 퐐로뮈~ 오우예! 징한놈들 나와라 와라와라 병나팔을 부러라~
                </CardText>
            </CardForm>
        </CardContainer>
    );
}

export default CardComponent;
