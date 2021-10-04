const BASE_URL = "http://localhost:5001";

export function fetchGetPost(id) {
  return fetch(`${BASE_URL}/api/post/${id}`)
    .then((res) => res.json())
    .catch((err) => {
      console.log(err.message);
    });
}

export function fetchGetUser(userId) {
  return fetch(`${BASE_URL}/api/user/${userId}`)
    .then((res) => res.json())
    .catch((err) => {
      console.log(err.message);
    });
}

export function fetchGetUserPosts(userId) {
  return fetch(`${BASE_URL}/api/post/user/${userId}?limit=10&offset=0`, {
    method: "GET",
    credentials: "include",
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err.message);
    });
}
