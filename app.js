const text = document.querySelector(".sec-text");
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Pursuing BCA";
    }, 0);
    setTimeout(() => {
        text.textContent = "FrontEndDeveloper";
    }, 4000);
    setTimeout(() => {
        text.textContent = "SoftwareDeveloper";
    }, 8000);
};
textLoad();

let aboutMeText = document.querySelector(".aboutme");
const readMore = document.querySelector(".read-more");
readMore.addEventListener("click", function () {
    readMore.classList.toggle("clicked");
    if (readMore.classList.contains("clicked")) {
        aboutMeText.textContent =
            "Hey there! I' Vishal, pursuing BCA and software developer specializing in Java. I love turning ideas into functional software and applications. Passionate about creativity and problem-solving, I thrive on crafting seamless user experiencesMy journey in technology began with a curiosity-driven exploration of programming languages and software development. Along the way, I've honed my skills in front-end, Java & it's framework technologies. I'm constantly seeking ways to innovate and elevate the digital experience.Outside of coding, you'll find me exploring the intersection of technology and design, experimenting with new frameworks, or immersing myself in the vibrant tech community. I thrive in collaborative environments and am always eager to learn from and share knowledge with fellow enthusiasts.";
        readMore.textContent = "Read Less";
    } else {
        aboutMeText.textContent =
            "Hey there! I'm Vishal, pursuing BCA and software developer specializing in Java. I love turning ideas into functional software and applications. Passionate about creativity and problem-solving, I thrive on crafting seamless user experiences. Let's collaborate and bring your vision to life!...";
        readMore.textContent = "Read More";
    }
});

const downloadBtn = document.querySelector(".download-btn");
downloadBtn.addEventListener("click", () => {
    let resumePath =
        // "https://docs.google.com/document/d/11s-EkENPcg9zxGLj8gFTHBfmWum-Nu8C8w7rwvK-CCs/edit?usp=sharing";
        "https://docs.google.com/document/d/1eygTjxTOArsHTwVl6k8MH376wUxS6Aze/edit?usp=sharing&ouid=116028834432615488281&rtpof=true&sd=true";
    window.location.href = resumePath;
});
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const projList = document.querySelector(".project-list");

let scrollAmount = 0;
const scrollStep = calculateStep();

prevBtn.addEventListener("click", () => {
    console.log("prev-btn clicked");
    scrollAmount -= scrollStep;
    if (scrollAmount < 0) {
        scrollAmount = 0;
    }
    slideTo(scrollAmount);
    updateButtonVisibility();
});
nextBtn.addEventListener("click", () => {
    scrollAmount += scrollStep;
    console.log(scrollAmount);
    if (scrollAmount > projList.scrollWidth - projList.clientWidth) {
        scrollAmount = projList.scrollWidth - projList.clientWidth;
    }
    slideTo(scrollAmount);
    updateButtonVisibility();
});

// Function to calculate scroll step dynamically based on image sizes
function calculateStep() {
    const firstImage = document.querySelector(".overlay");
    const imageWidth = firstImage.clientWidth;
    // Add some additional padding or margin to the step if needed
    return imageWidth + 16; // Adjust this value as needed
}

function slideTo(amount) {
    projList.scrollTo({
        left: amount,
        behavior: "smooth",
    });
}
function updateButtonVisibility() {
    // Check if at the beginning or end of the scrollable content
    if (scrollAmount <= 0) {
        prevBtn.style.display = "none";
    } else {
        prevBtn.style.display = "block";
    }
    if (scrollAmount >= projList.scrollWidth - projList.clientWidth) {
        nextBtn.style.display = "none";
    } else {
        nextBtn.style.display = "block";
    }
}

// sending email
const form = document.querySelector("form");
const fullName = document.querySelector("#name");
const email = document.querySelector("#email");
const contact = document.querySelector("#contact");
const sub = document.querySelector("#sub");
const msg = document.querySelector("#messg");
const errorDivs = document.querySelectorAll(".error-field");

function sendEmail() {
    const bodyMesg = `Full Name : ${fullName.value} <br> Contact No : ${contact.value}<br> Subject : ${sub.value} <br> Email-Address: ${email.value}<br> Message: ${msg.value}`;
    console.log(email.value);

    errorDivs.forEach((errorDiv) => {
        errorDiv.style.display = "none";
    });

    // Check if any required field is empty
    let hasError = false;
    errorDivs.forEach((errorDiv, index) => {
        const inputField = form.elements[index];
        if (!inputField.value) {
            showError(errorDiv);
            hasError = true;
        }
    });

    if (hasError) {
        return; // Prevent further processing if there are errors
    }
    function showError(errorDiv) {
        errorDiv.style.display = "block";
    }

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "vishalritazson88@gmail.com",
        Password: "6D301B4566966758614CC5F4FF75DD761C2C",
        To: "vishalritazson88@gmail.com",
        From: "vishalritazson88@gmail.com",
        Subject: sub.value,
        Body: bodyMesg,
    }).then((message) =>
        alert("Email sent successfully!Thanks for your interest.")
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
    form.reset();
});
const ul = document.querySelector(".ham-list");
const ham = document.querySelector(".hamburg-menu");
ham.addEventListener("click", () => {
    ul.classList.toggle("display");
});
document.querySelectorAll(".ham-list li").forEach((item) => {
    item.addEventListener("click", function () {
        document.querySelector(".ham-list").classList.remove("display");
    });
});