import styled from 'styled-components';
import { StyledComponentBase } from 'styled-components/ts3.6';

interface Types extends StyledComponentBase<any, {}> {
    cellSpan?: any;
}

export interface Props {
    height: string;
}

export const Wrapper: Types = styled.div`
    width: 100%;
    height: ${(props: Props) => props.height};
    display: flex;
`;