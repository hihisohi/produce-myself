document.addEventListener('DOMContentLoaded', function() {

  // miniProfileBox Click
  const miniProfileBox = document.querySelector('.mini-profile-box');
  const mainProfile = document.querySelector('.main-profile');

  function miniProfileClick() {
    miniProfileBox.style.top = "calc(50% + 15px)";
    miniProfileBox.style.opacity = "0";

    setTimeout(function(){
      miniProfileBox.style.display = "none";
      mainProfile.style.opacity = 1;

    }, 700);
  }

  miniProfileBox.addEventListener('click', miniProfileClick);




});