import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FooterStyle } from './FooterStyle';

class Footer extends Component {
    
    render() { 
        return ( 
            
            <FooterStyle>
                <>
                &copy; 2022 redditery-react v1.0 by <Link to={{pathname: 'https://github.com/pedrolaxe'}} target="_blank">Pedro Laxe</Link>
                </>
            </FooterStyle>
         );
    }
}
 
export default Footer;