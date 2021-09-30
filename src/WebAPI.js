export function fetchRegister(userData) {
  return fetch(`http://localhost:5001/register`, {
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
      alert('操作失敗，發生錯誤')
      console.log(err)
    });
}

export function fetchLogin(userData) {
  return fetch(`http://localhost:5001/login`, {
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
      alert('操作失敗，發生錯誤')
      console.log(err)
    });
}

export function fetchSuccess() {
  return fetch(`http://localhost:5001/success`, {
    method: "GET",
    credentials: "include",
  })
    .then((res) => res.json())
    .catch((err) => {
      alert('操作失敗，發生錯誤')
      console.log(err)
    });
}

export function fetchLogout() {
  return fetch(`http://localhost:5001/logout`, {
    method: "GET",
    credentials: "include",
  })
    .then((res) => res.json())
    .catch((err) => {
      alert('操作失敗，發生錯誤')
      console.log(err)
    });
}

export function fetchAddPost(postData) {
  console.log(postData)
  const formData = new FormData();
  for (const name in postData) {
    formData.append(name, postData[name]);
  }
  if (postData['images']) {
    formData.delete('images')
    postData['images'].forEach(each => {
      console.log(each)
      formData.append('images', each)})
    console.log(formData.get('images'))
  }

  return fetch(`http://localhost:5001/api/post`, {
    method: "POST",
    credentials: "include",
    body: formData
  })
    .then((res) => res.json())
    .catch((err) => {
      alert('操作失敗，發生錯誤')
      console.log(err)
    });
}