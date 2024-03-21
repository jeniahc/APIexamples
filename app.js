localStorage.setItem("name","Jeniah Clarke");
document.getElementById("demo0").innerHTML = localStorage.getItem("name");

const x = document.getElementById("demo1");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}


function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        x.innerHTML = "User denied the request for Geolocation."
        break;
      case error.POSITION_UNAVAILABLE:
        x.innerHTML = "Location information is unavailable."
        break;
      case error.TIMEOUT:
        x.innerHTML = "The request to get user location timed out."
        break;
      case error.UNKNOWN_ERROR:
        x.innerHTML = "An unknown error occurred."
        break;
    }
  }

function submit1() {
    const inpObj = document.getElementById("id1");
    if (!inpObj.checkValidity()) {
      document.getElementById("demo2").innerHTML = inpObj.validationMessage;
    } else {
      document.getElementById("demo2").innerHTML = "Input OK";
    } 
  } 

  function submit2() {
    let text;
    if (document.getElementById("id2").validity.rangeOverflow) {
      text = "Value too large";
    } else {
      text = "Input OK";
    } 
    document.getElementById("demo3").innerHTML = text;
  }

  function submit3() {
    let text;
    if (document.getElementById("id3").validity.rangeUnderflow) {
      text = "Value too small";
    } else {
      text = "Input OK";
    } 
    document.getElementById("demo4").innerHTML = text;
  }

  let w;

  function startWorker() {
    if(typeof(w) == "undefined") {
      w = new Worker("demo_workers.js");
    }
    w.onmessage = function(event) {
      document.getElementById("result").innerHTML = event.data;
    };
  }
  
  function stopWorker() { 
    w.terminate();
    w = undefined;
  }

  let file = "fetch_info1.txt"

  {fetch (file)
  .then(x => x.text())
  .then(y => document.getElementById("demo5").innerHTML = y);
}

  function goBack() {
    window.history.back();
  }

  function goForward() {
    window.history.forward();
  }

  {getText("fetch_info2.txt");

  async function getText(file) {
    let a = await fetch(file);
    let b = await a.text();
    document.getElementById("demo6").innerHTML = b;
  }}

 { getText("fetch_info3.txt");

async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
  document.getElementById("demo7").innerHTML = myText;
}}