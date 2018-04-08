var a, b, rest;
let marks = [25, 34, 15, 26];
let m1 = marks[0];
let m3 = marks[2];
[mm1, mm2, mm3] = marks;

let members = ["Jack", "Jill", "Hill", "Bill", "Chill"];
[manager, lead, ...team] = members;

let apiResponse = {
  username: "baluragala",
  url: "https://github.com/baluragala",
  type: "paid"
};
// let username, url, type;
// username = apiResponse.username;
// url = apiResponse.url;
// type = apiResponse.type;
let { username, url, type: membership } = apiResponse;
