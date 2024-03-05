import Typography from '@mui/joy/Typography';

import Sheet from '@mui/joy/Sheet';
import { Button, Grid, Stack } from '@mui/joy';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Link, useParams } from 'react-router-dom';
import { useGetMovieQuery } from '../../redux/movieApi';
import AddIcon from '@mui/icons-material/Add';

export default function VideoPreview() {
  const { id } = useParams();
  const { data: movie, isLoading } = useGetMovieQuery(id);

  if (isLoading) return 'Loading...';

  const director = movie.credits.crew.find(
    (person: any) => person.job === 'Director'
  );
  console.log(movie);

  const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(
    new Date(movie.release_date)
  );
  console.log(year);

  return (
    <Sheet
      variant="plain"
      sx={{
        backgroundImage: `linear-gradient(0deg, #000000, transparent), url("https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        p: 3,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Stack
        direction="row"
        maxWidth="lg"
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
          <Grid container spacing={2}>
            <Grid xs={8}>
              <Typography>
                {year} &bull; {movie.runtime} min
              </Typography>

              <Typography level="title-lg">{movie.overview}</Typography>
              {/* <Typography>Rating: {movie.vote_average}</Typography> */}

              <Button
                component={Link}
                size="lg"
                to={`/${movie.id}/playing`}
                startDecorator={<PlayArrowIcon />}
              >
                Play
              </Button>
              <Button
                color="neutral"
                size="lg"
                // component={Link}
                // to={`/${movie.id}/playing`}
                startDecorator={<AddIcon />}
              >
                Add to my list
              </Button>
            </Grid>
            <Grid xs={4}>
              <Typography>
                Cast:{' '}
                {movie.credits.cast
                  .slice(0, 5)
                  .map((castMember: any) => castMember.name)
                  .join(', ')}
              </Typography>
              <Typography>Director: {director.name}</Typography>
              <Typography>
                Genre: {movie.genres.map((genre: any) => genre.name).join(', ')}
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Stack>
    </Sheet>
  );
}
