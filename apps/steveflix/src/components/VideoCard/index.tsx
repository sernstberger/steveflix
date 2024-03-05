import { AspectRatio, Link } from '@mui/joy';

export default function VideoCard({ movie }: any) {
  console.log(movie.id, movie.poster_path);
  return (
    <Link href={`${movie.id}/preview`} aria-label="Play MovieName">
      <AspectRatio ratio="2/3" sx={{ minWidth: 200 }}>
        <img
          src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
          loading="lazy"
          alt={movie.title}
        />
      </AspectRatio>
    </Link>
  );
}
