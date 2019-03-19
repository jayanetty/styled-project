import styled from "styled-components";
import {Colors} from "./variables";
import {Theme} from "../StyledComponents/theme";

const variables = {
    h1_font_size: '4rem',
    h1_margin: '0 0 40px',
    h2_font_size: '2.4rem',
    h2_margin: '0 0 20px'
}

export const H1 = styled.h1`
    font: ${variables.h1_font_size} ${Theme.secondary_font};
    margin: ${variables.h1_margin};
    padding: 0;
`

export const H2 = styled(H1)`
    font-size: ${variables.h1_margin};
    margin-bottom: ${variables.h2_font_size};
`

export const H3 = styled.h3`
    font-size: 1.8rem;
    font-weight: normal;
    margin: 0 0 18px;
`

export const H4 = styled(H3)`
    color: ${Colors.red};
    margin: 0;
`

export const P = styled.p`
`

export const Ps = styled(P)`
    color: ${Colors.dark_gray};
    font-size: 1.4rem;
`;

