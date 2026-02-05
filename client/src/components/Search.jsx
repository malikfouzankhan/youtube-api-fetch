import { useState } from "react";
import { searchVideos,fetchVideos } from "../services/api.js";

const Search = ({videos, setVideos}) => {
    const [query, setQuery] = useState("");

    return (
        <div className="flex items-center justify-center p-5">
            <div className="rounded-lg bg-gray-200 p-2">
                <div className="flex">
                    <input 
                    type="text" 
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                    }}
                    className="w-50 sm:w-70 md:w-sm lg:w-md bg-white pl-2 text-base font-semibold rounded-l-lg outline-0" 
                    placeholder="Type here to search" />
                    <input 
                    type="button"
                    onClick={async () => {
                        let searchResult = await searchVideos(query, 1);
                        setVideos(searchResult);
                    }}
                    defaultValue="Search"
                    className="w-2/7 bg-blue-500 p-2 text-white font-semibold hover:bg-blue-800 cursor-pointer transition-colors" />
                    <input 
                    type="button"
                    onClick={async () => {
                        let resetResult = await fetchVideos(1);
                        setVideos(resetResult);
                        setQuery("")
                    }}
                    defaultValue="Reset"
                    className="w-2/7 bg-red-500 p-2 rounded-r-lg text-white font-semibold hover:bg-red-800 cursor-pointer transition-colors" />
                </div>
            </div>
        </div>
    );
}

export default Search;