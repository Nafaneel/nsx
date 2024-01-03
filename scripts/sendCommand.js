  //------------------------------------------------------------------------------------------
  // SEND SOUND COMMAND
  //------------------------------------------------------------------------------------------
  var triggerURL = "https://nsxapi.nafaneel.repl.co/api/trigger";

  function send_command(GID, USR, SOUND, DELAY) {
    //var GID = document.getElementById("send_gid").value;
    //var USR = document.getElementById("send_id").value;
    //var SOUND = document.getElementById("send_sound").value;
    //var DELAY = document.getElementById("send_delay").value;
    var FUNC = "trigger";
    var CURR_TIME = "00:00:00";

    var data = {
      func: FUNC,
      GID: GID,
      user: USR,
      sound: SOUND,
      delay: DELAY,
      time: CURR_TIME

    }
    fetch(triggerURL, {
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
        var value1 = JSON.stringify(value);;
        //document.getElementById("sendResponse").innerHTML = `${value1} @ ${new Date().toLocaleTimeString()}`;
        //document.getElementById("sendResponse").style.backgroundColor = "lime";
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }