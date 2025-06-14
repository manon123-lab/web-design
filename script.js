// 🔹 Typing Effect
document.addEventListener("DOMContentLoaded", function () {
    const roles = ["Innovator", "Tech Enthusiast", "Prompt Engineer"];
    let index = 0;
    let charIndex = 0;
    let typingText = document.querySelector(".typing-text");

    function typeEffect() {
        if (charIndex < roles[index].length) {
            typingText.textContent += roles[index].charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, 150);
        } else {
            setTimeout(eraseEffect, 1000);
        }
    }

    function eraseEffect() {
        if (charIndex > 0) {
            typingText.textContent = roles[index].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseEffect, 100);
        } else {
            index = (index + 1) % roles.length;
            setTimeout(typeEffect, 500);
        }
    }

    typeEffect();
});

// 🔹 Smooth Scrolling for Navbar Links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// 🔥 Project Details Data
const projects = {
    aiHealth: {
        title: "AI Health Assistant",
        description: "An AI-powered healthcare system that provides disease diagnosis, precautionary measures, and medication recommendations.",
        tech: ["Python", "Machine Learning", "Flask", "OpenAI API"],
        img: "images/ai-health.jpg",
        github: "https://github.com/Speed00j7/AI-Health-Assistant"
    },
    strokeDetection: {
        title: "Brain Stroke Detection Model",
        description: "Deep learning model analyzing CT/MRI scans to detect strokes and classify stroke types.",
        tech: ["Deep Learning", "CNN", "PyTorch"],
        img: "images/stroke-model.jpg",
        github: "https://github.com/Speed00j7/brain-stroke-detection"
    },
    sarcasmDetection: {
        title: "Sarcasm Detection Web App",
        description: "Detects sarcasm in text and voice inputs using NLP and deep learning.",
        tech: ["NLP", "Python", "Transformers", "Flask"],
        img: "images/sarcasm-app.jpg",
        github: "https://github.com/Speed00j7/sarcasm-detection"
    },
    objectDetection: {
        title: "Object Detection System",
        description: "Deep learning-based model identifying and classifying objects in real-time.",
        tech: ["YOLOv5", "TensorFlow", "Computer Vision"],
        img: "images/object-detection.jpg",
        github: "https://github.com/Speed00j7/object-detection"
    }
};

// 🔥 Open Modal
function openModal(projectKey) {
    const project = projects[projectKey];
    document.getElementById("modal-title").innerText = project.title;
    document.getElementById("modal-description").innerText = project.description;
    document.getElementById("modal-image").src = project.img;
    document.getElementById("modal-github-link").href = project.github;

    const techList = document.getElementById("modal-tech-list");
    techList.innerHTML = project.tech.map(tech => `<li>${tech}</li>`).join("");

    document.getElementById("projectModal").style.display = "flex";
}

// 🔥 Close Modal
function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}
document.addEventListener("DOMContentLoaded", function () {
    // Create a modal for viewing images
    const modal = document.createElement("div");
    modal.id = "image-modal";
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <img id="modal-img" src="" alt="Certification Image">
        </div>
    `;
    document.body.appendChild(modal);

    const modalImg = document.getElementById("modal-img");
    const closeModal = document.querySelector(".close-btn");

    // Open Modal on Image Click
    document.querySelectorAll(".cert-card img").forEach((img) => {
        img.addEventListener("click", function () {
            modal.style.display = "flex";
            modalImg.src = this.src;
        });
    });

    // Close Modal on Click (Outside or Close Button)
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Close on ESC Key
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            modal.style.display = "none";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        // Get input values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Basic validation
        if (name === "" || email === "" || message === "") {
            alert("⚠️ Please fill out all fields.");
            return;
        }

        // Email structure
        const subject = encodeURIComponent("New Contact Message from " + name);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

        // Mailto link
        const mailtoLink = `mailto:madhavansiva27@gmail.com?subject=${subject}&body=${body}`;

        // Open default email app
        window.location.href = mailtoLink;

        // Optional: Reset form after submission
        contactForm.reset();
    });
});

