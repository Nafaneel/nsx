//SENT
document.getElementById('popup').style.visibility = "hidden";
function sent() {
  document.getElementById('popup').style.visibility = "visible";
  document.getElementById('popup').className = "sent";
  document.getElementById('bodyBlur').className = "notify_on";
  clearSent();
}
function clearSent() {
  setTimeout(function() { document.getElementById('popup').className = "sent1"; }, 1500);
  setTimeout(function() { document.getElementById('popup').style.visibility = "visible"; }, 2000);
  setTimeout(function() { document.getElementById('bodyBlur').className = "notify_off"; }, 1500)
}

//ERROR
document.getElementById('popup2').style.visibility = "hidden";
function error() {
  document.getElementById('popup2').style.visibility = "visible";
  document.getElementById('popup2').className = "sent";

}
function clearError() {
  setTimeout(function() { document.getElementById('popup2').className = "sent1"; }, 1);
  setTimeout(function() { document.getElementById('popup2').style.visibility = "visible"; }, 500);

}

//LOADING 
document.getElementById('loading').style.visibility = "hidden";
function loading() {
  document.getElementById('loading').style.visibility = "visible";
  document.getElementById('loading').className = "sent";

  //setTimout(function () {document.getElementById('load_msg').innerHTML = "Somethings Not Right!";}, 5000);

}
function clearLoading() {
  setTimeout(function() { document.getElementById('loading').className = "sent1"; }, 1);
  setTimeout(function() { document.getElementById('loading').style.visibility = "visible"; }, 500);
}

//UPDATE
document.getElementById('update').style.visibility = "hidden";
function update() {
  document.getElementById('update').style.visibility = "visible";
  document.getElementById('update').className = "update";

}
function clearUpdate() {
  setTimeout(function() { document.getElementById('update').className = "update1"; }, 1);
  setTimeout(function() { document.getElementById('update').style.visibility = "visible"; }, 500);
}