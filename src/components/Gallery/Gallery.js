import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GalleryStyle } from './GalleryStyle';


class Gallery extends Component {
    
    render() { 
        const ApiData = this.props.ApiData;

        return (
            <GalleryStyle>
                {
                   ApiData.map((item, index) => {
                        return (
                            <div className="gallery-content" key={index}>
                                <div className="gallery-title">
                                    <h4><Link to={{pathname: 'http://reddit.com'+item.data.permalink}} target="_blank">{item.data.title}</Link></h4>
                                </div>                    
                                {
                                    (item.data.is_video) ?
                                    <div className="gallery-video">
                                        <video muted="" loop="" className="mp4">
                                            <source src={item.data.secure_media.reddit_video['fallback_url']} type="video/mp4" />
                                        </video>
                                    </div>
                                    : (item.data.selftext.length) ?
                                    <div className="gallery-textarea">    
                                        <p>{item.data.selftext}</p>
                                    </div>
                                    :
                                    <div className="gallery-image">    
                                        <img src={item.data.url} alt={item.data.title} key={index} />
                                    </div>
               
                                }
                
                                <div className="gallery-infos">
                                    <h4>{item.data.num_comments} Comments - by <Link to={{pathname: '/user/'+item.data.author.trim()}} target="_blank">{item.data.author.trim()}</Link></h4>
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