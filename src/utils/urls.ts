const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
export const URLS = {
  YT_MOST_POPULAR_VIDEOS: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`,
  YT_CHANNEL_DETAILS: (channelId: string) =>
    `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY}`,
  YT_VIDEO_BY_ID: (videoId: string | null) =>
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`,
  YT_VIDEOS_BY_SEARCH_QUERY: (query: string) =>
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${API_KEY}`,
};
