var timer = 1;

function comeOn() {

    while (timer > 0 && timer < 40) {

        document.getElementById("loginBackground1").style.visibility = "visible";
        document.getElementById("loginBackground2").style.visibility = "hidden";
        document.getElementById("loginBackground3").style.visibility = "hidden";
        document.getElementById("loginBackground4").style.visibility = "hidden";

        console.log(timer);
    }

    while (timer > 39 && timer < 80) {

        document.getElementById("loginBackground1").style.visibility = "hidden";
        document.getElementById("loginBackground2").style.visibility = "visible";
        document.getElementById("loginBackground3").style.visibility = "hidden";
        document.getElementById("loginBackground4").style.visibility = "hidden";
        timer++;

    }

    while (timer > 79 && timer < 120) {

        document.getElementById("loginBackground1").style.visibility = "hidden";
        document.getElementById("loginBackground2").style.visibility = "hidden";
        document.getElementById("loginBackground3").style.visibility = "visible";
        document.getElementById("loginBackground4").style.visibility = "hidden";
        timer += 1;

    }

    while (timer > 119 && timer < 160) {

        document.getElementById("loginBackground1").style.visibility = "hidden";
        document.getElementById("loginBackground2").style.visibility = "hidden";
        document.getElementById("loginBackground3").style.visibility = "hidden";
        document.getElementById("loginBackground4").style.visibility = "visible";
        timer += 1;

    }




}