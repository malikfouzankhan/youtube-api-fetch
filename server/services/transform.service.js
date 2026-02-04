const transformVideos = (items) => {
      return items.map((item) => ({
            videoId: item.id.videoId,

            title: item.snippet.title,
            description: item.snippet.description,

            publishedAt: item.snippet.publishedAt,
            thumbnails: item.snippet.thumbnails,
            channelTitle: item.snippet.channelTitle,
            tags: item.snippet.tags || [],
            url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
            fetchedAt: new Date()
      }));
};

export default transformVideos;