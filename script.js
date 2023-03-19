function init(){
  //init menu
  let touchstartY = 0;
  let touchendY = 0;
  let open = 0;
  function toggleOpen(){
  document.querySelector(".header-box").classList.toggle('open');
    document.querySelector(".parallax").classList.toggle('noscroll');
    open = 1 - open;
  }
  
  document.querySelector(".header>img.logo").addEventListener('click',(e)=>{
    toggleOpen();
  });
      
  document.addEventListener('touchstart', e => {
    touchstartY = e.changedTouches[0].screenY
  })
  
  document.addEventListener('touchend', e => {
    touchendY = e.changedTouches[0].screenY
    if((touchstartY - touchendY > 70) & open){
      toggleOpen();
    }
  })

  //init popup
  let popup = document.getElementById('popup');
  console.log(popup);
  popup.addEventListener('click', () => {
    popup.style.display = 'none';
  });
  let imgs = document.querySelectorAll('.pictureframe > img');
  console.log(imgs);
  imgs.forEach(img => {
    console.log(img.src);
    let name = img.src.split('_').pop();
    let path = "img/g-cont_" + name;
    console.log(path);
    img.addEventListener('click', () => {
       spawnPopup(path);
    });
  });

  //effective vh hack
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
}

function spawnPopup(path){
  let img = document.getElementById('popup-image');
  let popup = document.getElementById('popup');
  img.src = path;
  popup.style.display = 'block';
}

window.addEventListener('DOMContentLoaded', init, false);

