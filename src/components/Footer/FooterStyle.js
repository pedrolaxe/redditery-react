import styled from 'styled-components';

import { colors } from '../../ui/variables';

export const FooterStyle = styled.div`
    font-size: 12px;
    padding-top: 2px;
    position: fixed;
    width: 100%;
    bottom: 0;
    background-color: ${colors.black};
    box-shadow: ${colors.black} 0 0 20px;
    text-align: center;

    a{
        color: ${colors.fontColor};
        text-decoration: none;
    }
`;