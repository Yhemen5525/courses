const imageElement = document.querySelector("#profile-image");
const emailElement = document.querySelector("#email");
const usernameElement = document.querySelector("#username");


if(isLoggedIn()){
  const userData = getUserData();
  console.log(userData.profile_image)
  
  emailElement.innerHTML = userData.email;
  usernameElement.innerHTML = userData.username;
  imageElement.src = `https://courses.the1000men.repl.co/${userData.profile_image}`;
  

console.log("yes")
console.log(userData.email)

}else{

  console.log("Please login to view profile")
  window.location.href = './login.html';

}
