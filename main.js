const resume = document.getElementById("resume");

resume.addEventListener("click", function () {
  const path_to_resume = "../assets/Resume_Madhup_latest.pdf";
  const link = document.createElement("a");
  link.href = path_to_resume;
  link.download = "Resume_Madhup_latest.pdf";
  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
});

const toggleButton = document.querySelector(".contact-toggle");
const formContainer = document.querySelector(".contact-form-container");

toggleButton.addEventListener("click", () => {
  if (formContainer.style.right === "0px") {
    formContainer.style.right = "-466px";
  } else {
    formContainer.style.right = "0px";
  }
});

document.getElementById("contact-id").addEventListener("submit", function (e) {
  e.preventDefault();
  const Fname_val = document.getElementById("name").value;
  const Femail_val = document.getElementById("email").value;
  const Fmess_val = document.getElementById("message").value;

  const formData = {
    Fname: Fname_val,
    femail: Femail_val,
    fmess: Fmess_val,
  };

  const jsonData = JSON.stringify(formData);
  console.log(jsonData);
  document.getElementById("contact-id").reset();
});
