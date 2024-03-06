import React, { useRef } from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import { Box, Button, IconButton, Slider, Stack, Typography } from '@mui/joy';

export default function VideoPlayer() {
  const videoRef = useRef<any>(null);

  const playVideo = () => {
    videoRef.current?.play();
  };

  const pauseVideo = () => {
    videoRef.current?.pause();
  };

  return (
    <Box
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ height: '100vh', width: '100vw' }}
    >
      <AspectRatio sx={{ width: '100vw' }}>
        <video ref={videoRef} width="320" height="240">
          <source
            src="https://assets.codepen.io/6093409/river.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </AspectRatio>

      <Box
        position="absolute"
        top={0}
        left={0}
        padding={5}
        height="100vh"
        width="100vw"
      >
        <Stack justifyContent="space-between" height="100%">
          <div>
            <Typography>Rated PG-13</Typography>
            <Typography>Drinking</Typography>
          </div>

          <IconButton sx={{ alignSelf: 'center' }} onClick={playVideo}>
            Play
          </IconButton>
          {/* <button onClick={pauseVideo}>Pause</button> */}
          <div>
            <Typography level="h1">MovieName</Typography>
            <Slider value={40} />
          </div>
        </Stack>
      </Box>
    </Box>
  );
}
