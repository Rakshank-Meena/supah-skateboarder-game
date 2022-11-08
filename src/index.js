document.onkeydown=function(e){
    console.log(e.key)
    const boy=document.querySelector('.boy')
    const boyX = parseFloat(window.getComputedStyle(boy,null).getPropertyValue('left'))
    console.log(boyX)
    if(e.key=='ArrowUp'){
        boy.classList.add('jumpboy')
        setTimeout(()=>{
            boy.classList.remove('jumpboy')
        },900)
    }
    else if(e.key=='ArrowRight'){
        boy.style.left =boyX+32+'px'
    }
    else if(e.key=='ArrowLeft'){
        boy.style.left =boyX-32+'px'
    }
}
let Score = 0
let Scoreinc=true
setInterval(()=>{
    const ball=document.querySelector('.ball')
    const boy=document.querySelector('.boy')
    const can=document.querySelector('.can')
    const gameOver=document.querySelector('.gameOver')
    
    const boyX = window.getComputedStyle(boy,null).getPropertyValue('left')
    const boyY = window.getComputedStyle(boy,null).getPropertyValue('bottom')
    const ballX = window.getComputedStyle(ball,null).getPropertyValue('left')
    const ballY = window.getComputedStyle(ball,null).getPropertyValue('left')
    const canX = window.getComputedStyle(can,null).getPropertyValue('left')
    const canY = window.getComputedStyle(can,null).getPropertyValue('left')
    
    if(parseFloat(ballX)-parseFloat(boyX)<43 && parseFloat(boyY)-parseFloat(ballY)<2){
        ball.classList.remove('ballObstacle')
        can.classList.remove('canObstacle')
        gameOver.style.visibility='visible'

    }
    else if(parseFloat(canX)-parseFloat(boyX)<43 && parseFloat(boyY)-parseFloat(canY)<2){
        ball.classList.remove('ballObstacle')
        can.classList.remove('canObstacle')
        gameOver.style.visibility='visible'
    }
    else if(parseInt(ballX)<0){
        if(Scoreinc==true){
            Score=Score+1
            Scoreinc=false
            setTimeout(()=>{Scoreinc=true},500)
    }

    }
    let finalScore=document.getElementById('gameOver')
    finalScore.innerHTML='YOUR SCORE:'+Score
    let home=document.getElementById('score')
    home.innerHTML='your score:' +Score

},100)

    
