import styled from 'styled-components';

export const CardStyle = styled.div`
    width: 242px;
    background-color: rgb(255, 255, 255);
    border-width: 1px;
    border-style: solid;
    border-color: rgb(238, 238, 238);
    border-image-source: initial;
    border-image-slice: initial;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: initial;
    color: rgb(51, 51, 51);
    padding: 16px 24px;
    margin-left: -1px;
    margin-top: -1px;
    margin-bottom: 0px;
    text-decoration-line: none;
    text-decoration-style: initial;
    text-decoration-color: initial;
    text-decoration: none;
    display: block;
`;

export const Header = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin-bottom: 12px;
    color: rgb(85, 85, 85);
    font-size: 12px;
    line-height: 1.33;
`;

export const TimeContainer = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 1.71;
    letter-spacing: -0.3px;
    font-weight: 600;
`;
export const Time = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`;

export const Placar = styled.div`
    text-align: right;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`;

export const VejaComoFoi = styled.a`
    color: rgb(6, 170, 72);
    font-size: 14px;
    font-weight: 600;
    line-height: 1.14;
    letter-spacing: -0.3px;
    text-decoration-line: none;
    text-decoration-style: initial;
    text-decoration-color: initial;
    text-decoration: none;
`;
export const Rodada = styled.span`
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    color: rgb(85, 85, 85);
    display: block;
    margin-top: 15px;
`;