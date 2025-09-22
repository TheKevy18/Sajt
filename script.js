function showSidebar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display='flex'
}
function hideSidebar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display='none'
}

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".slider img");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let current = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle("active", i === index);
    });
  }

  prevBtn.addEventListener("click", () => {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
  });

  nextBtn.addEventListener("click", () => {
    current = (current + 1) % images.length;
    showImage(current);
  });
});
