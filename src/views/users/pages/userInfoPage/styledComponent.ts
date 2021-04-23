import styled from 'styled-components';
import { JSXElementConstructor } from 'react';
import { StyledComponentBase } from "styled-components/ts3.6";

interface Types extends StyledComponentBase<any, {}> {
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
    display: flex;
    justify-content: space-evenly;
`;

export const PostButtonWrapper: Types = styled.div`
  
`;

PostButtonWrapper.postButton = styled.button`

`;

