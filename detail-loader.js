
// get a reference to the empty div element
const courseDetailDiv = document.getElementById('detail-container');
let selectedCourse = "";

function getCourseIdFromUrl(){
  // Get the URL parameters
  const queryString = window.location.search;
  const regex = /courseId=(\d+)/; // match "courseId=" followed by 1 or more digits
  const match = queryString.match(regex);

  let courseId = match ? parseInt(match[1]) : 1; // use the parsed value if it exists, otherwise default to 1

  return courseId;
}

function fetchCourseById(courseId) {

    //const response = await fetch('./courses.json');
    //const courses = await response.json();
    const course = courses.courses.find((c) => c.id === courseId);
    selectedCourse = course;
    
    if (!course) {
      // handle the case where the course is not found
      courseDetailDiv.innerHTML = '<p>Course not found</p>';
      return;
    }
    
        // create an HTML string to display the course data
    const courseDataHtml = `
      <section class="course-detail">
  <!-- Course Image -->
  <img src="${course.image}" alt="Course Image">

  <!-- Course Details -->
  <div class="course-detail-info">
    <h1 class="course-detail-title">${course.title}</h1>
    <p class="course-detail-description">${course.full_description}</p>
    <div class="course-detail-meta">
      <p><strong>Level:</strong> ${course.level}</p>
      <p><strong>Duration:</strong> ${course.duration}</p>
      <p><strong>Instructor:</strong> ${course.instructor}</p>
      <p><strong>Price:</strong> ${course.price}</p>
    </div>
    <button class="course-detail-enroll-button">Add To Cart</button>
  </div>
</section>

<!-- Course Syllabus -->
<section class="course-syllabus">
  <h2 class="course-syllabus-title">Course Syllabus</h2>
  <ul class="course-syllabus-list">
    ${course.syllabus.map((lesson) => `<li><a href="#">${lesson}</a></li>`).join('')}
  </ul>
</section>

    `;
    // insert the HTML string into the empty div element
    courseDetailDiv.innerHTML = courseDataHtml;
    console.log(course);
    
const button = document.querySelector(".course-detail-enroll-button");
button.addEventListener("click", addToChart);

 
}

fetchCourseById(getCourseIdFromUrl());




function addToChart() {



  const courseId = getCourseIdFromUrl();
  let chart = JSON.parse(localStorage.getItem('chart') || '[]');
  const course = courses.courses.find((c) => c.id === courseId);
  
  if (!course) {
    console.error(`Course with id ${courseId} not found`);
    return;
  }
  


  // check if the course is already in the chart
  const courseIndex = chart.findIndex((c) => c.id === courseId);
  if (courseIndex !== -1) {
    console.log(`Course with id ${courseId} already in the chart`);
            // Display a success message
	iziToast.info({
	  title: 'Success',
	  message: 'already in the cart!',
	  position: 'topCenter',
	  timeout: 3000
	});
    return;
  }
  


  // add the course to the chart
  chart.push(course);
        // Display a success message
	iziToast.success({
	  title: 'Success',
	  message: 'added to the cart!',
	  position: 'topCenter',
	  timeout: 3000
	});
	
  setCartValue(chart.length);
  //localStorage.setItem('chart', JSON.stringify(chart));
  saveChartToLocalStorage(chart);
  console.log(`Course with id ${courseId} added to the chart`);
  

}

//video player
 const videoPlayer = document.querySelector(".video-player-section");
       videoPlayer.innerHTML = "";
       console.log("selectedCourse");
       console.log(selectedCourse);
       if(selectedCourse.preview_video){
       	videoPlayer.innerHTML = `
       	<h2 class="section-title">Preview Video</h2>
      <div class="video-container">
        <video controls>
          <source src="${selectedCourse.preview_video}" type="video/mp4">
          <p>Your browser does not support the video tag.</p>
        </video>
      </div>
       	`
       }









