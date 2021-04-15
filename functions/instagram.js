require('isomorphic-fetch');

const url = `https://www.instagram.com/graphql/query/?query_hash=42d2750e44dbac713ff30130659cd891&variables={"id":"8326806558","first":"8"}`;

const cache = {
  lastFetch: 0,
  posts: [],
};

async function getPosts() {
  // first see if we have a cache in 30 mins
  const timeSinceLastFetch = Date.now() - cache.lastFetch;
  if (timeSinceLastFetch <= 1800000) {
    return cache.posts;
  }
  const data = await fetch(url).then((res) => res.json());
  const posts = slimUpPosts(data);
  cache.lastFetch = Date.now();
  cache.posts = posts;
  return posts;
}

function slimUpPosts(response) {
  return response.data.user.edge_owner_to_timeline_media.edges.map((edge) => ({
    thumbnail: edge.node.thumbnail_src,
    url: `https://instagram.com/p/${edge.node.shortcode}`,
    caption: edge.node.edge_media_to_caption.edges[0].node.text,
    id: edge.node.id,
  }));
}

exports.handler = async function (event, context, callback) {
  const posts = await getPosts();
  callback(null, {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      // 'Cross-Origin-Recource-Policy': 'cross-origin',
      // 'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(posts),
  });
};
