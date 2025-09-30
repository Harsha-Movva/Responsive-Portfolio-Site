// Contact form validation (already present in your file)
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields!");
        return;
      }
      if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Please enter a valid email address!");
        return;
      }
      alert(`Thank you, ${name}! Your message has been submitted.`);
      form.reset();
    });
  }

  // Load Projects dynamically if #project-list exists
  const projectList = document.getElementById("project-list");
  if (projectList) {
    fetch("projects.json")
      .then(res => res.json())
      .then(projects => {
        projects.forEach(p => {
          const div = document.createElement("div");
          div.classList.add("project");
          div.innerHTML = `
            <h3>${p.title}</h3>
            <p>${p.description}</p>
            <a href="${p.link}" target="_blank">View</a>
          `;
          projectList.appendChild(div);
        });
      });
  }
});
