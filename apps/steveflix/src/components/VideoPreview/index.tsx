import Typography from '@mui/joy/Typography';

import Sheet from '@mui/joy/Sheet';
import { Button } from '@mui/joy';
import { Link } from 'react-router-dom';
import { useGetMovieQuery } from '../../redux/movieApi';

export default function VideoPreview() {
  const id = 693134;
  const { data: movie, isLoading } = useGetMovieQuery(id);

  if (isLoading) return 'Loading...';

  return (
    <Sheet
      variant="outlined"
      sx={{
        p: 3,
      }}
    >
      <Typography
        component="h2"
        id="modal-title"
        level="h4"
        textColor="inherit"
        fontWeight="lg"
        mb={1}
      >
        {movie.title}
      </Typography>

      <Typography
        component="h2"
        id="modal-title"
        level="h4"
        textColor="inherit"
        fontWeight="lg"
        mb={1}
      >
        This is the modal title
      </Typography>
      <Typography id="modal-desc" textColor="text.tertiary">
        Make sure to use <code>aria-labelledby</code> on the modal dialog with
        an optional <code>aria-describedby</code> attribute.
      </Typography>
      <Button component={Link} to="/123/playing">
        Play
      </Button>
    </Sheet>
  );
}