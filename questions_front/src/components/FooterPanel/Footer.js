import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
        bottom: 0;
        width: 100%;
        height: 30px;
        position: fixed;
        z-index: 999;
        text-shadow: 1px 2px 3px #000;
        background-color: rgba(0,0,0,0.3);
        display: flex;
        justify-content: center;
        align-items: center;
    `;

const FooterText = styled.span`
    color: white;
    font-size: 12px;
`;

const FooterTextStrong = styled.a`
    font-weight: 600;
    color: #fad207;
    font-size: 12px;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterText>Copyright 2021 <FooterTextStrong href="https://github.com/minsgy">Choi Min Seok</FooterTextStrong> All rights reserved.</FooterText>
        </FooterContainer>
    );
}

export default Footer;
