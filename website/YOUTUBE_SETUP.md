# YouTube Channel Integration Setup

This website can automatically fetch and display videos from the YouTube channel `@ustadhmj`.

## Current Status

The website is configured to use the YouTube channel: **@ustadhmj** (`https://youtube.com/@ustadhmj`)

By default, the site uses static videos defined in `src/data/content.js`. To enable automatic fetching from YouTube, follow the setup below.

## Setup Instructions (Optional)

To enable automatic video fetching from the YouTube channel:

### 1. Get a YouTube Data API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **YouTube Data API v3**:
   - Navigate to "APIs & Services" > "Library"
   - Search for "YouTube Data API v3"
   - Click "Enable"

### 2. Create API Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "API Key"
3. Copy your API key

### 3. Add API Key to Environment Variables

Create a `.env` file in the `website` directory:

```bash
VITE_YOUTUBE_API_KEY=your_api_key_here
```

**Important:** Never commit the `.env` file to git. It's already in `.gitignore`.

### 4. For Netlify Deployment

If deploying to Netlify, add the environment variable in the Netlify dashboard:

1. Go to your Netlify site dashboard
2. Navigate to "Site settings" > "Environment variables"
3. Add: `VITE_YOUTUBE_API_KEY` with your API key value

### 5. Restart Development Server

After adding the API key, restart your development server:

```bash
npm run dev
```

## How It Works

- **Without API Key:** The site uses static videos from `src/data/content.js`
- **With API Key:** The site automatically fetches the latest videos from the YouTube channel

The integration will:
- Fetch up to 20 videos from the channel (configurable)
- Display them on the Videos page
- Show the latest 3 videos on the homepage Featured Videos section
- Automatically update when new videos are published

## Channel Configuration

The channel is configured in `src/data/content.js`:

```javascript
export const youtubeChannel = {
  handle: '@ustadhmj',
  url: 'https://youtube.com/@ustadhmj'
};
```

To change the channel, update these values.

