//USERNAME FIELD = username
//PASSWORD FIELD = password

function login() {
  //document.getElementById("loginResponse").style.backgroundColor = "grey";
  document.getElementById("loginResponse").innerHTML = `<img style="width:15px;height:auto;" src="loading.gif">`;
  var loginURL = "https://nsxapi.nafaneel.repl.co/api/creds";
  var login = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  var data = {
    func_type: 'check',
    user: login,
    password: password
  };
  //alert(data);

  fetch(loginURL, {
    method: "POST",
    mode: 'cors',
    headers: {
      "Content-Type": "application/json"
    },
    //body: JSON.stringify(data)
    body: JSON.stringify(data)

  })
    .then(response => response.json())
    .then(responseData => {
      console.log(responseData);
      var value = responseData.response;

      var GID = responseData.gid;
      var SID = responseData.sid;
      var USR = responseData.usr;

      var value1 = JSON.stringify(value);
      var output = JSON.stringify(responseData)
      if (value1.includes("true") == true) {
        //document.getElementById("loginResponse").style.backgroundColor = "#333333";
        document.getElementById("loginResponse").innerHTML = `Welcome`;
        //document.getElementById("loginResponse").innerHTML = `<img style="width:15px;height:auto;" src="tick.png">`;
        var params = `?usr=${USR}&gid=${GID}&sid=${SID}`;
        setInterval(window.location.href = "home.html" + params, 3000);
      } else {
        document.getElementById("loginResponse").style.backgroundColor = "tomato";
        document.getElementById("loginResponse").innerHTML = "Credentials Incorrect!"
      }

      //add redirect to home
    })
    .catch(error => {
      console.error("Error:", error);
    });
}

function pars(loc) {
  console.log(loc);
  alert(loc);
}

function details() {
  const queryString = window.location.search;
  console.log(queryString);
  strNew = queryString.replace("?usr=", "");
  strNew = strNew.replace("gid=", "");
  strNew = strNew.replace("sid=", "");
  let [usr, gid, sid] = strNew.split("&");
  return { usr: usr, gid: gid, sid: sid };
}

function check_login() {
  const queryString = window.location.search;
  console.log(queryString);
  strNew = queryString.replace("?usr=", "");
  strNew = strNew.replace("gid=", "");
  strNew = strNew.replace("sid=", "");
  let [usr, gid, sid] = strNew.split("&");
  console.log("USR: " + usr);
  console.log("SID: " + sid);
  console.log("GID: " + gid);

  document.getElementById("user").innerHTML = "USR: " + usr;
  document.getElementById("sid").innerHTML = "SID: " + sid;
  document.getElementById("gid").innerHTML = "GID: " + gid;
}

function sidCheck() {

  var sidURL = "https://nsxapi.nafaneel.repl.co/api/sid";

  var data = {
    func_type: 'check',
  };
  //alert(data);

  fetch(sidURL, {
    method: "POST",
    mode: 'cors',
    headers: {
      "Content-Type": "application/json"
    },
    //body: JSON.stringify(data)
    body: JSON.stringify(data)

  })
    .then(response => response.json())
    .then(responseData => {
      console.log(responseData);
      //var value = responseData.response;


      var SID = JSON.stringify(responseData.sid);

      console.log(SID);
      return SID;

      //add redirect to home
    })
    .catch(error => {
      console.error("Error:", error);

    });
}

//Fancy Stuff


//check stored data creds and url creds