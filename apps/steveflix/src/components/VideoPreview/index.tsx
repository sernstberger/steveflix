import Typography from '@mui/joy/Typography';

import Sheet from '@mui/joy/Sheet';
import { Button } from '@mui/joy';
import { Link, useParams } from 'react-router-dom';
import { useGetMovieQuery } from '../../redux/movieApi';

export default function VideoPreview() {
  const { id } = useParams();
  const { data: movie, isLoading } = useGetMovieQuery(id);

  if (isLoading) return 'Loading...';

  console.log(movie);

  return (
    <Sheet
      variant="outlined"
      sx={{
        p: 3,
      }}
    >
      <Typography
        component="p"
        id="modal-title"
        level="h4"
        textColor="inherit"
        fontWeight="lg"
        // mb={1}
      >
        {movie.title}
      </Typography>

      {/* url('https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg') */}
      <img
        src={`https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`}
        alt="alsdkjf"
      />

      {/* https://media.themoviedb.org/t/p/w300_and_h450_bestv2/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg */}
      <img
        src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
        alt="alsdkjf"
      />

      <Typography>{movie.overview}</Typography>
      <Button component={Link} to={`/${movie.id}/playing`}>
        Play
      </Button>
    </Sheet>
  );
}
