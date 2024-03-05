import { Billboard } from '../components/Billboard';
import VideoCardRow from '../components/VideoCardRow';
import VideoPlayer from '../components/VideoPlayer';

export function App() {
  return (
    <div>
      <VideoPlayer />
      <Billboard />

      <VideoCardRow />
      <VideoCardRow />
      <VideoCardRow />
    </div>
  );
}

export default App;
