import React, {useState} from 'react';
import styled from 'styled-components';
import Data from '../../assets/Data/data_json.json'; // 데이터값 가져오기

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
    background-color: rgba(0,0,0, 0.85);
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

    width: 100%;
    font-size: 40px;
    color: #fad207;
    text-shadow: 1px 2px 3px #000;
    margin: 20px 0 0;
`;

const CardText = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 30px;
    color: white;
    text-shadow: 1px 2px 3px #000;
    height: 70%;
`;

const RandomButton = styled.button`
    position :relative;
    font-weight: 600;
    width: 50%;
    height: 50px;
    font-size: 15px;
    background-color: rgba(0,0,0,0.7);
    color: white;
`;

const CardComponent = () => {
    const [SelectCardText, SetSelectCardText] = useState("멋쟁이 사자처럼 질문 카드")
    // const [CardText, SetCardText] = useState('')
    const [SelectCardNumber, SetSelectCardNumber] = useState(0)
    const [Visited, SetVisited] = useState([])

    const randomCount = () => {
        // 찾을때까지 반복함.
        while(true){ 
            const randomNumber = (Math.floor(Math.random() * Object.keys(Data[0]).length + 1));
            console.log("visited : " + Visited, typeof(Visited))
            if (Visited.length === Object.keys(Data[0]).length){ // 모든 데이터 방문 했을 시, 안내 문자
                alert("모든 질문을 확인 했습니다.")
                break;
            }
            if (Visited.indexOf(String(randomNumber)) !== -1){ // 중복 패스.
                continue;
            }
            else {
                SetSelectCardNumber(randomNumber)
                SetSelectCardText(Data[0][randomNumber][0].quiz)
                console.log("text : " + Data[0][randomNumber][0].quiz)
                SetVisited([...Visited, String(randomNumber)])
                break;
            }
        }
    }

    return (
        <CardContainer>
            <CardForm>
                <CardTitleText>Q{SelectCardNumber}.</CardTitleText>
                <CardText>
                    {SelectCardText}
                </CardText>
                <RandomButton onClick={randomCount}>다음 질문 뽑기</RandomButton>
            </CardForm>
        </CardContainer>
    );
}

export default CardComponent;
