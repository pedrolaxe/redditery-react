import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class notFound extends Component {
    render() {
        return (
            <div style={{ textAlign: 'center', marginTop: 180 }}>
                <h1>404 - Not Found!</h1>
                <Link to="/" style={{color:"#fff"}}>Go Home</Link>
            </div>
        );
    }
}

export default notFound;