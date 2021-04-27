import styled from 'styled-components';
import { JSXElementConstructor } from 'react';
import { StyledComponentBase } from "styled-components/ts3.6";

interface Types extends StyledComponentBase<any, {}> {
    title?: any;
    postButton?: any;
    HeaderContainer?: any;
    PostButtonWrapper?: any;
}

export const Wrapper: Types = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0 21px 0 30px;
    background: #F6F7F8;
`;

export const HeaderContainer: Types = styled.div`
    width: 100%;
    height: 9%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const PostButtonContainer: Types = styled.button`
    width: 100px;
    height: 34px;
    border: 1px solid #5C59EC;
    margin: 0;
    cursor: pointer;
    outline: none;
    padding: 5px 13px 5px 14px;
    display: flex;
    background: none;
    align-items: center;
    border-radius: 4px;
    flex-direction: row;
`;

export const IconWrapper: Types = styled.div`
    width: 24px;
    height: 24px;
    margin-right: 4px;
    display: flex;
    align-items: center;
`;

export const TitleContainer: Types = styled.div`
    width: 42px;
    height: 21px;
    display: flex;
    align-items: center;
`;

TitleContainer.title = styled.span`
    color: #5C59EC;
    font-size: 13px;
`;

