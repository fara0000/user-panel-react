import styled from 'styled-components';
import { StyledComponentBase } from 'styled-components/ts3.6';

interface Types extends StyledComponentBase<any, {}> {
    cellSpan?: any;
}

export const Wrapper: Types = styled.div`
  width: 76%;
  height: 90%;
  display: flex;
  padding: 14px 1.6% 14px 24px;
  align-items: center;
  justify-content: center;
`;

Wrapper.cellSpan = styled.span`
  font-size: 21px;
  font-weight: 400;
`;