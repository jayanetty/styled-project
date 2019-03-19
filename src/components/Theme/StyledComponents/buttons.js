import styled from "styled-components";
import {Colors} from "../Helper/variables";
import {Animations} from "../Helper/mixins";

const Button = styled.button`
    padding: 10px 20px;
    text-transform: uppercase;
    font-size: 1.3rem;
    text-align: center; 
    min-width: 160px;
    border: 2px solid ${Colors.primary_color};
    transition: ${Animations.transition__default};
    background-color: transparent;
    color: ${Colors.white};
    border-radius: 4px;
    white-space: nowrap;
    margin: 5px;
`

export const PrimaryButton = styled(Button)`
    background-color: ${Colors.primary_color}; 

    &:hover {
      background-color: ${Colors.white}; 
      color: ${Colors.primary_color};
    }
`;

export const SecondaryButton = styled(Button)`
    color: ${Colors.primary_color};
    
    &:hover {
      border-color: ${Colors.primary_color};
      background-color: ${Colors.primary_color}; 
      color: ${Colors.white};
    }
`;

export const IconButton = styled(SecondaryButton)`
    position: relative;
    padding-left: 40px;
    
    &:before {
      content: '+';
      left: 12px;  
      position: absolute;
      font-size: 2.5rem; 
      top: 2px; 
    }
`;