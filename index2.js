
col2 = document.getElementById('col2');
col2.innerHTML = document.getElementById('home').innerHTML;

function changeContent(pagename){
    
    col2.innerHTML = document.getElementById(pagename).innerHTML;
}

document.getElementById("blogpage").innerHTML= document.getElementById("entry1").innerHTML;
entryoneBtn.onclick = function(){
    document.getElementById("blogpage").innerHTML = document.getElementById("entry1").innerHTML;
}

entrytwoBtn.onclick = function(){
    document.getElementById("blogpage").innerHTML = document.getElementById("entry2").innerHTML;
}


/*
const homeBtn = document.getElementById("homeBtn");
const aboutBtn = document.getElementById("aboutBtn");
const blogBtn = document.getElementById("blogBtn");
const favsBtn = document.getElementById("favsBtn");
const resourcesBtn = document.getElementById("resourcesBtn");

document.getElementById("blog").style.display = "none";
document.getElementById("about").style.display = "none";
document.getElementById("favs").style.display = "none";
document.getElementById("resources").style.display = "none";


const entryoneBtn = document.getElementById("entry1Btn");
const entrytwoBtn = document.getElementById("entry2Btn");

aboutBtn.onclick = function(){
    document.getElementById("about").style.display = "block";
    document.getElementById("home").style.display = "none";
    document.getElementById("blog").style.display = "none";
    document.getElementById("favs").style.display = "none";
    document.getElementById("resources").style.display = "none";
}

homeBtn.onclick = function(){
    document.getElementById("home").style.display = "block";
    document.getElementById("blog").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("favs").style.display = "none";
    document.getElementById("resources").style.display = "none";
}

blogBtn.onclick = function(){
    document.getElementById("blog").style.display = "block";
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("favs").style.display = "none";
    document.getElementById("resources").style.display = "none";
}

favsBtn.onclick = function(){
    document.getElementById("favs").style.display = "block";
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("blog").style.display = "none";
    document.getElementById("resources").style.display = "none";
}

resourcesBtn.onclick = function(){
    document.getElementById("resources").style.display = "block";
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("favs").style.display = "none";
    document.getElementById("blog").style.display = "none";
}

*/

