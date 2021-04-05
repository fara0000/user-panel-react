import styled from 'styled-components';
import {StyledComponentBase} from 'styled-components/ts3.6';

interface Types extends StyledComponentBase<any, {}> {
    EditWrapper?: any;
    DeleteWrapper?: any;
    ToggleWrapper?: any;
}

export const Wrapper: Types = styled.div`
    height: 100%;
    display: flex;
    padding: 14px 1.2%;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`;

export const DeleteWrapper: Types = styled.div`
    width: 40px;
    display: flex;
    justifyContent: center;
`;

export const EditWrapper: Types = styled.div`
    width: 40px;
    display: flex;
    justifyContent: center;
`;

Wrapper.EditWrapper = EditWrapper;
Wrapper.DeleteWrapper = DeleteWrapper;