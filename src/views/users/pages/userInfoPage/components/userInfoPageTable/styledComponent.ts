import styled from 'styled-components';
import { StyledComponentBase } from 'styled-components/ts3.6';

interface Types extends StyledComponentBase<any, {}> {
    title?: any;
}

export const Wrapper: Types = styled.div`
    width: 100%;
    height: 774px;
    background: #FFFFFF;
    margin-top: 33px;
`;
