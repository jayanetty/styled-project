import styled, {css} from 'styled-components';
import { Device, Animations } from "../Helper/mixins";
import { Row, Column } from "../Helper/grids";
import { Theme } from "./theme";
import {Colors} from '../Helper/variables'; 

const Variables = {
  sideBarWidth: '230px' 
}

export const OuterWrapper = styled.section`
  width: 100%;
`;

export const InnerWrapper = styled.section`
  margin: 0 auto;
  width: 100%; 
  max-width: ${Theme.inner_wrapper__width_s};

  ${props => props.sidebar && css`
      margin-left: calc(${Variables.sideBarWidth} + ${Theme.grid__gap});
      width: calc(100% - (${Variables.sideBarWidth} + ${Theme.grid__gap}));
  `};
  
  @media ${ Device.tablet } {
    max-width: ${ Theme.inner_wrapper__width_m };
  }
  
  @media ${ Device.desktop } {
    max-width: ${ Theme.inner_wrapper__width_l };
  } 
`;

export const CardWrapper = styled(Row)`

`

export const Card = styled(Column)`
  cursor: pointer;
  padding: 10px;
  background-color: ${Colors.white};
  border-radius: 2px;
  box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.1), 0px 0px 0px 0px rgba(0,0,0,0.1), 0px 0.5px 1px 0.25px rgba(0,0,0,0.1);

  ${props => props.image_details && css`
      overflow: hidden;
      margin-bottom: 20px;
      position: relative;
      padding: 0;
  `};

  span {
    display: block;
    overflow: hidden;

    img {
      width: 100%;
      display: block;
      transition: all 1s ease;
    }
  }

  p {
    text-align: center;
  }

  a {
    text-decoration: none;
    color: ${Colors.white};
    display: block;
    background-color: ${Colors.gray};

    p {
      position: relative;
      padding: 10px;
      font-size: 1.4rem;
      margin: 0;
    }
    
    &:hover {
      img {
        transform: ${Animations.zoom_in}; 
      }
    }
  }
`;

export const TableWrapper = styled(Row)`

`

export const TableColumn = styled(Column)`
  padding: 20px;
`

export const Sidebar = styled.aside`
  width: ${Variables.sideBarWidth};
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: ${Colors.primary_color};
  z-index: 9;
`

export const SidebarItem = styled.p`
  color: ${Colors.white};
  padding: 10px;
  width: 100%;
  cursor: pointer;
`
