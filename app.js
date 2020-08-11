ques2 = "<h3>At What point of projectile both Velocity and Acceleration are perpendiculalr to each other?<h3>"
ques3 = "<h3>The velovity of projectile is ____ when its height is half of max height</h3>"
ques4 = "<h3>what is the value of y component of velocity at max height?</h3>"
ques5 = "<h3>what does RAM stand for?</h3>"
ques6 = "<h3>What does CPU stand for?</h3>"
ques7 = "<h3>Science is the study of?</h3>"
optb = '<div class="opt11"> <input type="radio" name="opt1" id="opt21"> at max Height</div> <br><div class="opt12"> <input type="radio" name="opt22" id="opt1"> At launching point</div><br><div class="opt12"> <input type="radio" name="opt1" id="opt23"> At target point</div><br><div class="opt12"> <input type="radio" name="opt1" id="opt24"> Nowhere/input></div><br>'
optc = '<div class="opt11"> <input type="radio" name="opt1" id="opt31"> 1/2 of Vo</div> <br><div class="opt12"> <input type="radio" name="opt1" id="opt32"> 7.4 of Vo</div><br><div class="opt12"> <input type="radio" name="opt1" id="opt33">  3/4 of Vo</div><br><div class="opt12"> <input type="radio" name="opt1" id="opt34"> 1/3 of Vo</input></div><br>'
optd = '<div class="opt11"> <input type="radio" name="opt1" id="opt41"> 1/2 of initial</div> <br><div class="opt12"> <input type="radio" name="opt1" id="opt42"> zero</div><br><div class="opt12"> <input type="radio" name="opt1" id="opt43"> more than initial</div><br><div class="opt12"> <input type="radio" name="opt1" id="opt44"> less than initial</input></div><br>'
opte = '<div class="opt11"> <input type="radio" name="opt1" id="opt51"> Random Access Memory</div> <br><div class="opt12"> <input type="radio" name="opt1" id="opt52"> Read Acllow Memory</div><br><div class="opt12"> <input type="radio" name="opt1" id="op543"> Both of them </div><br><div class="opt12"> <input type="radio" name="opt1" id="opt54"> None of them</input></div><br>'
optf = '<div class="opt11"> <input type="radio" name="opt1" id="opt61"> Center point Unit</div> <br><div class="opt12"> <input type="radio" name="opt1" id="opt62"> Central Processing Unit</div><br><div class="opt12"> <input type="radio" name="opt1" id="opt63"> none of them</div><br><div class="opt12"> <input type="radio" name="opt1" id="opt64"> both of them</input></div><br>'
optg = '<div class="opt11"> <input type="radio" name="opt1" id="opt71"> Nature</div> <br><div class="opt12"> <input type="radio" name="opt1" id="opt72"> Future</div><br><div class="opt12"> <input type="radio" name="opt1" id="opt73"> change</div><br><div class="opt12"> <input type="radio" name="opt1" id="opt74"> none of them</input></div><br>'

function next() {
    var question2 = document.getElementById('questionID')
    question2.innerHTML = ques2;
    var option2 = document.getElementById('optionID')
    option2.innerHTML = optb;
    var btn = document.getElementById("btnext")
    btn.innerHTML = '<button class="buttonNext" id="btnnext" onclick="check2(),next2()" >Next</button>';
}


function next2() {
    var question3 = document.getElementById('questionID')
    question3.innerHTML = ques3;
    var option3 = document.getElementById('optionID')
    option3.innerHTML = optc;
    var btn = document.getElementById("btnext")
    btn.innerHTML = '<button class="buttonNext" id="btnnext" onclick="check3(),next3()" >Next</button>';
}


function next3() {
    var question4 = document.getElementById('questionID')
    question4.innerHTML = ques4;
    var option4 = document.getElementById('optionID')
    option4.innerHTML = optd;
    var btn = document.getElementById("btnext")
    btn.innerHTML = '<button class="buttonNext" id="btnnext" onclick="check4(),next4()" >Next</button>';
}


function next4() {
    var question5 = document.getElementById('questionID')
    question5.innerHTML = ques5;
    var option5 = document.getElementById('optionID')
    option5.innerHTML = opte;
    var btn = document.getElementById("btnext")
    btn.innerHTML = '<button class="buttonNext" id="btnnext" onclick="check5(),next5()" >Next</button>';
}

function next5() {
    var question6 = document.getElementById('questionID')
    question6.innerHTML = ques6;
    var option6 = document.getElementById('optionID')
    option6.innerHTML = optf;
    var btn = document.getElementById("btnext")
    btn.innerHTML = '<button class="buttonNext" id="btnnext" onclick="check6(),next6()" >Next</button>';
}

function next6() {
    var question6 = document.getElementById('questionID')
    question6.innerHTML = ques6;
    var option6 = document.getElementById('optionID')
    option6.innerHTML = optf;
    var btn = document.getElementById("btnext")
    btn.innerHTML = '<button class="buttonNext" id="btnnext" onclick="result()" >Next</button>';
}





var score = 0

function check() {
    // var score = 0
    var rightAns1 = document.getElementById('opt1a')
    var rightAns2 = document.getElementById('opt1b')
    var rightAns3 = document.getElementById('opt1c')
    var rightAns4 = document.getElementById('opt1d')
    if (rightAns2.checked == true) {
        score++
        alert("Q1 is correct")
    } else {
        alert("wrong")
    }
    console.log(score)
}


function check2() {
    // var score = 0
    var rightAns21 = document.getElementById('opt21')
    var rightAns22 = document.getElementById('opt22')
    var rightAns23 = document.getElementById('opt23')
    var rightAns24 = document.getElementById('opt24')
    if (rightAns21.checked == true) {
        score++
        alert("Q2 is correct")
    } else {
        alert("wrong")
    }
    console.log(score)
}

function check3() {
    // var score;
    var rightAns31 = document.getElementById('opt31')
    var rightAns32 = document.getElementById('opt32')
    var rightAns33 = document.getElementById('opt33')
    var rightAns34 = document.getElementById('opt34')
    if (rightAns33.checked == true) {
        score++
        alert("Q3 is correct")
    } else {
        alert("wrong")
    }
    console.log(score)
}

function check4() {
    // var score = 0
    var rightAns41 = document.getElementById('opt41')
    var rightAns42 = document.getElementById('opt42')
    var rightAns43 = document.getElementById('opt43')
    var rightAns44 = document.getElementById('opt44')
    if (rightAns42.checked == true) {
        score++
        alert("Correct")
    } else {
        alert("Wrong")
    }
}


function check5() {
    // var score = 0
    var rightAns51 = document.getElementById('opt51')
    var rightAns52 = document.getElementById('opt52')
    var rightAns53 = document.getElementById('opt53')
    var rightAns54 = document.getElementById('opt44')
    if (rightAns51.checked == true) {
        score++
        alert("Correct")
    } else {
        alert("Wrong")
    }
}

function check6() {
    // var score = 0
    var rightAns61 = document.getElementById('opt61')
    var rightAns62 = document.getElementById('opt62')
    var rightAns63 = document.getElementById('opt63')
    var rightAns64 = document.getElementById('opt64')
    if (rightAns62.checked == true) {
        score++
        alert("Correct")
    } else {
        alert("Wrong")
    }
}

function check7() {
    // var score = 0
    var rightAns71 = document.getElementById('opt71')
    var rightAns72 = document.getElementById('opt72')
    var rightAns73 = document.getElementById('opt73')
    var rightAns74 = document.getElementById('opt74')
    if (rightAns71.checked == true) {
        score++
        alert("Correct")
    } else {
        alert("Wrong")
    }
}


function result() {
    var question5 = document.getElementById('questionID')
    question5.innerHTML = "<h1>Congrats your result is " + score + "</h1>";
    var option5 = document.getElementById('optionID')
    option5.innerHTML = "<h2>Well done</h2>";
    var btn = document.getElementById("btnext")
    btn.innerHTML = "";
}