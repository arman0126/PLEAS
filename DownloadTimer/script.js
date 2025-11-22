var btn  = document.querySelector('button')
var h1 = document.querySelector('h1')
var inner = document.querySelector('#inner')
var a= 0;



btn.addEventListener('click',function(){
    btn.style.pointerEvents = 'none';

    var num =  Math.floor(Math.random()*100)+20
    console.log(num);

   var int =  setInterval(()=>{
        a++
        h1.innerHTML = a +'%'
        inner.style.width = a+'%'


    },num)
    setTimeout(()=>{
        clearInterval(int)
        btn.innerHTML = 'Downloaded'
        btn.style.opacity = 0.5
        console.log('downloaded in ',num/10)
    },num*100)
})


