window.onload = function() {
  var page = window.location.href;
  //Mega Functions:

  //flip() - Runs all the newCoin.html functions
  //  newflip() - flips the coin
  //  setFace()- Changes the coin face

  //clearStorage() - Runs settings.html funcrtions
  //  removeAllStorage() - Clears all local storage

  //getFace() - Runs all coinFaces.html Functions
  //  setCoinStorage() - Sets local storage coin value
  //  removeCoinStorage() - Removes local coin storage value

  //Authenticity() - runs all Authenticity.html code

  // document.getElementById("coinBody").addEventListener("load", everything());
  // document.getElementById("settingsBody").addEventListener("load", everything());
  // document.getElementById("facesBody").addEventListener("load", everything());
  // document.getElementById("authenticityBody").addEventListener("load", everything());

  if (page.includes("newCoin.html")) {
    console.log("flip()");
    flip();
  } else if (page.includes("settings.html")) {
    console.log("clearStorage()");
    clearStorage();
  } else if (page.includes("coinFaces.html")) {
    console.log("getFace()");
    getFace();
  } else if (page.includes("Authenticity.html")) {
    console.log("auth()");
    Authenticity();
  }


  function flip() {
    document.getElementById("button").addEventListener("click", newflip);
    console.log("hello");

    function newflip() {
      if (localStorage.getItem("headsChecked") == "true") {
        console.log("Heads");
        var element = document.getElementById("newCoin");
        element.classList.remove("Heads", "Tails");

        setTimeout(function() {
          element.classList.toggle("Heads", true);
        }, 100);

      } else if (localStorage.getItem("tailsChecked") == "true") {
        console.log("Tails");
        var element = document.getElementById("newCoin");
        element.classList.remove("Heads", "Tails");

        setTimeout(function() {
          element.classList.toggle("Tails", true);
        }, 100);

      } else {
        console.log("fair");
        var coinResult = Math.floor(Math.random() * 2);
        var element = document.getElementById("newCoin");
        element.classList.remove("Heads", "Tails");

        setTimeout(function() {
          if (coinResult == 0) {
            element.classList.toggle("Heads", true);

          } else {
            element.classList.toggle("Tails", true);
          }
        }, 100)
      }
      document.getElementById("newCoin").addEventListener("webkitAnimationStart", () => {
        document.getElementById("result").innerHTML = (". . .");
      });
      document.getElementById("newCoin").addEventListener("webkitAnimationEnd", () => {
        document.getElementById("result").innerHTML = element.className;
      });
    }

    //Change Coin Face Script
    var i = 0;
    console.log("past var");
    console.log(i);
    if (document.getElementById("coinBody")) {
      console.log("alive");
    } else {
      console.log("not");
    }

    if (document.getElementById("coinBody")) {
      console.log("started");
      while (i <= 1) {
        console.log("inside");
        if (localStorage.getItem("coinHeads") !== null && localStorage.getItem("coinTails") !== null) {
          document.getElementById("heads").src = localStorage.getItem("coinHeads");
          document.getElementById("tails").src = localStorage.getItem("coinTails");
          console.log("works");
          i++;
        } else {
          console.log("Doesnt work");
          i++;
        }
        console.log("ended");
      }
    };

  }
  //Reset All Button Script

  // } else if (page.includes("settings.html")){
  function clearStorage() {
    document.getElementById("restore").addEventListener("click", removeAllStorage);

    function removeAllStorage() {
      localStorage.clear();
      console.log("cleared local storage");
      localStorage.setItem("fair", "true");
    }
  }
  //Change Coin Face Script
  // } else if (page.includes("coinFaces.html")){
  function getFace() {
      var coin;
      document.getElementById("pound").addEventListener("click", () => {
        coin = "pound";
        console.log(coin);
        setCoinStorage();
      });
      document.getElementById("twoFace").addEventListener("click", () => {
        coin = "twoface";
        console.log(coin);
        setCoinStorage();
      });


      function setCoinStorage() {
        localStorage.setItem("coinHeads", "pictures/" + coin + "-heads.png");
        localStorage.setItem("coinTails", "pictures/" + coin + "-tails.png");
        console.log(coin);
        console.log(localStorage.getItem("coinHeads"))
      }
      document.getElementById("restore").addEventListener("click", removeCoinStorage);

      function removeCoinStorage() {
        localStorage.clear("coinHeads", "coinTails");
        console.log("cleared local storage");
      }
    }

  //Authenticity settings
  // } else if (page.includes("Authenticity.html")){
  function Authenticity() {
    var input = document.getElementById("wrapper");
    var alwaysHeads = document.getElementById("alwaysHeads");
    var alwaysTails = document.getElementById("alwaysTails");
    var fair = document.getElementById("fair");
    if (localStorage.getItem("headsChecked") == "" && localStorage.getItem("tailsChecked") == "") {
      localStorage.setItem("fair", "true");
      fair.checked = localStorage.getItem("fair");
    }
    //sets the "always heads" checkbox to checked if it should be
    alwaysHeads.checked = localStorage.getItem("headsChecked");
    //checks if the checkbox is true, if yes sets a localstorage item "headsChecked" to true,
    //if not, sets it to nothing
    if (alwaysHeads.checked == true) {
      localStorage.setItem("headsChecked", "true");
      alwaysHeads.checked = localStorage.getItem("headsChecked");
    } else {
      localStorage.setItem("headsChecked", "");
    }
    //whenever any of the boxes are clicked, check if alwaysheads is checked or not.
    wrapper.addEventListener("click", () => {
      if (alwaysHeads.checked == true) {
        localStorage.setItem("headsChecked", "true");
        alwaysHeads.checked = localStorage.getItem("headsChecked");
      } else {
        localStorage.setItem("headsChecked", "");
      }
    });
    //same as above, but with tails

    alwaysTails.checked = localStorage.getItem("tailsChecked");
    if (alwaysTails.checked == true) {
      localStorage.setItem("tailsChecked", "true");
      alwaysTails.checked = localStorage.getItem("tailsChecked");
    } else {
      localStorage.setItem("tailsChecked", "");
    }

    wrapper.addEventListener("click", () => {
      if (alwaysTails.checked == true) {
        localStorage.setItem("tailsChecked", "true");
        alwaysTails.checked = localStorage.getItem("tailsChecked");
      } else {
        localStorage.setItem("tailsChecked", "");
      }
    });

    console.log(localStorage.getItem("headsChecked"));
    console.log(localStorage.getItem("tailsChecked"));

    fair.checked = localStorage.getItem("fair");
    if (fair.checked == true) {
      localStorage.setItem("fair", "true");
      fair.checked = localStorage.getItem("fair");
    } else {
      localStorage.setItem("fair", "");
    }

    wrapper.addEventListener("click", () => {
      if (fair.checked == true) {
        localStorage.setItem("fair", "true");
        fair.checked = localStorage.getItem("fair");
      } else {
        localStorage.setItem("fair", "");
      }
    });

    document.getElementById("restore").addEventListener("click", removeStorage);

    function removeStorage() {
      localStorage.clear("alwaysHeads", "alwaysTails", "fair");
      console.log("cleared local storage");
      localStorage.setItem("fair", "true");
      fair.checked = localStorage.getItem("fair");
    }
  }
}
