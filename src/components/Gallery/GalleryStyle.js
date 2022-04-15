import styled from 'styled-components';

import { colors } from '../../ui/variables';

export const GalleryStyle = styled.div`
   .gallery-content{

        .gallery-title{
            max-width: 50%;
            margin: 0 auto;

            h4{
                background-color: ${colors.menuBackground};
                white-space: pre-line;
                padding: 20px 25px 20px 25px;
                margin: -20px 0 -20px 20px;
                display: inline-block;
                font-weight: normal;
                border-radius: 10px;
                max-width: 65%;
                font-size: 15px;
            }
            a{
                color: ${colors.fontColor};
                text-decoration: none;
            }
            a:hover{
                text-shadow: white 0 0 10px;
            }
        }
        
        .gallery-image{
            max-width: 50%;
            display: block;
            margin: 0 auto;
        }

        .gallery-image img{
            max-width: 80%;
            border: 20px solid ${colors.menuBackground};
            border-radius: 10px;
        }

        .gallery-infos{
            max-width: 50%;
            margin: 0 auto;
            margin-bottom: 30px;
            h4{
                background-color: ${colors.menuBackground};
                white-space: pre-line;
                padding: 20px 25px 20px 25px;
                margin: -20px 0 10px 20px;
                display: inline-block;
                font-weight: normal;
                border-radius: 10px;
                max-width: 65%;
                font-size: 15px;
            }
            a{
                color: ${colors.fontColor};
                text-decoration: none;
            }
        }
   }
   
   
`;
