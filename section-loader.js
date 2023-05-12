// Fetch the header content from "./header.html"
fetch('./header.html')
    .then(response => response.text())
    .then(data => {
        // Insert the fetched header content into the header section
        document.getElementById('header-section').innerHTML = data;
    })
    .catch(error => console.error('Error fetching header:', error));
    
// Fetch the header content from "./footer.html"
fetch('./footer.html')
    .then(response => response.text())
    .then(data => {
        // Insert the fetched header content into the header section
        document.getElementById('footer-section').innerHTML = data;
    })
    .catch(error => console.error('Error fetching header:', error));    
    
    
    // Fetch the about content from "./about.html"
fetch('./about.html')
    .then(response => response.text())
    .then(data => {
        // Insert the fetched header content into the header section
        document.getElementById('about').innerHTML = data;
    })
    .catch(error => console.error('Error fetching header:', error));    
    

function enroll() {
  setTimeout(function() {
    window.location.href = "././#courses";
  }, 1000); // delay of 3 seconds (3000 milliseconds)
}
