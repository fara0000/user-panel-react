import styled from 'styled-components';
import { StyledComponentBase } from 'styled-components/ts3.6';

interface Types extends StyledComponentBase<any, {}> {
    cellSpan?: any;
}

export const Wrapper: Types = styled.div`
    height: 100%;
    display: flex;
    padding: 14px 1.6%;
    align-items: center;
    padding-left: 24px;
`;

Wrapper.cellSpan = styled.span`
    color: '#5D5D5D',
    height: auto;
    opacity: 0.9,
`;
