let users = [];

document.getElementById("SignUp").addEventListener("click", () => {
  let name = document.getElementById("text2").value;
  let email = document.getElementById("email2").value;
  let pass = document.getElementById("pass2").value;

  if (name && email && pass) {
    users.push({ name: name, email: email, password: pass });
    console.log("User registered:", users);
    alert("Sign Up Successful!");
  } else {
    alert("Please fill all fields");
  }
});

document.getElementById("SignIn").addEventListener("click", () => {
  let name = document.getElementById("text").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;

  let userFound = users.find(
    (user) =>
      user.name === name && user.email === email && user.password === pass
  );

  if (userFound) {
    alert("Login Successful!");
  } else {
    alert("User not found!");
  }
});

let toggle = () => {
  let On = document.getElementById("On");
  let Off = document.getElementById("Off");
  On.classList.toggle("on2");
  Off.classList.toggle("off2");
};

let accordians = document.querySelectorAll(".accordian");

accordians.forEach((accordian) => {
  let icon = accordian.querySelector(".icon"); 
  let answer = accordian.querySelector(".answer"); 
  let question = accordian.querySelector(".question"); 

  accordian.addEventListener("click", () => {
    icon.classList.toggle("active");
    question.classList.toggle("active");
    answer.classList.toggle("active");
    accordian.classList.toggle("active");
  });
});

const swiper = new Swiper('.js-testimonials-slider', {
grabCursor: true,
spaceBetween: 30,
pagination: {
  el: '.js-testimonials-pagination',
  clickable: true,
},
breakpoints: {
  767:{
    slidesPerView: 2,
  }
}

});