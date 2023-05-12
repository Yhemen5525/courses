let chart = [];


if (localStorage.getItem("chart")) {
  chart = JSON.parse(localStorage.getItem("chart"));
} else {
  localStorage.setItem("chart", JSON.stringify(chart));
}

setCartValue(chart.length)

function clearChart() {
  let chart = [];
  localStorage.setItem("chart", JSON.stringify(chart));
}

// chart to local and online
function saveChartToLocalStorage(chart) {
  localStorage.setItem("chart", JSON.stringify(chart));
  
  if(getUserData()){
       const userData = getUserData();
       userData.chart = chart;
      
      console.log(userData);
      console.log(userData.email);
      console.log(userData.chart);
 
      updateUserChartOnline(userData.email, userData.chart)
  }
}

function setCartValue(value) {
  var spanElement = document.getElementById("cart-id");
  if (spanElement) {
    spanElement.textContent = value;
  } else {
    console.error("Span element with id 'cart-id' not found.");
  }
}

function bouncer(){
	const userData = localStorage.getItem('userData');
	if (!userData) {
	  alert("Please Login to Continue")
	  window.location.href = './login.html';
	}

}

function goToCheckout(){
	const userData = localStorage.getItem('userData');
	if (!isLoggedIn()) {
	  alertUser("Please Login to Continue")
	  
	}else{
	window.location.href = './checkout.html';
	}

}

function isLoggedIn(){
	const userData = localStorage.getItem('userData');
	if (userData) {
	  return true;
	}else{
          return false;
	}

}

function getUserData(){
  const userData = localStorage.getItem('userData');
  if (userData) {
    return JSON.parse(userData);
  } else {
    return null;
  }
}

function logout() {
  localStorage.removeItem('userData');
  chart = [];
  saveChartToLocalStorage(chart);
  
  
  window.location.href = './login.html';
}

  function updateloginStatus() {
  const navLogin = document.querySelector('#nav-login');

  if (localStorage.getItem('userData')) {
    navLogin.innerHTML = '<i class="fas fa-sign-out-alt"></i> Logout';
    navLogin.onclick = logout;
  } else {
    navLogin.innerHTML = '<i class="fas fa-sign-in-alt"></i> Login';
    navLogin.href = './login.html';
  }
}

function alertUser(msg){
	iziToast.info({
	  title: 'info',
	  message: msg,
	  position: 'topCenter',
	  timeout: 3000
	});
}
//alertUser("all good")

function showError(message) {
  iziToast.error({
    title: 'Error',
    message: message,
    position: 'topCenter',
    timeout: 5000
  });
}

function updateUserChartOnline(email, chart) {
  const url = 'https://courses.the1000men.repl.co/updateChart';

  const requestData = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      chart
    })
  };

  fetch(url, requestData)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}


function togglePassword() {
			var password = document.getElementById("password");
			if (password.type === "password") {
				password.type = "text";
			} else {
				password.type = "password";
			}
		}

const courses = 

{
"courses": [
{
"id": 1,
"image": "img/french1.jpg",
"title": "Bonjour! Learn French with Ease",
"description": "152.5 hours | Beginner",
"full_description": "fAre you interested in learning French? This comprehensive course is designed to take you from a complete beginner to a confident French speaker. In this course, you will learn the basics of the French language, including key vocabulary and essential phrases. ",
"price": "$13.99 (was $19.99)",
"current_price": 6.99,
"instructor": "John Doe",
"level" : "beginer",
"duration": "6 weeks",
"syllabus": [
"Lesson 1: Introduction to French Language",
"Lesson 2: Basic Vocabulary and Phrases",
"Lesson 3: Grammar and Sentence Structure",
"Lesson 4: Listening and Speaking Skills",
"Lesson 5: Reading and Writing Skills",
"Lesson 6: Cultural Insights and Practical Applications"
]
},
{
"id": 2,
"image": "img/georgian.jpeg",
"title": "Master Georgian Language: From Basics to Proficiency",
"description": "120 hours | Beginner",
"full_description": "Are you interested in learning Georgian? This comprehensive course is designed to take you from a complete beginner to a confident Georgian speaker. In this course, you will learn the basics of the Georgian language, including key vocabulary and essential phrases. ",
"price": "$11.99 (was $15.99)",
"current_price": 9.99,
"instructor": "Sophie Johnson",
"level" : "beginner",
"duration": "8 weeks",
"syllabus": [
"Lesson 1: Introduction to Georgian Language and Alphabet",
"Lesson 2: Basic Vocabulary and Phrases",
"Lesson 3: Grammar and Sentence Structure",
"Lesson 4: Listening and Speaking Skills",
"Lesson 5: Reading and Writing Skills",
"Lesson 6: Cultural Insights and Practical Applications"
]
},
{
"id": 3,
"image": "img/german.jpeg",
"title": "German for Travelers and Business Professionals",
"description": "180 hours | Beginner",
"full_description": "Are you ready to immerse yourself in the beauty of the German language? This comprehensive course will take you on a journey through the sounds, words, and grammar of one of Europe's most enchanting languages. Whether you're looking to travel, connect with new people, or simply expand your linguistic horizons, this course is the perfect starting point for your German learning journey. ",
"price": "$6.99 (was $12.99)",
"current_price": 6.99,
"instructor": "Max Müller",
"level" : "beginner",
"duration": "12 weeks",
"syllabus": [
"Lesson 1: German Pronunciation and Phonetics: The Music of the Language",
"Lesson 2: Basic Vocabulary and Phrases: How to Express Yourself in Everyday Situations",
"Lesson 3: Grammar: The Building Blocks of the Language",
"Lesson 4: Listening and Speaking Skills: Improving Your Comprehension and Conversational Abilities",
"Lesson 5: Reading and Writing Skills: Unlocking the Secrets of Written German",
"Lesson 6: Culture and History: Discovering the Soul of Germany and Its People"
]
},
{
"id": 4,
"image": "img/italian.jpeg",
"title": "Speak Italian Like a Pro: Grammar, Vocabulary, and More",
"description": "140 hours | Beginner",
"full_description": "Ciao! Are you ready to embark on a journey to the heart of Italy? This comprehensive course is designed to help you learn Italian from scratch, with a focus on practical communication skills and cultural insights. From basic grammar to everyday conversation, this course covers all the essentials you need to become a confident Italian speaker. ",
"price": "$8.99 (was $12.99)",
"current_price": 8.99,
"instructor": "Maria Rossi",
"level" : "beginner",
"duration": "10 weeks",
"syllabus": [
"Lesson 1: Italian Pronunciation and Phonetics: Mastering the Sounds of the Language",
"Lesson 2: Basic Vocabulary and Phrases: Introducing Yourself and Others",
"Lesson 3: Grammar: Building Sentences and Expressing Ideas",
"Lesson 4: Listening and Speaking Skills: Communicating in Everyday Situations",
"Lesson 5: Reading and Writing Skills: Unlocking the Beauty of Written Italian",
"Lesson 6: Culture and Lifestyle: Exploring the Richness of Italian Culture and Society"
]
},
{
"id": 5,
"image": "img/japanese.jpeg",
"title": "Japanese Language Essentials: Conversations and Customs",
"description": "200 hours | Beginner",
"full_description": "Konnichiwa! Are you ready to immerse yourself in the fascinating world of the Japanese language? This comprehensive course is designed to take you on a journey through the sounds, characters, and grammar of Japan's rich linguistic tradition. From basic vocabulary to complex grammar, this course covers all the essentials you need to become a confident Japanese speaker. ",
"price": "$19.99 (was $29.99)",
"current_price": 19.99,
"instructor": "Yuki Tanaka",
"level" : "beginner",
"duration": "16 weeks",
"syllabus": [
"Lesson 1: Japanese Pronunciation and Phonetics: The Art of Speaking Japanese",
"Lesson 2: Basic Vocabulary and Phrases: Expressing Yourself in Everyday Situations",
"Lesson 3: Grammar: The Building Blocks of Japanese Sentences",
"Lesson 4: Listening and Speaking Skills: Improving Your Conversational Fluency",
"Lesson 5: Reading and Writing Skills: Unlocking the Secrets of Written Japanese",
"Lesson 6: Culture and Society: Exploring the Richness of Japanese Traditions and Customs"
]
},
{
"id": 6,
"image": "img/korean.jpeg",
"title": "Korean for Everyday Life: Practical Skills and Conversations",
"description": "180 hours | Beginner",
"full_description": "Annyeonghaseyo! Are you ready to explore the vibrant world of the Korean language? This comprehensive course is designed to introduce you to the sounds, characters, and grammar of Korean, with a focus on practical communication and cultural immersion. From basic phrases to advanced grammar, this course covers all the essentials you need to become a confident Korean speaker. ",
"price": "$17.99 (was $25.99)",
"current_price": 17.99,
"instructor": "Park Min-woo",
"level" : "beginner",
"duration": "12 weeks",
"syllabus": [
"Lesson 1: Korean Pronunciation and Phonetics: Mastering the Sounds of the Language",
"Lesson 2: Basic Vocabulary and Phrases: Introducing Yourself and Others",
"Lesson 3: Grammar: Building Sentences and Expressing Ideas",
"Lesson 4: Listening and Speaking Skills: Communicating in Everyday Situations",
"Lesson 5: Reading and Writing Skills: Unlocking the Beauty of Written Korean",
"Lesson 6: Culture and Lifestyle: Exploring the Richness of Korean Culture and Society"
]
},
{
"id": 7,
"image": "img/portuguese.jpeg",
"title": "Portuguese Grammar and Beyond: Understanding the Language Structure",
"description": "150 hours | Beginner",
"full_description": "Olá! Are you interested in learning Portuguese, one of the most widely spoken languages in the world? This comprehensive course is designed to take you from a complete beginner to a confident Portuguese speaker. In this course, you will learn the basics of the Portuguese language, including key vocabulary and essential phrases. ",
"price": "$7.99 (was $16.99)",
"current_price": 7.99,
"instructor": "Maria Silva",
"level" : "beginner",
"duration": "10 weeks",
"syllabus": [
"Lesson 1: Introduction to Portuguese Language and Culture",
"Lesson 2: Basic Vocabulary and Phrases: Expressing Yourself in Everyday Situations",
"Lesson 3: Grammar and Sentence Structure: The Building Blocks of Portuguese",
"Lesson 4: Listening and Speaking Skills: Improving Your Conversational Fluency",
"Lesson 5: Reading and Writing Skills: Unlocking the Beauty of Written Portuguese",
"Lesson 6: Portuguese Culture and Society: Exploring the Richness of Portuguese Traditions and Customs"
]
},
{
"id": 8,
"image": "img/russian.jpg",
"title": "Conversational Russian: From Small Talk to Deep Discussions",
"description": "160 hours | Beginner",
"full_description": "Здравствуйте! Are you ready to explore the fascinating world of the Russian language? This comprehensive course is designed to introduce you to the sounds, characters, and grammar of Russian, with a focus on practical communication and cultural immersion. From basic phrases to advanced grammar, this course covers all the essentials you need to become a confident Russian speaker. ",
"price": "$8.99 (was $13.99)",
"current_price": 8.99,
"instructor": "Anna Ivanova",
"level" : "beginner",
"duration": "8 weeks",
"syllabus": [
"Lesson 1: Russian Pronunciation and Phonetics: Mastering the Sounds of the Language",
"Lesson 2: Basic Vocabulary and Phrases: Introducing Yourself and Others",
"Lesson 3: Grammar: Building Sentences and Expressing Ideas",
"Lesson 4: Listening and Speaking Skills: Communicating in Everyday Situations",
"Lesson 5: Reading and Writing Skills: Unlocking the Beauty of Written Russian",
"Lesson 6: Culture and Lifestyle: Exploring the Richness of Russian Culture and Society"
]
},
{
"id": 9,
"image": "img/spanish.jpg",
"title": "Complete Spanish Course: Master Spanish Beginner to Advanced",
"description": "140 hours | Beginner",
"full_description": "¡Hola! Are you ready to embark on a journey into the vibrant and colorful world of Spanish language and culture? This comprehensive course is designed to take you from a complete beginner to a confident Spanish speaker, with a focus on practical communication and cultural immersion. From basic phrases to advanced grammar, this course covers all the essentials you need to become a fluent Spanish speaker. ",
"price": "$4.99 (was $10.99)",
"current_price": 4.99,
"instructor": "Juan Pérez",
"level" : "beginner",
"duration": "12 weeks",
"preview_video":"https://courses.the1000men.repl.co/public/videos/spanish.mp4",
"syllabus": [
"Lesson 1: Spanish Pronunciation and Phonetics: Mastering the Sounds of the Language",
"Lesson 2: Basic Vocabulary and Phrases: Introducing Yourself and Others",
"Lesson 3: Grammar: Building Sentences and Expressing Ideas",
"Lesson 4: Listening and Speaking Skills: Communicating in Everyday Situations",
"Lesson 5: Reading and Writing Skills: Unlocking the Beauty of Written Spanish",
"Lesson 6: Culture and Lifestyle: Exploring the Richness of Spanish Culture and Society"
]
},
{
"id": 10,
"image": "img/tamil.jpeg",
"title": "Tamil for English Speakers: Learning the Dravidian Language",
"description": "120 hours | Beginner",
"full_description": "வணக்கம்! Are you interested in learning the beautiful and ancient language of Tamil? This comprehensive course is designed to introduce you to the sounds, characters, and grammar of Tamil, with a focus on practical communication and cultural immersion. From basic phrases to advanced grammar, this course covers all the essentials you need to become a confident Tamil speaker. ",
"price": "$11.99 (was $15.99)",
"current_price": 11.99,
"instructor": "Priya Krishnan",
"level" : "beginner",
"duration": "10 weeks",
"syllabus": [
"Lesson 1: Tamil Pronunciation and Phonetics: Mastering the Sounds of the Language",
"Lesson 2: Basic Vocabulary and Phrases: Introducing Yourself and Others",
"Lesson 3: Grammar: Building Sentences and Expressing Ideas",
"Lesson 4: Listening and Speaking Skills: Communicating in Everyday Situations",
"Lesson 5: Reading and Writing Skills: Unlocking the Beauty of Written Tamil",
"Lesson 6: Culture and Lifestyle: Exploring the Richness of Tamil Culture and Society"
]
},
{
"id": 11,
"image": "img/turkish.jpg",
"title": "Turkish Language Course 1",
"description": "130 hours | Beginner",
"full_description": "Merhaba! Are you interested in learning the fascinating Turkish language and culture? This comprehensive course is designed to introduce you to the basics of Turkish, with a focus on practical communication and cultural immersion. From simple phrases to more advanced grammar, this course covers all the essentials you need to become a confident Turkish speaker. ",
"price": "$14.99 (was $22.99)",
"current_price": 14.99,
"instructor": "Özge Yılmaz",
"level" : "beginner",
"duration": "8 weeks",
"syllabus": [
"Lesson 1: Turkish Pronunciation and Phonetics: Mastering the Sounds of the Language",
"Lesson 2: Basic Vocabulary and Phrases: Introducing Yourself and Others",
"Lesson 3: Grammar: Building Sentences and Expressing Ideas",
"Lesson 4: Listening and Speaking Skills: Communicating in Everyday Situations",
"Lesson 5: Reading and Writing Skills: Unlocking the Beauty of Written Turkish",
"Lesson 6: Culture and Society: Discovering the Richness of Turkish Culture and History"
]
}

]
}

updateloginStatus();
