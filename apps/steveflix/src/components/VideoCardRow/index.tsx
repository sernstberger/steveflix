import { useGetListQuery } from '../../redux/listApi';
import VideoCard from '../VideoCard';
import { Stack, Typography } from '@mui/joy';

interface VideoCardRowProps {
  title: string;
  listType: 'popular' | 'top_rated' | 'now_playing' | 'upcoming';
}

export default function VideoCardRow({ title, listType }: VideoCardRowProps) {
  const { data, isLoading } = useGetListQuery(listType);

  if (isLoading) return 'Loading...';

  // console.log(data.results);

  return (
    <div>
      <Typography level="title-lg">{title}</Typography>
      <Stack
        direction="row"
        sx={{
          display: 'flex',
          gap: 2,
          p: 0,
          overflowX: 'auto', // remove if using a carousel effect instead of scroll
        }}
      >
        {data.results.map((movie: any) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </Stack>
    </div>
  );
}
