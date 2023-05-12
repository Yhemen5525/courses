const testimonialData = [
  {
    image: "./client2.png",
    text: "I purchased a Spanish course from Linguae.com and I'm amazed at how quickly I'm learning! The material is well-organized and the instructors are knowledgeable and friendly.",
    author: "Alice Garcia"
  },
  {
    image: "./client1.png",
    text: "Linguae.com completely changed my perspective on learning languages. The Italian course was challenging, but the instructors were patient and supportive. Grazie mille!",
    author: "Michael Rossi"
  },
  {
    image: "./client4.png",
    text: "As a frequent traveler, Linguae.com was the perfect solution for learning basic phrases in different languages. The courses are easy to navigate and I felt more confident interacting with locals on my latest trip.",
    author: "Emily Kim"
  },
  {
    image: "./client3.png",
    text: "I was hesitant to purchase an online language course, but Linguae.com exceeded my expectations. The French course was engaging and interactive, and I appreciated the flexibility to complete lessons on my own schedule.",
    author: "David Lee"
  }
];


$(document).ready(function() {
  const slider = $(".testimonial-slider");
  
  testimonialData.forEach(function(testimonial) {
    const slide = $("<div>").addClass("testimonial-slide");
    const imageWrapper = $("<div>").addClass("testimonial-image");
    const image = $("<img>").attr("src", testimonial.image);
    const text = $("<p>").addClass("testimonial-text").text(testimonial.text);
    const author = $("<p>").addClass("testimonial-author").text(testimonial.author);
    
    imageWrapper.append(image);
    slide.append(imageWrapper, text, author);
    slider.append(slide);
  });
  
  slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });
});
