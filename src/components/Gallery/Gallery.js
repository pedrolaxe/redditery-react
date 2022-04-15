import React, { Component } from 'react';
import { GalleryStyle } from './GalleryStyle';


class Gallery extends Component {
    constructor(props) {
        super(props);
    }
    
    render() { 
        const ApiData = this.props.ApiData;

        return (
            <GalleryStyle>
                {
                   ApiData.map((item, index) => {
                        return (
                            <div className="gallery-content" key={index}>
                                <div className="gallery-title">
                                    <h4>{item.data.title}</h4>
                                </div>

                                <div className="gallery-image">
                                    <img src={item.data.url} alt={item.data.title} key={index} />
                                </div>

                                <div className="gallery-infos">
                                    <h4>by {item.data.author}</h4>
                                </div>


                            </div>
                        )
                    })
                }
            </GalleryStyle>
         );
    }
}
 
export default Gallery;