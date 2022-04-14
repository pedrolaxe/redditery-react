import styled from 'styled-components';

import { colors } from '../../ui/variables';

export const MenuStyle = styled.div`
    width: 100%;
    height: 40px;
    color: #FFFFFF;
    background-color: ${colors.menuBackground};
    padding: 10px;

    ul{
        list-style: none;
    }
    ul li{
        display: inline-block;
        padding: 0 10px;
    }
    ul li a{
        color: ${colors.fontColor};
    }
`;
