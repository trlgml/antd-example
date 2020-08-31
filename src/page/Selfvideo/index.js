import React from "react";
import Player from 'griffith'

const Selfvideo = () => {
  const sources = {
    hd: {
      play_url: 'http://localhost:3002/video.mp4',
    }
  }
  return (
    <div className="Selfvideo">
      <Player sources={sources} standalone autoplay useMSE />
    </div>
  );
};

export default Selfvideo