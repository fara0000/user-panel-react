import styled, { StyledComponentBase } from 'styled-components';

export interface Types extends StyledComponentBase<any, any> {
    heading?: any;
}

export const Wrapper: Types = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
    width: 100%;
    justify-content: center;
`;

Wrapper.heading = styled.h1`
    color: red;
    text-align: center;
`;