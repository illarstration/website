function init(){
  let popup = document.getElementById('popup');
  console.log(popup);
  popup.addEventListener('click', () => {
    popup.style.display = 'none';
  });
  let imgs = document.querySelectorAll('.column > img');
  console.log(imgs);
  imgs.forEach(img => {
    console.log(img.src);
    let name = img.src.split('/').pop();
    img.addEventListener('click', () => {
       spawnPopup(name);
    });
  });
}

function spawnPopup(name){
  let img = document.getElementById('popup-image');
  let popup = document.getElementById('popup');
  img.src = 'img/' + name;
  popup.style.display = 'block';
}

window.addEventListener('DOMContentLoaded',init, false);
