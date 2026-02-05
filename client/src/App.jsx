import { fetchVideos } from "./services/api.js"
import Search from "./components/Search.jsx"
import Loader from "./components/Loader.jsx"
import { useState, useEffect } from "react";
import Video from "./components/Video.jsx";
import PaginationRounded from "./components/Pagination.jsx";

function App() {
  const [videos, setVideos] = useState([]);
  const [loader, setLoader] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState();
  let dummy_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const loadVideos = async () => {
    let data = await fetchVideos(currentPage);
    setVideos(data.data);
    setCurrentPage(data.page);
    setTotalPages(data.totalPages)
    setLoader(false);
  }

  useEffect(() => {
    loadVideos();
  }, []);
  // fetchVideos();
  return (
    <div className="h-dvh bg-gray-200 overflow-hidden flex flex-col">


      {/* Search Bar */}
      <div className="shadow-xl p-2">
        <Search videos={videos} setVideos={setVideos} />
      </div>

      <div className="mx-auto py-4">
        <PaginationRounded setCurrentPage={setCurrentPage} setVideos={setVideos} currentPage={currentPage} totalPages={totalPages} />
      </div>

      {/* Scrollable Area */}
      <div className="flex-1 min-h-0 overflow-y-auto">

        {/* Inner Grid Wrapper */}

        {
          loader ? (<div className="p-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 max-w-8xl mx-auto justify-items-center">
            {dummy_array.map((x, index) => (
              <Loader key={index} />
            ))}
          </div>) : (<div className="p-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 max-w-8xl mx-auto justify-items-center">
            {videos.map((video, index) => (
              <Video title={video.title} publishedAt={video.publishedAt} thumbnail={video.thumbnails} channelTitle={video.channelTitle} url={video.url} key={video.videoId} />
            ))}
          </div>)
        }

      </div>

    </div>
  )
}

export default App