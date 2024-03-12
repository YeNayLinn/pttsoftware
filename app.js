const getcontainer = document.querySelector('.container');
const head = document.querySelector('.heading');
const geta_img = document.querySelector('#a_img');
const getb_img = document.querySelector('#b_img');
const getc_img = document.querySelector('#c_img');
const getd_img = document.querySelector('#d_img');
const getinputs = document.querySelectorAll('.answer');
const getbtn = document.querySelector('.btn');


const database = [
    {
        question: 'Which one is habibi?',
        a:"./img/angy.jfif",
        b:"./img/arab.jfif",
        c:"./img/chi.jfif",
        d:"./img/rock.jfif",
        correctanswer:'b'
    },
    {
        question: 'Which one is scare?',
        a:"./img/scare.jfif",
        b:"./img/thief.jfif",
        c:"./img/twt.jfif",
        d:"./img/angy.jfif",
        correctanswer:'a'
    },  {
        question: 'Which one is angy?',
        a:"./img/arab.jfif",
        b:"./img/chi.jfif",
        c:"./img/thief.jfif",
        d:"./img/angy.jfif",
        correctanswer:'d'
    },  {
        question: 'Which one is sus?',
        a:"./img/twt.jfif",
        b:"./img/rock.jfif",
        c:"./img/sus.jfif",
        d:"./img/arab.jfif",
        correctanswer:'c'
    },
];

let currentidx = 0;
let score = 0;

start();

function start(){
    fgo();
    const getquestion = database[currentidx]; //0
    console.log(getquestion);

    head.textContent = getquestion.question;

    geta_img.src = getquestion.a;
    getb_img.src = getquestion.b;
    getc_img.src = getquestion.c;
    getd_img.src = getquestion.d;
}


function single(){
    let answer;

    getinputs.forEach(getinput=>{
        if(getinput.checked){
            answer = getinput.id;
        }
    });
    return answer;
}

getbtn.addEventListener('click',function(){
    const gets = single(); 

    if(gets){


        if(gets === database[currentidx].correctanswer){
            score++;
        }



        currentidx++;

        if(currentidx < database.length){
            start();
        }else{
            getcontainer.innerHTML= `
            <h4 class="heading"> Double click the button to restart </h4>
            <h3 class='h4'>Your score is ${score*25}/100</h3>
            <h4 class='h4'>Well done here, You answred ${score}/${database.length}</h4>
            <button type='button' class='btn' onclick="doubleclick()">Click</button>
            `
        }
    }else{
        window.alert('please choose one');
    }
})


function fgo(){
    getinputs.forEach(getinput=>{
        return getinput.checked = false;
    })
}

let clicktimes = 0;

function doubleclick(){
    // console.log('hay');

    if(clicktimes === 0){

        clicktimes = Date.now();
        //console.log(clicktimes);
    }else{
        if((Date.now() - clicktimes) < 1000){
            window.location.reload();
            clicktimes = 0;
        }else{
            clicktimes = Date.now();
        }
    }
}