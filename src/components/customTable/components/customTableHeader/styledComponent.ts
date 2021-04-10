import styled from 'styled-components';
import { StyledComponentBase } from 'styled-components/ts3.6';

interface Types extends StyledComponentBase<any, {}> {
    cellSpan?: any;
    ActionWrapper?: any;
}

export interface Props {
    height: string;
}

export const Wrapper: Types = styled.div`
    width: 100%;
    height: ${(props: Props) => props.height};
    display: flex;
    border-bottom: 1px solid #E7E7E7;
`;

export const ActionWrapper: Types = styled.div`
  width: 20%;
  height: 90%;
  display: flex;
  padding: 14px 1.6% 14px 24px;
  align-items: center;
  justify-content: center;
`;

ActionWrapper.cellSpan = styled.span`
  font-size: 21px;
  font-weight: 400;
`;

Wrapper.ActionWrapper = ActionWrapper;