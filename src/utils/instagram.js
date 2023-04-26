const ACCESSTOKEN = import.meta.env.PUBLIC_ACCESSTOKEN;
export async function fetchInstagramPosts(numberOfPosts) {
  try {
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,video_url,permalink&access_token=${ACCESSTOKEN}&limit=${numberOfPosts}`
    );

    const responseText = await response.text();

    const data = JSON.parse(responseText);
    if (data.error) {
      throw new Error(data.error.message);
    }
    return data.data;
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    return [];
  }
}

export async function fetchIndividualPost(postId) {
  try {
    const response = await fetch(
      `https://graph.instagram.com/${postId}?fields=id,caption,media_type,media_url,permalink,thumbnail_url&access_token=${ACCESSTOKEN}`
    );

    const responseText = await response.text();

    const data = JSON.parse(responseText);
    if (data.error) {
      throw new Error(data.error.message);
    }
    return data; // Updated line
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    return [];
  }
}
