import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FooterStyle } from './FooterStyle';

class Footer extends Component {

    render() {
        return (

            <FooterStyle>
                <>
                    <span className='gray'>&copy; 2022</span> redditery-react <span className='gray'>by</span> <Link to={{ pathname: 'https://github.com/pedrolaxe' }} target="_blank">Pedro Laxe</Link> ・ <span className='gray'>reddit and the alien logo are registered trademarks of</span> reddit <span className='gray'>inc.</span>
                </>
            </FooterStyle>
        );
    }
}

export default Footer;