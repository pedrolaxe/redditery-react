import styled from 'styled-components';

import { colors } from '../../ui/variables';

export const MenuStyle = styled.div` 
    width: 100%;
    height: 70px;
    font-size: 11px;
    box-shadow: black 0 0 20px;
    color: #FFFFFF;
    background-color: ${colors.menuBackground};
    position: fixed;
    top: 0;

    .menu-links {
        position: absolute;
        left: 0;
        margin: 5px 0 0px 5px;
        max-width: 650px;

        .reddit-logo {
            position: absolute;
            top: 3px;
            left: 8px;
        }

        ul{list-style: none;}
        
        ul li{
            display: inline-block;
            padding: 0 10px 5px;
        }
        ul li a{
            color: ${colors.fontColor};
            text-decoration: none;
            
            &:hover{
                border-bottom: 1px solid;
                text-shadow: none;
            }
            .error{
                color: red;
            }
        }
        
        .error{
            color: red;
        }
    }
    .menu-options {
        position: absolute;
        right: 20px;
        top: 5px;
        text-align: right;
        color: ${colors.rightMenu};
        
        ul{list-style: none;display: inline-block;}
        
        ul li{
            display: inline-block;
            padding: 0 10px;
        }
        a{
            color: ${colors.rightMenu};
            text-decoration: none;
            
            &:hover{
                border-bottom: 1px solid;
                text-shadow: none;
            }
        }

    }
    }
`;
