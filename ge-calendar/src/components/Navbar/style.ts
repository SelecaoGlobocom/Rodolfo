import styled from 'styled-components';

export const NavBarComponent = styled.div`
    border-bottom: 1px solid rgb(238, 238, 238);
    display: flex;
    position: sticky;
    background-color: rgb(255, 255, 255);
    width: 100%;
    z-index: 2;
    top: 0px;
    transition: all 0.4s ease 0s;
`;

export const NavBarContent = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 48px;
    padding: 0px 18px;
    width: 300px;
    margin: 0px auto;
`;

export const Link = styled.a`
    color: rgb(6, 170, 72);
    text-decoration: none;
`;

export const Title = styled.div`
    font-size: 16px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: -0.3px;
    text-align: center;
    margin: 0px;
    color: rgb(51, 51, 51);
`;