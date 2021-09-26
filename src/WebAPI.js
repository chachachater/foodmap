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
      password2: userData.checkedpassword,
      email: userData.email,
    }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
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
    .catch((err) => console.log(err));
}

export function fetchSuccess() {
  return fetch(`http://localhost:5001/success`, {
    method: "GET",
    credentials: "include",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

export function fetchLogout() {
  return fetch(`http://localhost:5001/logout`, {
    method: "GET",
    credentials: "include",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}
