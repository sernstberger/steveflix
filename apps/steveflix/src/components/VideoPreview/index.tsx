import Typography from '@mui/joy/Typography';

import Sheet from '@mui/joy/Sheet';
import { Button, Stack } from '@mui/joy';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Link, useParams } from 'react-router-dom';
import { useGetMovieQuery } from '../../redux/movieApi';

export default function VideoPreview() {
  const { id } = useParams();
  const { data: movie, isLoading } = useGetMovieQuery(id);

  if (isLoading) return 'Loading...';

  const director = movie.credits.crew.find(
    (person: any) => person.job === 'Director'
  );
  console.log(director);

  return (
    <Sheet
      variant="plain"
      sx={{
        backgroundImage: `linear-gradient(0deg, #000000, transparent), url("https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // backgroundImage: `linear-gradient(transparent, rgba(0, 0, 0, 0.7))`,
        height: '100vh',
        p: 3,
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        alignItems="flex-end"
        sx={{ height: '100%' }}
      >
        {/* https://media.themoviedb.org/t/p/w300_and_h450_bestv2/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg */}
        <img
          src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
          alt="alsdkjf"
        />

        <div>
          <Typography level="h1">{movie.title}</Typography>
          <Typography>{movie.overview}</Typography>
          <Button
            component={Link}
            to={`/${movie.id}/playing`}
            startDecorator={<PlayArrowIcon />}
          >
            Play
          </Button>

          <Typography>Cast: {movie.credits.cast[0].name}</Typography>
          <Typography>Director: {director.name}</Typography>
        </div>
      </Stack>
    </Sheet>
  );
}
