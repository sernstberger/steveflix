import * as React from 'react';
import { AspectRatio, Link } from '@mui/joy';
import VideoModal from '../VideoModal';

export default function VideoCard() {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      <Link
        href="#dribbble-shot"
        aria-label="Play MovieName"
        onClick={() => setOpen(true)}
      >
        <AspectRatio
          ratio="16/9"
          sx={{ minWidth: 300 }}
          onClick={() => setOpen(true)}
        >
          <img
            src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
            srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </Link>

      <VideoModal {...{ open, setOpen }} />
    </React.Fragment>
  );
}
