import { useState, useEffect } from 'react';

/**
 * Custom hook to fetch videos from a YouTube channel
 * Uses YouTube Data API v3
 * @param {string} channelHandle - YouTube channel handle (e.g., '@ustadhmj')
 * @param {number} maxResults - Maximum number of videos to fetch (default: 10)
 * @returns {Object} - { videos, loading, error }
 */
export const useYouTubeVideos = (channelHandle = '@ustadhmj', maxResults = 10) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        setError(null);

        // The API key should be stored as an environment variable
        const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
        
        if (!apiKey) {
          // If no API key, fall back to static videos
          setLoading(false);
          return;
        }

        // First, get the channel ID from the handle
        const channelResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${encodeURIComponent(channelHandle)}&key=${apiKey}`
        );

        if (!channelResponse.ok) {
          throw new Error('Failed to fetch channel');
        }

        const channelData = await channelResponse.json();
        
        if (!channelData.items || channelData.items.length === 0) {
          throw new Error('Channel not found');
        }

        const channelId = channelData.items[0].snippet.channelId;

        // Get the uploads playlist ID
        const channelDetailsResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${apiKey}`
        );

        if (!channelDetailsResponse.ok) {
          throw new Error('Failed to fetch channel details');
        }

        const channelDetailsData = await channelDetailsResponse.json();
        const uploadsPlaylistId = channelDetailsData.items[0].contentDetails.relatedPlaylists.uploads;

        // Get videos from the uploads playlist
        const videosResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${maxResults}&key=${apiKey}`
        );

        if (!videosResponse.ok) {
          throw new Error('Failed to fetch videos');
        }

        const videosData = await videosResponse.json();
        
        const formattedVideos = videosData.items.map((item, index) => ({
          id: item.snippet.resourceId.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnail: item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default?.url,
          url: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
          publishedAt: item.snippet.publishedAt,
          category: 'Lecture' // Default category, can be enhanced with video tags
        }));

        setVideos(formattedVideos);
      } catch (err) {
        console.error('Error fetching YouTube videos:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [channelHandle, maxResults]);

  return { videos, loading, error };
};

