//------------------------------------------------------------------------------------------
// TOKENS SYSTEM
//------------------------------------------------------------------------------------------
var tokensURL = "https://nsxapi.nafaneel.repl.co/api/tokens";



function add() {
  var GID = document.getElementById('token_gid').value;
  var USER = document.getElementById('token_user').value;
  var AMMOUNT = document.getElementById('token_ammount').value;
  var FUNC = "add";

  var data = {
    func: FUNC,
    GID: GID,
    USER: USER,
    AMMOUNT: AMMOUNT
  }

  fetch(tokensURL, {
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
      var value = responseData;
      var value1 = JSON.stringify(value);;
      //document.getElementById("tokensResponse").innerHTML = `${value1} @ ${new Date().toLocaleTimeString()}`;
      //document.getElementById("tokensResponse").style.backgroundColor = "lime";
      return `{response: $(value1}`;
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Error:", error);
    });
}

function remove() {
  //var GID = document.getElementById('token_gid').value;
  //var USER = document.getElementById('token_user').value;
  // var AMMOUNT = document.getElementById('token_ammount').value;
  var FUNC = "remove";

  var data = {
    func: FUNC,
    GID: GID,
    USER: USER,
    AMMOUNT: AMMOUNT
  }

  fetch(tokensURL, {
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
      var value = responseData;
      var value1 = JSON.stringify(value);;
      //document.getElementById("tokensResponse").innerHTML = `${value1} @ ${new Date().toLocaleTimeString()}`;
      //document.getElementById("tokensResponse").style.backgroundColor = "lime";
      return { response: value1 };
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Error:", error);
    });
}

function get_tokens(GID, USER) {
  //var GID = document.getElementById('token_gid').value;
  //var USER = document.getElementById('token_user').value;
  var FUNC = "list";

  var data = {
    func: FUNC,
    GID: GID,
    USER: USER,
  }

  fetch(tokensURL, {
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
      var value = responseData;
      var tokensAmmount = responseData.tokens;
      var value1 = JSON.stringify(tokensAmmount);;
      document.getElementById("tokensShow").innerHTML = `<i>${value1}</i> Tokens`;
      //document.getElementById("tokensShow").style.backgroundColor = "lime";

    })
    .catch(error => {
      console.error("Error:", error);
    });
}