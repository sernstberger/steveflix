import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

export function Billboard() {
  return (
    <Card sx={{ minWidth: 300, flexGrow: 1 }}>
      <CardCover>
        <video
          autoPlay
          loop
          muted
          poster="https://assets.codepen.io/6093409/river.jpg"
        >
          <source
            src="https://assets.codepen.io/6093409/river.mp4"
            type="video/mp4"
          />
        </video>
      </CardCover>
      <CardContent>
        <Typography
          level="body-lg"
          fontWeight="lg"
          textColor="#fff"
          mt={{ xs: 12, sm: 18 }}
        >
          Video
        </Typography>
      </CardContent>
    </Card>
  );
}
