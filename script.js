const progress = document.querySelector('.progress');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const content = document.querySelector('.content');
let currentPage = 1;

function updateProgress() {
  const progressPercentage = ((currentPage - 1) / 3) * 100;
  progress.style.width = `${progressPercentage}%`;
}

function showPage(pageNumber) {
  content.querySelector('h1').textContent = `Página ${pageNumber}`;
  content.querySelector('p').textContent = `Contenido de página ${pageNumber}`;
}

function nextPage() {
  if (currentPage < 4) {
    currentPage++;
    updateProgress();
    showPage(currentPage);
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    updateProgress();
    showPage(currentPage);
  }
}

nextBtn.addEventListener('click', nextPage);
prevBtn.addEventListener('click', prevPage);

showPage(currentPage);
updateProgress();
