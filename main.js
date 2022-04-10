  const hamburger = document.getElementById("menu-btn")
  const menu = document.getElementById('menu')
hamburger.addEventListener('click', ()=>{
  hamburger.classList.toggle('active');
  menu.classList.toggle('hidden')
})
