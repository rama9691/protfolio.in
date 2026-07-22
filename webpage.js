// ===== NAVBAR SCROLL SMOOTH =====
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
      top: targetSection.offsetTop - 50,
      behavior: "smooth"
    });
  });
});

// ===== CONTACT FORM SUBMIT =====
const form = document.querySelector("form");
form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const message = form.querySelector('textarea').value;

  if(name && email && message){
    alert(`✅ Thank you ${name}! Your message has been sent.`);
    form.reset();
  } else {
    alert("⚠️ Please fill all fields before submitting.");
  }
});

// ===== DARK MODE TOGGLE =====
const toggleBtn = document.createElement("button");
toggleBtn.innerText = "🌙 Dark Mode";
toggleBtn.classList.add("dark-toggle");
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if(document.body.classList.contains("dark")){
    toggleBtn.innerText = "☀️ Light Mode";
  } else {
    toggleBtn.innerText = "🌙 Dark Mode";
  }
});

// ===== SCROLL ANIMATION =====
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.8;

  sections.forEach(sec => {
    const boxTop = sec.getBoundingClientRect().top;
    if(boxTop < triggerBottom){
      sec.classList.add("show");
    } else {
      sec.classList.remove("show");
    }
  });
});
  