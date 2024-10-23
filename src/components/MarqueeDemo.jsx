// src/components/MarqueeDemo.jsx

import React from 'react';
import PostCard from './PostCard'; // Verifique se o caminho está correto
import Marquee from './magicui/marquee'; // Verifique se o caminho está correto

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
