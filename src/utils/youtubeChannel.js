/**
 * Utility functions for YouTube channel integration
 */

/**
 * Extracts channel handle from YouTube URL
 * @param {string} url - YouTube channel URL
 * @returns {string} - Channel handle (e.g., '@ustadhmj')
 */
export const extractChannelHandle = (url) => {
  if (!url) return '@ustadhmj';
  
  // Handle @username format
  if (url.includes('@')) {
    const match = url.match(/@([^/?]+)/);
    return match ? `@${match[1]}` : '@ustadhmj';
  }
  
  // Handle /c/ or /user/ format
  const channelMatch = url.match(/\/(?:c|user|channel)\/([^/?]+)/);
  if (channelMatch) {
    return `@${channelMatch[1]}`;
  }
  
  return '@ustadhmj';
};

/**
 * Gets channel ID from handle using YouTube Data API
 * Note: Requires API key
 */
export const getChannelIdFromHandle = async (handle, apiKey) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${encodeURIComponent(handle)}&key=${apiKey}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch channel');
    }
    
    const data = await response.json();
    return data.items?.[0]?.snippet?.channelId || null;
  } catch (error) {
    console.error('Error getting channel ID:', error);
    return null;
  }
};

