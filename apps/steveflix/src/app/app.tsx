import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Billboard } from '../components/Billboard';
import VideoCardRow from '../components/VideoCardRow';
import VideoPlayer from '../components/VideoPlayer';

export function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Billboard />
              <VideoCardRow />
              <VideoCardRow />
              <VideoCardRow />
            </div>
          }
        />
        <Route path=":id">
          <Route path="preview" element={<div>Preview</div>} />
          <Route path="playing" element={<VideoPlayer />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
