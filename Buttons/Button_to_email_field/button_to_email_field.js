function sub() {
        var input = document.createElement("input");
        var button = document.getElementById("emailsub");
        input.setAttribute("type", "email");
        input.setAttribute("id", "input");
        input.setAttribute("placeholder", "Email");
        var send = document.createElement("button");
        send.setAttribute("id", "send");
        send.innerHTML = "send";
        //  document.getElementById("sub ").innerHTML = " ";
        document.getElementById("button").replaceChild(input, button);
        document.getElementById("button").appendChild(send);
    }
