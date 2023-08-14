let button = document.querySelector('header button:last-of-type')
let nav = document.querySelector("header ul")

button.onclick = function(){
    if(button.classList == 'true'){
        nav.style.padding = '20px 30px'
        nav.style.right = '0'
    }else{     
        nav.style.right = "-200px"
    }
}
if(button.classList == 'true'){
    nav.style.padding = '20px 30px'
    nav.style.right = '0'
}else{     
    nav.style.right = "-200px"
}