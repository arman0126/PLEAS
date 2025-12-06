const para  = document.querySelector("p");
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const text = para.innerText

para.addEventListener("mouseenter",()=>{
    let iteration = 0;

    setInterval(()=>{
        const str = text.split('').map((char , index) =>{
            if( index <iteration){
                return char
            }
            return characters.split("")[Math.floor(Math.random()*53)]
        }).join("")
         para.innerText = str
         iteration += 0.2;
    },30)

   

})