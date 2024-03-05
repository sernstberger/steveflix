import React, { useRef } from 'react';

export default function VideoPlayer() {
  const videoRef = useRef<any>(null);

  const playVideo = () => {
    videoRef.current?.play();
  };

  const pauseVideo = () => {
    videoRef.current?.pause();
  };

  const stopVideo = () => {
    videoRef.current?.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <div>
      <video ref={videoRef} width="320" height="240">
        <source
          src="https://assets.codepen.io/6093409/river.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div>
        <button onClick={playVideo}>Play</button>
        <button onClick={pauseVideo}>Pause</button>
        <button onClick={stopVideo}>Stop</button>
      </div>
    </div>
  );
}
