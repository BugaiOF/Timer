let sec = 0 
let min =0
let hour = 0
let  time = 0 

function start(){
  time = setInterval(contador,1000)
}

function pause(){
    clearInterval(time)
}

function reset(){
    clearInterval(time)
    sec=0
    min=0
    hour=0
    document.querySelector('#clock').innerText = '00:00:00'
}

function digitdoubles(digit){
    if(digit < 10){
        return('0'+digit)
    }else {
        return(digit)
    }
}

function contador(){
    sec++
    if(sec == 60){
        sec = 0
        min++
    }
    if(min == 60){
        min = 0
        hour++}
        document.querySelector('#clock').innerText = digitdoubles(hour) +':'+ digitdoubles(min) + ':' + digitdoubles(sec) 
}