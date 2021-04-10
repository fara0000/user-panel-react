import styled from 'styled-components';
import { StyledComponentBase } from 'styled-components/ts3.6';

interface Types extends StyledComponentBase<any, {}> {
    cellSpan?: any;
}

export interface Props {
    width: string;
    color: string;
}

export const Wrapper: Types = styled.div`
    width: ${(props: Props) => props.width};
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 24px;
    flex-direction: column;
`;

Wrapper.cellSpan = styled.span`
    color: ${(props: Props) => props.color};
    height: auto;
    opacity: 0.9;
`;
