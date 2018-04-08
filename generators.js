function* run() {
  console.log(1);
  console.log(2);
  yield -1;
  console.log(3);
  console.log(4);
  yield -2;
  console.log(5);
  console.log(6);
}

function getUserDetails(username) {
  console.log("Getting user details");
  fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(user => fetch(user.repos_url).then(res => res.json()))
    .then(repos => console.log(repos));
}

function* getUserDetailsGen(username) {
  console.log("Getting user details");
  let user = yield fetch(`https://api.github.com/users/${username}`).then(res =>
    res.json()
  );
  let repos = yield fetch(user.repos_url).then(res => res.json());
  console.log(repos);
}
