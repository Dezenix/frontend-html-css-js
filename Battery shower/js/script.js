setInterval(() => {
    navigator.getBattery()
        .then(function(battery) {
            var bater = document.getElementById("bater").value = battery.level * 100 + "%";




        });

    navigator.getBattery().then(function(battery) {
        var bat = document.getElementById("bat");
        bat.value = battery.level * 100;


    });

}, 1000);

navigator.getBattery().then(function(battery) {

    if (battery.level < 0.20) {
        console.log(" keep your device for charge!");


    } else {
        console.log("battery percentage updating...")
    }

});