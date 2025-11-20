/**
 * Converts various YouTube URL formats to embed format for iframes
 * @param {string} url - YouTube URL in any format
 * @returns {string} - YouTube embed URL
 */
export const convertToEmbedUrl = (url) => {
  if (!url) return '';
  
  // If already an embed URL, return as is
  if (url.includes('youtube.com/embed/')) {
    return url;
  }
  
  let videoId = '';
  
  // Handle youtu.be short URLs
  if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1].split('?')[0].split('&')[0];
  }
  // Handle youtube.com/watch?v= format
  else if (url.includes('youtube.com/watch')) {
    const urlParams = new URLSearchParams(url.split('?')[1]);
    videoId = urlParams.get('v');
  }
  // Handle youtube.com/v/ format
  else if (url.includes('youtube.com/v/')) {
    videoId = url.split('youtube.com/v/')[1].split('?')[0].split('&')[0];
  }
  
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
  }
  
  // If we can't parse it, return the original URL
  return url;
};

