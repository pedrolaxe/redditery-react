import React, { Component } from 'react';

import { FooterStyle } from './FooterStyle';

class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            
            <FooterStyle>
                <>
                &copy; 2022 redditery react v1.0 by laxe.dev
                </>
            </FooterStyle>
         );
    }
}
 
export default Footer;