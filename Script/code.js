function addChar(char){
    document.querySelector("#output").innerHTML += char
  }
  function delChar(){
    document.querySelector("#output").innerHTML = document.querySelector("#output").innerHTML.slice(0, -1)
  }
