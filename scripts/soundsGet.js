function soundsFetch(gid) {

  var soundsURL = "https://nsxapi.nafaneel.repl.co/api/sounds";
  var soundsGID = gid; //document.getElementById("sounds-gid").value;
  var sounds_raw = "";
  var data = {
    func_type: "get",
    gid: soundsGID
  }

  fetch(soundsURL, {
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
      var value = responseData.sounds;
      var value1 = JSON.stringify(value);
      var value2 = value1.replaceAll('"', '');
      var value3 = value2.replaceAll("^", '\n');
      addSounds(value3);
      //document.getElementById("soundsResponse").innerHTML = new Date().toLocaleTimeString();;
    })
    .catch(error => {
      console.error("Error:", error);

    });




  function addSounds(sounds_string) {
    var x = document.getElementById("userSoundSelect");
    //var inputString = "--MISC--\nroadrage\nscream\nburp\n--STEVEN DAWSON--\npussy";
    var inputString = sounds_string.toString();
    const lines = inputString.split('\n');

    for (const line of lines) {
      var option = document.createElement("option");
      option.text = line;
      if (line.includes("=")) {
        option.disabled = true;
      }
      x.add(option);
    }
  }
}