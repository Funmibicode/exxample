 
 // navbar toggle 
 const bar = document.querySelector(".toggle");
 const menu = document.querySelector(".navbar-menu");

    bar.onclick = function(){
        bar.classList.toggle('active');
        menu.classList.toggle('active')
    }

    // dropdown content 
 const dropbtn = document.querySelector(".dropbtn");
 const dropcontent = document.querySelector(".dropcontent");

    dropbtn.onclick = function(){
        dropbtn.classList.toggle('click');
        dropcontent.classList.toggle('click');
    }

    // submit news letter
const email = document.getElementById("email");
const submitBtn = document.getElementById("submit-btn");
let output = document.querySelector(".email-output");

submitBtn.onclick = function(){
    let emailEntry = email.value;

    if(emailEntry === ""){
        output.textContent = "PLEASE INPUT YOUR EMAIL!"
    }
    else{
        alert(`YOU HAVE SUCCESSFULLY SIGNED ${emailEntry}`);
    }
}