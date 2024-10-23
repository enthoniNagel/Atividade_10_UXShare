import React from 'react';
import PostCard from './PostCard'; 
import Marquee from './magicui/marquee'; 

const MarqueeDemo = () => {
  return (
    <div>
      <Marquee>
        <PostCard />
        <PostCard />
        <PostCard />
      </Marquee>
    </div>
  );
};

export default MarqueeDemo;
