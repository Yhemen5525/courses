const cardsPerPage = 5;
let currentPage = 1;

async function loadCourses() {
  try {
    const response = await fetch("./courses.json");
    const data = await response.json();
    return data.courses;
  } catch (error) {
    console.error(error);
  }
}

async function displayCards() {
  const courses = await loadCourses();
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const coursesList = document.getElementById("courses-list");
  coursesList.innerHTML = "";

  for (let i = startIndex; i < endIndex && i < courses.length; i++) {
    const course = courses[i];
    const courseCard = `
      <div class="courses-section-course-item">
        <div class="courses-section-course-card">
          <img src="${course.image}" alt="${course.title}" class="courses-section-course-image">
          <div class="courses-section-course-info">
            <h3 class="courses-section-course-title">${course.title}</h3>
            <p class="courses-section-course-description">${course.description}</p>
            <p class="courses-section-course-price">${course.price}</p>
            <a href="detail.html?courseId=${course.id}" class="courses-section-course-button">view detail</a>

          </div>
        </div>
      </div>
    `;
    coursesList.innerHTML += courseCard;
  }
}

function generatePagination(totalPages) {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const pageLink = `
      <a href="#" class="courses-section-pagination-link" data-page="${i}">${i}</a>
    `;
    pagination.innerHTML += pageLink;
  }

  // Attach event listeners to pagination links
  const pageLinks = document.querySelectorAll(".courses-section-pagination-link");
  pageLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      currentPage = Number(e.target.dataset.page);
      displayCards();
    });
  });
}

async function initialize() {
  const courses = await loadCourses();
  const totalPages = Math.ceil(courses.length / cardsPerPage);
  generatePagination(totalPages);
  displayCards();
}

initialize();
