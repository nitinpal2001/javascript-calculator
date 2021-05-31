let screen=document.getElementById('screen');
let buttons=document.querySelectorAll('button');
let screenvalue="";
for(item of buttons){
    item.addEventListener("click" , (e)=>{
        let buttontext=e.target.innerText;
        console.log('button text is',buttontext);
        if(buttontext=='C'){
            screenvalue="";
            screen.value=screenvalue;
        }
        else if(buttontext=='X'){
            buttontext="*";
            screenvalue+=buttontext;
            screen.value=screenvalue;
        }
        else if(buttontext=='='){
            screen.value=eval(screenvalue);
        }
        else{
            screenvalue+=buttontext;
            screen.value=screenvalue;
        }
    })
}
