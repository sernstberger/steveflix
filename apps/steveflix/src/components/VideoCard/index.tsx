import { AspectRatio, Link } from '@mui/joy';

export default function VideoCard() {
  return (
    <Link href="123/preview" aria-label="Play MovieName">
      <AspectRatio ratio="16/9" sx={{ minWidth: 300 }}>
        <img
          src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
          srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
    </Link>
  );
}
