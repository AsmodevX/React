import React from 'react';
import { AutoComplete, Carousel } from 'antd';
import { Image } from 'antd';

const contentStyle: React.CSSProperties = {
    height: '500px',
    color: '#fff',
    lineHeight: '200px',
    textAlign: 'center',
    background: '#364d79',
  };

const Test2 = () => {
    return (
        <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>
      <Image
    width={1000}
    src="/img/OIP.jpg"
  />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <Image
    width={500}
    src="/img/guy-david-ebon-hextall-a-chess-board-with-anthropomorphic-chess-pieces-on-ff325b1e-1ce2-4631-aa4e-3ab0d4fce82e.jpg"
  />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <Image
    width={500}
    src="/img/view-dramatic-chess-pieces-with-mysterious-mystical-ambiance.jpg"
  />
      </h3>
    </div>
  </Carousel>
    );

}

export default Test2