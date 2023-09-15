

const eye = document.getElementsByClassName("firsteye");
const sidebar = document.getElementsByClassName("sidenav");
const isShow = true;

function show() {
if (isShow){
   sidebar.style.display = "none";
   isShow = false;
}
}
