function make_bubbles() {
    let clutter = ""

    for (let i = 1; i <= 168; i++) {
        clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`
    }

    document.querySelector('#pbtm').innerHTML = clutter
}


function hit_number()
{
    var hit_element=document.querySelectorAll('.elem')[0]
    hit_element.querySelector('.box').innerHTML=`${Math.floor(Math.random()*10)}`
}

function game_timer() {
    var timer = 30
    let timer_element = document.querySelectorAll('.elem')[1]
    var set_timer=setInterval(() => {
        if (timer >0) {
            timer = timer - 1
            timer_element.querySelector('.box').innerHTML = timer
        }
        else {
            clearInterval(set_timer)
            var score =document.querySelectorAll('.elem')[2].querySelector('.box').textContent
            document.querySelector('#pbtm').innerHTML=`<strong style="font-size:20px">Time Out!, Your Current Score is ${score}</strong>`
        }
        
    }, 1000)
   
}

var score=0
function game_score()
{
    score+=10
    var score_element=document.querySelectorAll('.elem')[2]
    score_element.querySelector('.box').innerHTML=score
}

function click_bubble()
{
    var hitting_number=document.querySelectorAll('.elem')[0]
    var hitting_value=hitting_number.querySelector('.box').textContent
    
    var bubbles=document.querySelector('#pbtm').querySelectorAll('.bubble')
    bubbles.forEach((bubble)=>{
        bubble.addEventListener('click',function(e){
            if(e.target.textContent==hitting_value)
            {
                game_score()   
                hit_number()
                make_bubbles()
                click_bubble()
            }
            else{
                make_bubbles()
                click_bubble()
            }
            
        })
    })

}



document.querySelector('#game_start').addEventListener('click',function(){
    var score_element=document.querySelectorAll('.elem')[2]
    score_element.querySelector('.box').innerHTML=0
    make_bubbles()
    hit_number()
    game_timer()
    click_bubble()
})

make_bubbles()
hit_number()
click_bubble()