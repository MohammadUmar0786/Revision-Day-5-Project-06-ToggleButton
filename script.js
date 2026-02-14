const button = document.querySelector('button');
const heading  = document.querySelector('h1');

button.addEventListener('click',(e)=>{
    
    if(e.target.innerText == "Dark"){
        document.body.style.backgroundColor = "black";
        heading.style.color = "white";
        button.innerText = "Light";
    }else{
        document.body.style.backgroundColor = "white";
        heading.style.color = "black";
        button.innerText = "Dark";
    }

})