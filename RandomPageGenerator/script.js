var btn = document.querySelector('button')
var main = document.querySelector('main')
btn.addEventListener('click', function() {
   var div = document.createElement('div')
     
    var c1 = Math.floor(Math.random()*256)
    var c2 = Math.floor(Math.random()*256)
    var c3 = Math.floor(Math.random()*256)
    var x = Math.floor(Math.random()*100)
    var y = Math.floor(Math.random()*100)
    div.style.left = x + 'vw'
    div.style.top = y + 'vh'
    var r = Math.floor(Math.random()*360)

   div.style.width = '100px'
    div.style.height = '100px'
    div.style.backgroundColor = `rgb(${c1},${c2},${c3})`
    div.style.position = 'absolute'
    div.style.transform = `rotate(${r}deg)`
    main.appendChild(div)

})
