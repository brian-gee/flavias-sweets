const ACCESSTOKEN = import.meta.env.PUBLIC_ACCESSTOKEN;
export async function fetchInstagramPosts(numberOfPosts) {
  try {
      const response = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${ACCESSTOKEN}&limit=${numberOfPosts}`);
      const data = await response.json();
      if (data.error) {
          throw new Error(data.error.message);
      }
      return data.data;
  } catch (error) {
      console.error('Error fetching Instagram posts:', error);
      return [];
  }
}
