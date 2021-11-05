const baseUrl = "https://api.outshaker.tw";
//const baseUrl = "http://localhost:5001";

export function fetchLoginStatus() {
  return fetch(`${baseUrl}/get-me`, {
    method: "GET",
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      alert("操作失敗，發生錯誤");
      console.log(err);
      return { ok: 0 };
    });
}

export async function fetchRegister(userData) {
  return fetch(`${baseUrl}/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      username: userData.username,
      password: userData.password,
      checkedPassword: userData.checkedPassword,
      email: userData.email,
    }),
  })
    .then((res) => res.json())
    .catch((err) => {
      alert("操作失敗，發生錯誤");
      console.log(err);
    });
}

export function fetchLogin(userData) {
  return fetch(`${baseUrl}/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      username: userData.username,
      password: userData.password,
    }),
  })
    .then((res) => res.json())
    .catch((err) => {
      alert("操作失敗，發生錯誤");
      console.log(err);
    });
}

export function fetchLogout() {
  return fetch(`${baseUrl}/logout`, {
    method: "GET",
    credentials: "include",
  })
    .then((res) => res.json())
    .catch((err) => {
      alert("操作失敗，發生錯誤");
      console.log(err);
    });
}

export function fetchAdmin() {
  return fetch(`${baseUrl}/admin`, {
    method: "GET",
    credentials: "include",
  })
    .then((res) => res.json())
    .catch((err) => {
      alert("操作失敗，發生錯誤");
      console.log(err);
    });
}

export function fetchBanUser(userId) {
  return fetch(`${baseUrl}/admin/ban/${userId}`, {
    method: "PATCH",
    credentials: "include",
  })
    .then((res) => res.json())
    .catch((err) => {
      alert("操作失敗，發生錯誤");
      console.log(err);
      return { ok: 0 };
    });
}

export function fetchUnBanUser(userId) {
  return fetch(`${baseUrl}/admin/unban/${userId}`, {
    method: "PATCH",
    credentials: "include",
  })
    .then((res) => res.json())
    .catch((err) => {
      alert("操作失敗，發生錯誤");
      console.log(err);
      return { ok: 0 };
    });
}

export function fetchPostsAndPicturesByPlaceId(limit, offset, placeId, filter) {
  return fetch(
    `${baseUrl}/api/map?limit=${limit}&offset=${offset}&place_id=${placeId}&order=${filter}`,
    {
      method: "GET",
    }
  )
    .then((res) => res.json())
    .catch((err) => {
      alert("操作失敗，發生錯誤");
      console.log(err);
    });
}

export function fetchAddPost(postData) {
  const formData = new FormData();
  for (const name in postData) {
    formData.append(name, postData[name]);
  }
  if (postData["images"]) {
    formData.delete("images");
    postData["images"].forEach((each) => {
      formData.append("images", each);
    });
  }

  return fetch(`${baseUrl}/api/post`, {
    method: "POST",
    credentials: "include",
    body: formData,
  })
    .then((res) => res.json())
    .catch((err) => {
      alert("操作失敗，發生錯誤");
      console.log(err);
    });
}
export function fetchEditPost(postData, postId) {
  const formData = new FormData();
  for (const name in postData) {
    formData.append(name, postData[name]);
  }
  if (postData["images"]) {
    formData.delete("images");
    postData["images"].forEach((each) => {
      formData.append("images", each);
    });
  }

  return fetch(`${baseUrl}/api/post/${postId}`, {
    method: "PATCH",
    credentials: "include",
    body: formData,
  })
    .then((res) => res.json())
    .catch((err) => {
      alert("操作失敗，發生錯誤");
      console.log(err);
    });
}
export function fetchPostsByUserId(userId, offset, order, unpublished) {
  return fetch(
    `${baseUrl}/api/post/user/${userId}?limit=5&offset=${offset}&order=${order}&unpublished=${unpublished}`,
    {
      method: "GET",
      credentials: "include",
    }
  )
    .then((res) => res.json())
    .catch((err) => {
      alert("操作失敗，發生錯誤");
      console.log(err);
    });
}
export function fetchAllPosts(offset) {
  return fetch(`${baseUrl}/api/post/?limit=5&offset=${offset}`, {
    method: "GET",
    credentials: "include",
  })
    .then((res) => res.json())
    .catch((err) => {
      alert("操作失敗，發生錯誤");
      console.log(err);
    });
}
export function fetchPostByPostId(id, userId) {
  return fetch(`${baseUrl}/api/post/${id}?user_id=${userId}`, {
    method: "GET",
    credentials: "include",
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      alert("操作失敗，發生錯誤");
      console.log(err);
      return { ok: 0 };
    });
}
export function fetchUserData(userId) {
  return fetch(`${baseUrl}/api/user/${userId}`, {
    method: "GET",
    credentials: "include",
  })
    .then((res) => res.json())
    .catch((err) => {
      alert("操作失敗，發生錯誤");
      console.log(err);
      return { ok: 0 };
    });
}

export function fetchEditUserData(data, userId) {
  console.log(data);
  const formData = new FormData();
  for (const name in data) {
    formData.append(name, data[name]);
  }
  return fetch(`${baseUrl}/api/user/${userId}`, {
    method: "POST",
    credentials: "include",
    body: formData,
  })
    .then((res) => res.json())
    .catch((err) => {
      alert("操作失敗，圖片檔案太大");
      console.log(err);
    });
}
export function fetchDeletePost(id) {
  return fetch(`${baseUrl}/api/post/${id}`, {
    method: "DELETE",
    credentials: "include",
  })
    .then((res) => res.json())
    .catch((err) => {
      alert("操作失敗，發生錯誤");
      console.log(err);
    });
}
export function adminSearchUser(username) {
  return fetch(`${baseUrl}/admin?username=${username}`, {
    method: "GET",
    credentials: "include",
  })
    .then((res) => res.json())
    .catch((err) => {
      alert("操作失敗，發生錯誤");
      console.log(err);
      return { ok: 0 };
    });
}
