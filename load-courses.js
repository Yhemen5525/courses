function populateCourses(courses, page = 1, itemsPerPage = 5) {
  const coursesList = document.getElementById("courses-list");
  coursesList.innerHTML = "";

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, courses.length);

  for (let i = startIndex; i < endIndex; i++) {
    const course = courses[i];

    const courseItem = document.createElement("div");
    courseItem.classList.add("courses-section-course-item");

    const courseCard = document.createElement("div");
    courseCard.classList.add("courses-section-course-card");

    const courseImage = document.createElement("img");
    courseImage.src = course.image;
    courseImage.alt = course.title;
    courseImage.classList.add("courses-section-course-image");

    const courseInfo = document.createElement("div");
    courseInfo.classList.add("courses-section-course-info");

    const courseTitle = document.createElement("h3");
    courseTitle.classList.add("courses-section-course-title");
    courseTitle.textContent = course.title;

    const courseDescription = document.createElement("p");
    courseDescription.classList.add("courses-section-course-description");
    courseDescription.textContent = course.description;

    const coursePrice = document.createElement("p");
    coursePrice.classList.add("courses-section-course-price");
    coursePrice.textContent = course.price;

    const courseButton = document.createElement("a");
    courseButton.href = `detail.html?courseId=${course.id}`;
    courseButton.classList.add("courses-section-course-button");
    courseButton.textContent = "view detail";

    courseInfo.appendChild(courseTitle);
    courseInfo.appendChild(courseDescription);
    courseInfo.appendChild(coursePrice);
    courseInfo.appendChild(courseButton);

    courseCard.appendChild(courseImage);
    courseCard.appendChild(courseInfo);

    courseItem.appendChild(courseCard);

    coursesList.appendChild(courseItem);
  }

  // Update pagination links
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  const totalPages = Math.ceil(courses.length / itemsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    const pageLink = document.createElement("a");
    pageLink.href = "#";
    pageLink.classList.add("courses-section-pagination-link");
    pageLink.textContent = i;
    pageLink.dataset.page = i;
    if (i === page) {
      pageLink.classList.add("active");
    }
    pageLink.addEventListener("click", function (event) {
      event.preventDefault();
      const selectedPage = parseInt(event.target.dataset.page);
      populateCourses(courses, selectedPage, itemsPerPage);
    });
    pagination.appendChild(pageLink);
  }
}
populateCourses(courses.courses)
