import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Billboard } from '../components/Billboard';
import VideoCardRow from '../components/VideoCardRow';
import VideoPlayer from '../components/VideoPlayer';
import VideoPreview from '../components/VideoPreview';

export function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Billboard />
              <VideoCardRow title="Popular Movies" listType="popular" />
              <VideoCardRow title="Now Playing Movies" listType="now_playing" />
              <VideoCardRow title="Top Rated Movies" listType="top_rated" />
              <VideoCardRow title="Upcoming Movies" listType="upcoming" />
            </div>
          }
        />
        <Route path=":id">
          <Route path="preview" element={<VideoPreview />} />
          <Route path="playing" element={<VideoPlayer />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
