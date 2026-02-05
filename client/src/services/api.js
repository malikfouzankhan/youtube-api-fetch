import axios from "axios";

const baseURL = "http://localhost:5670/api/videos";

export const fetchVideos = async (page) => {
      try {
            let response = await axios.get(`${baseURL}`, {
                  params: {
                        page,
                        limit: 20,
                  },
            });
            console.log(response.data.data);
            return response.data.data;
      } catch (error) {
            console.log(error.message);
      }
};

export const searchVideos = async (searchQuery, page) => {
      try {
            let response = await axios.get(`${baseURL}/search`, {
                  params: {
                        q: searchQuery,
                        page
                  },
            });
            console.log(response.data.data);
            return response.data.data;
      } catch (error) {
            console.log(error.message);
      }
};