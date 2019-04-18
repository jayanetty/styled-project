import styled, {css} from 'styled-components';
import {ListWrapper} from './theme';

export const PaginationWrapper = styled(ListWrapper)`
    display: flex;
    border: 1px solid #ccc;
    border-radius: 2px;
    width: max-content;
`;

export const PageNumber = styled.li`
    height: 40px;
    width: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #ccc;
    cursor: pointer; 

    a {
        text-decoration: none;
    }

    &:last-child {
        border-right: 0;
    }
`;

export const PageControls = styled(PageNumber)`
    ${props => props.previous && css`
        &:before {
            content: '<'
        };  
    `}

    ${props => props.next && css`
        &:before {
            content: '>'
        };
    `};
`;

