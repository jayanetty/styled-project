import styled, { css, createGlobalStyle } from "styled-components";
import {Colors} from '../Helper/variables'
import {Animations} from '../Helper/mixins'

/* ======================== Theme Variables ================================= */

// Theme common variables
export let Theme = {
    primary_font: 'Open Sans, sans-serif',
    secondary_font: 'Open Sans, sans-serif',
    font_size: '1.4rem',
    line_height: '1.4',

    grid__gap: '10px',

    inner_wrapper__width_s: '90%',
    inner_wrapper__width_m: '730px',
    inner_wrapper__width_l: '1270px',
};

export const ListWrapperStyle = css`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const ListWrapper = styled.ul`
    ${ListWrapperStyle};
`;

/* ======================== Global Styling ================================= */
export const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
        font-size-adjust: 100%;

        * {
            box-sizing: border-box;
        }
        
        body {
            margin: 0;
            padding: 0;
            font-family: ${Theme.primary_font}; 
            font-size: 1.4rem;
            line-height: 1.4;  
            color: ${Colors.font_color};
            
            a {
              transition: ${Animations.transition__default};
              color: ${Colors.link_color};
              
              &:hover {
                color: ${Colors.link_color__hover}; 
              }
            }
        } 
    }
`;
