import styled from 'styled-components';

import { colors } from '../../ui/variables';

export const MenuStyle = styled.div`
    width: 100%;
    height: 40px;
    color: #FFFFFF;
    background-color: ${colors.menuBackground};
    margin-bottom: 50px;

    .menu-links {
        display:inline-block;

        ul{list-style: none;}
        
        ul li{
            display: inline-block;
            padding: 0 10px;
        }
        ul li a{
            color: ${colors.fontColor};
        }
    }
    .menu-options {
        display:inline-block; 
    }
`;
