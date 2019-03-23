import styled from "styled-components";
import {Theme} from "./theme";
import {Colors} from '../Helper/variables';
import {Device} from '../Helper/mixins' 

const Variables = {
    label_background_color__error: '#E24C4C',
    label_color__error: '#fff',
    input_padding: '8px 10px',
    input_border_width: '2px',
    input_border_color: `${Colors.primary_color}`,
    input_border_color__disabled: `${Colors.gray}`,
    input_border_style: 'solid',
    input_color: `${Colors.white}`,  
    input_background_color: `${Colors.gray}`,
    input_margin: '0 0 20px 0'
};

export const Input = styled.input`
    font: ${Theme.font_size} ${Theme.primary_font};
    padding: ${Variables.input_padding};
    border-width: ${Variables.input_border_width};
    border-style: ${Variables.input_border_style};
    border-color: ${Variables.input_border_color}; 
    margin: ${Variables.input_margin};
    background-color: ${Colors.white};
    color: ${Colors.black}; 
    outline: none;
    width: calc(100% - 20px);

    &:disabled {
        border-color: ${Variables.input_border_color__disabled};
    }

    &::-webkit-input-placeholder {
        color: ${Colors.gray_light_bluish}; 
    }

    @media ${Device.tablet} {
        max-width: 480px;
        width: 100%;
    }
`;

export const ErrorLabel = styled.label`
    position: absolute; /* Should add wrapper with position relative */
    bottom: -19px;
    left: 0;
    min-width: 160px;
    font-size: 10px;
    font-weight: 800;
    text-transform: uppercase;
    padding: .2em .8em;
    background-color: ${Variables.label_background_color__error};
    color: ${Variables.label_color__error};
    letter-spacing: 0;
`;

export const Select = styled.select`
    font: ${Theme.font_size} ${Theme.primary_font};
    padding: ${Variables.input_padding};
    border-width: ${Variables.input_border_width};
    border-style: ${Variables.input_border_style};
    border-color: ${Variables.input_border_color}; 
    margin: ${Variables.input_margin};
    background-color: ${Colors.white};
    color: ${Colors.black}; 
    outline: none;
    width: calc(100% - 20px);
    cursor: pointer;
    width: 480px;
    
`

export const Option = styled.div`
    padding: ${Variables.input_padding};

`