let ref = prompt("ENTER 9119");

if(ref === '1'){

let turnO = true;
let click_count = 0;

let all = document.querySelectorAll('.box');
let winner = document.querySelector('#bh');
let refreshBtn = document.getElementById("terabaap");
let fordc = document.querySelector('#all');
balle = document.querySelectorAll('.balle');
let wp = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [2,4,6],
    [0,4,8],
    [2,5,8],
    [1,4,7],
];

all.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            console.log("ohsjs");
            box.innerHTML="<h1>O</h1>";
	    box.style.color = '#00a4ff';
            turnO=false; 
        }else{
            console.log("ohsjs");
            box.innerHTML="<h1>X</h1>";
            box.style.color = '#ff4242';
            turnO=true; 
        }
        box.disabled=true;
        click_count++;
        w()
    })
})

let dboxes = () => {
	for(let box of all){
 		box.disabled = true;
      }
};

w = () => {
    for(pattern of wp){
        let chomu1 = all[pattern[0]].innerText;
        let chomu2 = all[pattern[1]].innerText;
        let chomu3 = all[pattern[2]].innerText;
        
    if (chomu1 != "" && chomu2 != "" && chomu3 != ""){
        if (chomu1 === chomu2 && chomu3 === chomu2){
            
            console.log("maa ki poop");
            all.disabled = true;
	    chomu1.innerText = "jalwa hai fashipjn ka";
            winner.innerText = chomu1+" is the WINNER !!"

            dboxes();
            }else if(click_count === 9 &&  chomu2 != chomu3 && chomu1 !=  chomu2 && chomu1 != chomu3 ){
            winner.innerText = "MATCH TIED !!";
            }else if(click_count === 9 && chomu1 !=  chomu2 && chomu2 != chomu3){
            winner.innerText = "MATCH TIED !!"; 
            }



        }
    }   
};


function handleClick() {
  window.location.reload();
}

refreshBtn.addEventListener("click", handleClick);










}else if(ref==='2'){



let turnO = true;
let click_count = 0;

let all = document.querySelectorAll('.box');
let winner = document.querySelector('#bh');
let refreshBtn = document.getElementById("terabaap");
let fordc = document.querySelector('#all');
balle = document.querySelectorAll('.balle');
let wp = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [2,4,6],
    [0,4,8],
    [2,5,8],
    [1,4,7],
];

all.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            console.log("ohsjs");
            box.innerHTML="<h1>O</h1>";
	    box.style.color = '#ff6700';
            turnO=false; 
        }else{
            console.log("ohsjs");
            box.innerHTML="<h1>X</h1>";
            box.style.color = '#f93b8c';
            turnO=true; 
        }
        box.disabled=true;
        click_count++;
        w()
    })
})

let dboxes = () => {
	for(let box of all){
 		box.disabled = true;
      }
};

w = () => {
    for(pattern of wp){
        let chomu1 = all[pattern[0]].innerText;
        let chomu2 = all[pattern[1]].innerText;
        let chomu3 = all[pattern[2]].innerText;
        
    if (chomu1 != "" && chomu2 != "" && chomu3 != ""){
        if (chomu1 === chomu2 && chomu3 === chomu2){
            
            console.log("maa ki poop");
            all.disabled = true;
	    chomu1.innerText = "jalwa hai fashipjn ka";
            winner.innerText = chomu1+" is the WINNER !!"

            dboxes();
            }else if(click_count === 9 &&  chomu2 != chomu3 && chomu1 !=  chomu2 && chomu1 != chomu3 ){
            winner.innerText = "MATCH TIED !!";
            }else if(click_count === 9 && chomu1 !=  chomu2 && chomu2 != chomu3){
            winner.innerText = "MATCH TIED !!"; 
            }



        }
    }   
};


function handleClick() {
  window.location.reload();
}

refreshBtn.addEventListener("click", handleClick);

















}else if(ref==='3'){







let turnO = true;
let click_count = 0;

let all = document.querySelectorAll('.box');
let winner = document.querySelector('#bh');
let refreshBtn = document.getElementById("terabaap");
let fordc = document.querySelector('#all');
balle = document.querySelectorAll('.balle');
let wp = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [2,4,6],
    [0,4,8],
    [2,5,8],
    [1,4,7],
];

all.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            console.log("ohsjs");
            box.innerHTML="<h1>O</h1>";
	    box.style.color = '#63cd79';
            turnO=false; 
        }else{
            console.log("ohsjs");
            box.innerHTML="<h1>X</h1>";
            box.style.color = '#fda0ff';
            turnO=true; 
        }
        box.disabled=true;
        click_count++;
        w()
    })
})

let dboxes = () => {
	for(let box of all){
 		box.disabled = true;
      }
};

w = () => {
    for(pattern of wp){
        let chomu1 = all[pattern[0]].innerText;
        let chomu2 = all[pattern[1]].innerText;
        let chomu3 = all[pattern[2]].innerText;
        
    if (chomu1 != "" && chomu2 != "" && chomu3 != ""){
        if (chomu1 === chomu2 && chomu3 === chomu2){
            
            console.log("maa ki poop");
            all.disabled = true;
	    chomu1.innerText = "jalwa hai fashipjn ka";
            winner.innerText = chomu1+" is the WINNER !!"

            dboxes();
            }else if(click_count === 9 &&  chomu2 != chomu3 && chomu1 !=  chomu2 && chomu1 != chomu3 ){
            winner.innerText = "MATCH TIED !!";
            }else if(click_count === 9 && chomu1 !=  chomu2 && chomu2 != chomu3){
            winner.innerText = "MATCH TIED !!"; 
            }



        }
    }   
};


function handleClick() {
  window.location.reload();
}

refreshBtn.addEventListener("click", handleClick);
 


}else if (ref==='4'){



let turnO = true;
let click_count = 0;

let all = document.querySelectorAll('.box');
let winner = document.querySelector('#bh');
let refreshBtn = document.getElementById("terabaap");
let fordc = document.querySelector('#all');
balle = document.querySelectorAll('.balle');
let wp = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [2,4,6],
    [0,4,8],
    [2,5,8],
    [1,4,7],
];

all.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            console.log("ohsjs");
            box.innerHTML="<h1>O</h1>";
	    box.style.color = '#93662a';
            turnO=false; 
        }else{
            console.log("ohsjs");
            box.innerHTML="<h1>X</h1>";
            box.style.color = '#d18f36';
            turnO=true; 
        }
        box.disabled=true;
        click_count++;
        w()
    })
})

let dboxes = () => {
	for(let box of all){
 		box.disabled = true;
      }
};

w = () => {
    for(pattern of wp){
        let chomu1 = all[pattern[0]].innerText;
        let chomu2 = all[pattern[1]].innerText;
        let chomu3 = all[pattern[2]].innerText;
        
    if (chomu1 != "" && chomu2 != "" && chomu3 != ""){
        if (chomu1 === chomu2 && chomu3 === chomu2){
            
            console.log("maa ki poop");
            all.disabled = true;
	    chomu1.innerText = "jalwa hai fashipjn ka";
            winner.innerText = chomu1+" is the WINNER !!"

            dboxes();
            }else if(click_count === 9 &&  chomu2 != chomu3 && chomu1 !=  chomu2 && chomu1 != chomu3 ){
            winner.innerText = "MATCH TIED !!";
            }else if(click_count === 9 && chomu1 !=  chomu2 && chomu2 != chomu3){
            winner.innerText = "MATCH TIED !!"; 
            }



        }
    }   
};


function handleClick() {
  window.location.reload();
}

refreshBtn.addEventListener("click", handleClick);
 













}else if(ref==='5'){



let turnO = true;
let click_count = 0;

let all = document.querySelectorAll('.box');
let winner = document.querySelector('#bh');
let refreshBtn = document.getElementById("terabaap");
let fordc = document.querySelector('#all');
balle = document.querySelectorAll('.balle');
let wp = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [2,4,6],
    [0,4,8],
    [2,5,8],
    [1,4,7],
];

all.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            console.log("ohsjs");
            box.innerHTML="<h1>O</h1>";
	    box.style.color = '#353535';
            turnO=false; 
        }else{
            console.log("ohsjs");
            box.innerHTML="<h1>X</h1>";
            box.style.color = '#8b8b8b';
            turnO=true; 
        }
        box.disabled=true;
        click_count++;
        w()
    })
})

let dboxes = () => {
	for(let box of all){
 		box.disabled = true;
      }
};

w = () => {
    for(pattern of wp){
        let chomu1 = all[pattern[0]].innerText;
        let chomu2 = all[pattern[1]].innerText;
        let chomu3 = all[pattern[2]].innerText;
        
    if (chomu1 != "" && chomu2 != "" && chomu3 != ""){
        if (chomu1 === chomu2 && chomu3 === chomu2){
            
            console.log("maa ki poop");
            all.disabled = true;
	    chomu1.innerText = "jalwa hai fashipjn ka";
            winner.innerText = chomu1+" is the WINNER !!"

            dboxes();
            }else if(click_count === 9 &&  chomu2 != chomu3 && chomu1 !=  chomu2 && chomu1 != chomu3 ){
            winner.innerText = "MATCH TIED !!";
            }else if(click_count === 9 && chomu1 !=  chomu2 && chomu2 != chomu3){
            winner.innerText = "MATCH TIED !!"; 
            }



        }
    }   
};


function handleClick() {
  window.location.reload();
}

refreshBtn.addEventListener("click", handleClick);
 
  
             




}else if (ref==='6'){


     
let turnO = true;
let click_count = 0;

let all = document.querySelectorAll('.box');
let winner = document.querySelector('#bh');
let refreshBtn = document.getElementById("terabaap");
let fordc = document.querySelector('#all');
balle = document.querySelectorAll('.balle');
let wp = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [2,4,6],
    [0,4,8],
    [2,5,8],
    [1,4,7],
];

all.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            console.log("ohsjs");
            box.innerHTML="<h1>O</h1>";
	    box.style.color = 'aliceblue';
            turnO=false; 
        }else{
            console.log("ohsjs");
            box.innerHTML="<h1>X</h1>";
            box.style.color = 'aliceblue';
            turnO=true; 
        }
        box.disabled=true;
        click_count++;
        w()
    })
})

let dboxes = () => {
	for(let box of all){
 		box.disabled = true;
      }
};

w = () => {
    for(pattern of wp){
        let chomu1 = all[pattern[0]].innerText;
        let chomu2 = all[pattern[1]].innerText;
        let chomu3 = all[pattern[2]].innerText;
        
    if (chomu1 != "" && chomu2 != "" && chomu3 != ""){
        if (chomu1 === chomu2 && chomu3 === chomu2){
            
            console.log("maa ki poop");
            all.disabled = true;
	    chomu1.innerText = "jalwa hai fashipjn ka";
            winner.innerText = chomu1+" is the WINNER !!"

            dboxes();
            }else if(click_count === 9 &&  chomu2 != chomu3 && chomu1 !=  chomu2 && chomu1 != chomu3 ){
            winner.innerText = "MATCH TIED !!";
            }else if(click_count === 9 && chomu1 !=  chomu2 && chomu2 != chomu3){
            winner.innerText = "MATCH TIED !!"; 
            }



        }
    }   
};


function handleClick() {
  window.location.reload();
}

refreshBtn.addEventListener("click", handleClick);



}else if (ref==='fi'){


while (true){alert("Error 404 By Atharv Bajpai , Please Try Again After Some Time !");}

}else if (ref==='10'){


while (true){alert("There Is A Virus Found In This Computer , We Cannot Run This Website In It ! ");}





}else if (ref==='hack_computer'){

i=0;
while(i<5){alert("All The Data Has Been Transferred Successfully ! ");
	   i++;	
}
alert("Now Play Tic-Tac-Toe While Data Is Going To Be Troubleshooted. If there is any threat we will inform you ! ");
alert("No Threat Or Security Found while Transferring Data ! ");

let turnO = true;
let click_count = 0;

let all = document.querySelectorAll('.box');
let winner = document.querySelector('#bh');
let refreshBtn = document.getElementById("terabaap");
let fordc = document.querySelector('#all');
balle = document.querySelectorAll('.balle');
let wp = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [2,4,6],
    [0,4,8],
    [2,5,8],
    [1,4,7],
];

all.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            console.log("ohsjs");
            box.innerHTML="<h1>O</h1>";
	    box.style.color = 'black';
            turnO=false; 
        }else{
            console.log("ohsjs");
            box.innerHTML="<h1>X</h1>";
            box.style.color = 'black';
            turnO=true; 
        }
        box.disabled=true;
        click_count++;
        w()
    })
})

let dboxes = () => {
	for(let box of all){
 		box.disabled = true;
      }
};

w = () => {
    for(pattern of wp){
        let chomu1 = all[pattern[0]].innerText;
        let chomu2 = all[pattern[1]].innerText;
        let chomu3 = all[pattern[2]].innerText;
        
    if (chomu1 != "" && chomu2 != "" && chomu3 != ""){
        if (chomu1 === chomu2 && chomu3 === chomu2){
            
            console.log("maa ki poop");
            all.disabled = true;
	    chomu1.innerText = "jalwa hai fashipjn ka";
            winner.innerText = chomu1+" is the WINNER !!"

            dboxes();
            }else if(click_count === 9 &&  chomu2 != chomu3 && chomu1 !=  chomu2 && chomu1 != chomu3 ){
            winner.innerText = "MATCH TIED !!";
            }else if(click_count === 9 && chomu1 !=  chomu2 && chomu2 != chomu3){
            winner.innerText = "MATCH TIED !!"; 
            }



        }
    }   
};


function handleClick() {
  window.location.reload();
}

refreshBtn.addEventListener("click", handleClick);









}else if(ref === '7'){

let turnO = true;
let click_count = 0;

let all = document.querySelectorAll('.box');
let winner = document.querySelector('#bh');
let refreshBtn = document.getElementById("terabaap");
let fordc = document.querySelector('#all');
balle = document.querySelectorAll('.balle');
let wp = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [2,4,6],
    [0,4,8],
    [2,5,8],
    [1,4,7],
];

all.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            console.log("ohsjs");
            box.innerHTML="<h1>O</h1>";
	    box.style.color = 'white';
            turnO=false; 
        }else{
            console.log("ohsjs");
            box.innerHTML="<h1>X</h1>";
            box.style.color = 'white';
            turnO=true; 
        }
        box.disabled=true;
        click_count++;
        w()
    })
})

let dboxes = () => {
	for(let box of all){
 		box.disabled = true;
      }
};

w = () => {
    for(pattern of wp){
        let chomu1 = all[pattern[0]].innerText;
        let chomu2 = all[pattern[1]].innerText;
        let chomu3 = all[pattern[2]].innerText;
        
    if (chomu1 != "" && chomu2 != "" && chomu3 != ""){
        if (chomu1 === chomu2 && chomu3 === chomu2){
            
            console.log("maa ki poop");
            all.disabled = true;
	    chomu1.innerText = "jalwa hai fashipjn ka";
            winner.innerText = chomu1+" is the WINNER !!"

            dboxes();
            }else if(click_count === 9 &&  chomu2 != chomu3 && chomu1 !=  chomu2 && chomu1 != chomu3 ){
            winner.innerText = "MATCH TIED !!";
            }else if(click_count === 9 && chomu1 !=  chomu2 && chomu2 != chomu3){
            winner.innerText = "MATCH TIED !!"; 
            }



        }
    }   
};


function handleClick() {
  window.location.reload();
}

refreshBtn.addEventListener("click", handleClick);













}else{

let turnO = true;
let click_count = 0;

let all = document.querySelectorAll('.box');
let winner = document.querySelector('#bh');
let refreshBtn = document.getElementById("terabaap");
let fordc = document.querySelector('#all');
balle = document.querySelectorAll('.balle');
let wp = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [2,4,6],
    [0,4,8],
    [2,5,8],
    [1,4,7],
];

all.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            console.log("ohsjs");
            box.innerHTML="<h1>O</h1>";
	    box.style.color = 'black';
            turnO=false; 
        }else{
            console.log("ohsjs");
            box.innerHTML="<h1>X</h1>";
            box.style.color = 'black';
            turnO=true; 
        }
        box.disabled=true;
        click_count++;
        w()
    })
})

let dboxes = () => {
	for(let box of all){
 		box.disabled = true;
      }
};

w = () => {
    for(pattern of wp){
        let chomu1 = all[pattern[0]].innerText;
        let chomu2 = all[pattern[1]].innerText;
        let chomu3 = all[pattern[2]].innerText;
        
    if (chomu1 != "" && chomu2 != "" && chomu3 != ""){
        if (chomu1 === chomu2 && chomu3 === chomu2){
            
            console.log("maa ki poop");
            all.disabled = true;
	    chomu1.innerText = "jalwa hai fashipjn ka";
            winner.innerText = chomu1+" is the WINNER !!"

            dboxes();
            }else if(click_count === 9 &&  chomu2 != chomu3 && chomu1 !=  chomu2 && chomu1 != chomu3 ){
            winner.innerText = "MATCH TIED !!";
            }else if(click_count === 9 && chomu1 !=  chomu2 && chomu2 != chomu3){
            winner.innerText = "MATCH TIED !!"; 
            }



        }
    }   
};


function handleClick() {
  window.location.reload();
}

refreshBtn.addEventListener("click", handleClick);

}










