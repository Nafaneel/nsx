function get_perms(GID, USER) {
  var permsURL = 'https://nsxapi.nafaneel.repl.co/api/permissions';
  
  //var GID = document.getElementById('token_gid').value;
  //var USER = document.getElementById('token_user').value;
  var FUNC = "list";

  var data = {
    GID: GID,
    USR: USER,
  }

  fetch(permsURL, {
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
      return value;

    })
    .catch(error => {
      console.error("Error:", error);

    });
}