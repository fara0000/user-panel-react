import styled from 'styled-components';
import { StyledComponentBase } from 'styled-components/ts3.6';

interface Types extends StyledComponentBase<any, {}> {
    title?: any;
}

export const Wrapper:Types = styled.div`
    width: 100%;
    height: 9%;
    display: flex;
    align-items: center;
`;

Wrapper.title = styled.p`
    margin: 0;
    font-size: 19px;
    font-weight: bold;
`;