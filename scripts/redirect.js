function redirectUsr(params) {
  const queryString = window.location.search;
  console.log(queryString);
  setTimeout(window.location.href = params + queryString, 5000);
}
function logout() {
  window.location.href = "index.html";
}