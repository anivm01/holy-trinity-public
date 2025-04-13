**Step-by-step guide** for switching between **Sunday live stream** and **pre-recorded looping video**.

---

## **🔹 Step 1: Get Your YouTube Channel ID**

Since you want to automatically show the latest **live stream**, you need your **YouTube Channel ID**:

1. **Go to your YouTube Channel**.
2. Click on **Your Profile Picture → Settings**.
3. In the left sidebar, click **Advanced Settings**.
4. Copy the **Channel ID** (a long string of letters and numbers).

---

## **🔹 Step 2: Get Your YouTube API Key**

You need a **YouTube API key** to check if your channel is currently live.

1. **Go to the [Google Cloud Console](https://console.cloud.google.com/)**.
2. Click **Create a New Project** (if you don’t already have one).
3. In the sidebar, go to **APIs & Services → Library**.
4. Search for **YouTube Data API v3** and enable it.
5. In **APIs & Services → Credentials**, click **Create Credentials → API Key**.
6. Copy your **YouTube API key**.

---

## **🔹 Step 3: Upload Your Looping Video**

Whenever you want to change the looping video:

1. Upload a **pre-recorded video** to YouTube.
2. Copy its **video ID** from the URL (e.g., `https://www.youtube.com/watch?v=VIDEO_ID`).

---

## **🔹 Step 4: Add the Code to Your Website**

This script will **automatically check if your church is live** and **switch the embedded video**.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Church Live Stream</title>
  </head>
  <body>
    <iframe
      id="youtubePlayer"
      width="560"
      height="315"
      frameborder="0"
      allowfullscreen
    >
    </iframe>

    <script>
      const channelId = "YOUR_CHANNEL_ID"; // Replace with your actual Channel ID
      const apiKey = "YOUR_YOUTUBE_API_KEY"; // Replace with your YouTube API Key
      const liveStreamUrl = `https://www.youtube.com/embed/live_stream?channel=${channelId}`;
      const premiereVideoUrl =
        "https://www.youtube.com/embed/YOUR_PREMIERE_VIDEO_ID"; // Replace with your pre-recorded video ID
      const youtubePlayer = document.getElementById("youtubePlayer");

      async function checkLiveStatus() {
        try {
          const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&eventType=live&key=${apiKey}`
          );
          const data = await response.json();

          if (data.items.length > 0) {
            // A live stream is active
            youtubePlayer.src = liveStreamUrl;
          } else {
            // No live stream, show the looping video
            youtubePlayer.src = premiereVideoUrl;
          }
        } catch (error) {
          console.error("Error fetching YouTube data:", error);
          youtubePlayer.src = premiereVideoUrl; // Fallback to looping video
        }
      }

      // Run the function when the page loads
      checkLiveStatus();

      // Refresh the check every 60 seconds
      setInterval(checkLiveStatus, 60000);
    </script>
  </body>
</html>
```

---

## **🔹 Step 5: How This Works**

- The script **checks if a live stream is active**.
- If **there’s a live broadcast**, it **switches the iframe to the live stream**.
- If **no live stream is found**, it **loads your looping video**.
- The script **checks every 60 seconds**, so when a live stream starts, the embed **automatically switches**.

---

## **🔹 Step 6: When You Need to Update the Looping Video**

Whenever you want to **change the looping video**, just:

1. Upload the new video to YouTube.
2. Get the new **video ID** from the URL.
3. **Update this line** in your code:
   ```javascript
   const premiereVideoUrl = "https://www.youtube.com/embed/NEW_VIDEO_ID";
   ```
4. Save and deploy the updated code.

---

## **🚀 Final Thoughts**

✔ **Fully automated** → No need to update anything weekly.  
✔ **Seamless transition** → Viewers always see the latest live stream or the fallback video.  
✔ **Easy to update** → Just swap the looping video’s ID in the code when needed.

When you’re ready to implement it, follow these steps, and let me know if you need help! 🚀
