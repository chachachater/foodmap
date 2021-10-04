const BASE_URL = "http://localhost:5001";

export function FetchGetPost(id) {
  return fetch(`${BASE_URL}/api/post/${id}`)
    .then((res) => res.json())
    .catch((err) => {
      console.log(err.message);
    });
}

export function FetchGetUser(userId) {
  return fetch(`${BASE_URL}/api/user/${userId}`)
    .then((res) => res.json())
    .catch((err) => {
      console.log(err.message);
    });
}

export function FecthGetUserPosts(userId) {
  return fetch(`${BASE_URL}/api/post/user/${userId}?limit=10&offset=0`, {
    method: "GET",
    credentials: "include",
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err.message);
    });
}

export function FecthEditPost({
  id,
  restaurant_id,
  title,
  content,
  visited_time,
  is_published,
}) {
  return fetch(`${BASE_URL}/api/post/${id}`, {
    method: "PATCH",
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      restaurant_id,
      title,
      content,
      visited_time,
      is_published,
    }),
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err.message);
    });
}

export function fetchDletePost(id) {
  return fetch(`${BASE_URL}/api/post/${id}`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err.message);
    });
}
