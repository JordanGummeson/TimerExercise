function countdown(count){
let counter = setInterval(function(){

if(count<=0){
    clearInterval(counter);
    console.log('DONE!');
}
else{
    console.log(count)
}
count--;
},1000)
}

function randomGame(){
    let count = 0;
    let number;
    let counter = setInterval(function(){
        number = Math.random();
        count++;
        if (number > .75){
            clearInterval(counter);
            console.log(count + " Tries")
        }
    },1000)
}