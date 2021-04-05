import styled from 'styled-components';
import { StyledComponentBase } from 'styled-components/ts3.6';

interface Types extends StyledComponentBase<any, {}> {
    title?: any;
}

export const Wrapper:Types = styled.div`
    width: 100%;
    height: 6%;
`;

Wrapper.title = styled.p`
    margin: 7px 0 0 3px;
    font-size: 18px;
    font-weight: bold;
`;