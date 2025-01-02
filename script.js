const header=document.querySelector('header .container h1');
const hour=new Date().getHours();

if(hour<12){
    header.textContent="Good Morning! I'm Akash Gupta"; 
}
else if(hour<18){
    header.textContent="Good Afternoon! I'm Akash Gupta";
}

else{
    header.textContent="Good Evening! I'm Akash Gupta";
}