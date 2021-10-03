const baseUrl = "http://localhost:5001";

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
      checkedPassword: userData.checkedpassword,
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

export function fetchSuccess() {
  return fetch(`${baseUrl}/success`, {
    method: "GET",
    credentials: "include",
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

export function fetchAddPost(postData) {
  console.log(postData);
  const formData = new FormData();
  for (const name in postData) {
    formData.append(name, postData[name]);
  }
  if (postData["images"]) {
    formData.delete("images");
    postData["images"].forEach((each) => {
      console.log(each);
      formData.append("images", each);
    });
    console.log(formData.get("images"));
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
export function fetchEditPost(postData, id) {
  console.log(postData);
  const formData = new FormData();
  for (const name in postData) {
    formData.append(name, postData[name]);
  }
  if (postData["images"]) {
    formData.delete("images");
    postData["images"].forEach((each) => {
      console.log(each);
      formData.append("images", each);
    });
    console.log(formData.get("images"));
  }

  return fetch(`${baseUrl}/api/post/${id}`, {
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
export function fecthPostsByUserId(userId, order) {
  return fetch(
    `${baseUrl}/api/post/user/${userId}?limit=1&offset=0&order=${order}`,
    {
      method: "GET",
      credentials: "include",
    }
  )
    .then((res) => res.json())
    .catch((err) => {
      alert("操作失敗，發生錯誤");
      console.log(err.message);
    });
}
export function fecthPostByPostId(id) {
  return fetch(`${baseUrl}/api/post/${id}`, {
    method: "GET",
    credentials: "include",
  })
    .then((res) => res.json())
    .catch((err) => {
      alert("操作失敗，發生錯誤");
      console.log(err.message);
    });
}
export function fetchUserData(userId) {
  console.log(userId);
  return fetch(`${baseUrl}/api/user/${userId}`, {
    method: "GET",
    credentials: "include",
  })
    .then((res) => res.json())
    .catch((err) => {
      alert("操作失敗，發生錯誤");
      console.log(err);
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
      alert("操作失敗，發生錯誤");
      console.log(err);
    });
}
