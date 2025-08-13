 const bar = document.querySelector(".toggle");
 const menu = document.querySelector(".navbar-menu");

    bar.onclick = function(){
        bar.classList.toggle('active');
        menu.classList.toggle('active')
    }

 const dropbtn = document.querySelector(".dropbtn");
 const dropcontent = document.querySelector(".dropcontent");

    dropbtn.onclick = function(){
        dropbtn.classList.toggle('click');
        dropcontent.classList.toggle('click');
    }


 
