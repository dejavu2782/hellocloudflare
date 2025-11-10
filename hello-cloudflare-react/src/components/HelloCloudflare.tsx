import React from 'react';
import './HelloCloudflare.css';
import useAnimation from '../hooks/useAnimation';

const HelloCloudflare: React.FC = () => {
    const animationStyle = useAnimation();

    return (
        <div className="hello-cloudflare" style={animationStyle}>
            <h1>Hello Cloudflare</h1>
        </div>
    );
};

export default HelloCloudflare;