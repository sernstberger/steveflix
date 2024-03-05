import VideoCard from '../VideoCard';
import { Stack, Typography } from '@mui/joy';

export default function VideoCardRow() {
  return (
    <div>
      <Typography level="title-lg">Title goes here</Typography>
      <Stack
        direction="row"
        sx={{
          display: 'flex',
          gap: 2,
          p: 0,
          overflowX: 'auto', // remove if using a carousel effect instead of scroll
        }}
      >
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </Stack>
    </div>
  );
}
