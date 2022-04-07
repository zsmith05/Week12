var win = 0;
var loose = 0;


let userNum = document.getElementById("getNumber");
userNum.addEventListener("keydown", function (e)  {
    if (e.keyCode == 13) {
        run(e);
    }
});

userNum.focus();

let counter = 0;

function run() {
    randomNum();
    userNumber();
    compareNumbers();
}

 function randomNum() {
     let ran = Math.floor(Math.random() * 10);
     let x = document.getElementById("random");
     x.innerHTML = ran;
     x.style.backgroundColor = "transparent";
     x.style.color = "white";
     x.style.padding = "20px";
     x.style.textAlign = "center";
     return ran;
 }

 function userNumber() {
    let user = document.getElementById("getNumber").value;
    let y =  document.getElementById("userNumber");
    y.innerHTML = user;
    y.style.backgroundColor = "transparent";
    y.style.color = "white";
    y.style.padding = "20px";
    y.style.textAlign = "center";
    return user;
 }

 function compareNumbers() {
    let a = userNumber()
    let b = randomNum()
    let z =   document.getElementById("compare");
    let c = document.getElementById("counter");
    let s = document.getElementById("score");

    if ( a != b) {
        z.innerHTML = "Numbers are not the same. Computer got " + b + " and user got " + a;
        z.style.backgroundColor = "transparent";
         z.style.color = "white";
         z.style.padding = "20px";
         z.style.textAlign = "center";
         counter++
         c.innerHTML = "You have tried " + counter + " times."
         c.style.color = "white";
         c.style.backgroundColor = "transparent";
         c.style.padding = "20px";
         c.style.textAlign = "center"
         loose++
         s.innerHTML = "The score is Computer: " + loose + " User: " + win
         s.style.color = "white";
         s.style.backgroundColor = "transparent";
         s.style.padding = "20px";
         s.style.textAlign = "center"
    }else if ( a == b) {
        z.innerHTML = "Numbers are the same! Computer got " + b + " and user got " + a;
        z.style.backgroundColor = "transparent";
        z.style.color = "white";
        z.style.padding = "20px";
        z.style.textAlign = "center";
        win++
        c.innerHTML = "You have tried " + counter + " time(s) to get it right."
        c.style.color = "white";
        c.style.backgroundColor = "transparent";
        c.style.padding = "20px";
        c.style.textAlign = "center"
        win++
        s.innerHTML = "The score is Computer: " + loose + " User: " + win
        s.style.color = "white";
        s.style.backgroundColor = "transparent";
        s.style.padding = "20px";
        s.style.textAlign = "center"

    }
    resetInput();
 }

 function resetInput() {
     document.getElementById("getNumber").value = "";
 }