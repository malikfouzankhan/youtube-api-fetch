const Video = ({ title, publishedAt, thumbnail, channelTitle, url }) => {
    return (
        <div className="flex flex-col bg-white w-56 h-64 rounded-xl p-4 gap-3 shadow-md">

            {/* Thumbnail (Clickable) */}
            <a href={url} target="_blank" rel="noopener noreferrer">
                <div className="w-full h-32 rounded-md overflow-hidden">
                    <img
                        src={thumbnail.default.url}
                        alt="video thumbnail"
                        className="w-full h-full object-cover"
                    />
                </div>
            </a>

            {/* Text Content */}
            <div className="flex flex-col gap-1">

                {/* Title (Clickable) */}
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold leading-tight line-clamp-2 hover:underline"
                >
                    {title}
                </a>

                {/* Channel Name */}
                <p className="text-xs text-gray-600 truncate">
                    {channelTitle}
                </p>

                {/* Publish Date */}
                <p className="text-xs text-gray-500">
                    {Math.floor((new Date() - new Date(publishedAt)) / 60000)} minutes ago
                </p>

            </div>
        </div>

    )
}

export default Video