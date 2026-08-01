//========================
// Get all sections
//========================

const homeContent = document.getElementById("HomeContent");
const phoneGrid = document.getElementById("phone-grid");
const homelink = document.getElementById("home-link");
const emailGrid = document.getElementById("email-grid");
const linkedinGrid = document.getElementById("linkedin-grid");
const aboutsection = document.getElementById("about-section");
const experienceSection = document.getElementById("experience");
const contactMeSection = document.getElementById("contactMe");

//========================
// Get all buttons
//========================

const phoneButton = document.getElementById("phone-button");
const emailButton = document.getElementById("email-button");
const linkedinButton = document.getElementById("linkedin-button");
const aboutLink = document.getElementById("about-link");
const experienceLink = document.getElementById("experience-link");
const contactMeLink = document.getElementById("contact-link");

//========================
// Hide all sections
//========================

function hideAllSections() {

    homeContent.style.display = "none";
    phoneGrid.style.display = "none";
    emailGrid.style.display = "none";
    linkedinGrid.style.display = "none";
    aboutsection.style.display = "none";
    experienceSection.style.display = "none";
    contactMeSection.style.display = "none";
}

//========================
// Show Home on page load
//========================

hideAllSections();
homeContent.style.display = "block";

//========================
// Phone Button
//========================

phoneButton.addEventListener("click", function () {

    hideAllSections();
    phoneGrid.style.display = "grid";


});

//========================
// Home Button
//========================


homelink.addEventListener("click", function () {

    hideAllSections();
    homeContent.style.display = "block";

});

//========================
// Email Button
//========================


emailButton.addEventListener("click", function () {

    hideAllSections();
    emailGrid.style.display = "grid";


});

//========================
// LinkedIn Button
//========================


linkedinButton.addEventListener("click", function () {

    hideAllSections();
    linkedinGrid.style.display = "grid";
});

aboutLink.addEventListener("click", function () {

    hideAllSections();
    aboutsection.style.display = "block";
});

experienceLink.addEventListener("click", function () {

    hideAllSections();
    experienceSection.style.display = "block";
});

const cards = document.querySelectorAll(".experience-card");

cards.forEach(card => {

    const header = card.querySelector(".experience-header");

    header.addEventListener("click", () => {

        cards.forEach(c => {

            if(c !== card){

                c.classList.remove("active");

            }

        });

        card.classList.toggle("active");

    });

});

contactMeLink.addEventListener("click", function () {

    hideAllSections();
    contactMeSection.style.display = "block";
});

const contactForm = document.getElementById("contact-form");
const popup = document.getElementById("popup-message");

contactForm.addEventListener("submit", function(event){

    event.preventDefault();

    const formName = document.getElementById("form-name").value;
    const formCountryCode = document.getElementById("form-countryCode").value;
    const formPhone = document.getElementById("form-phone").value;
    const formEmail = document.getElementById("form-email").value;
    const formMessage = document.getElementById("form-message").value;
    //Validations
    const phonePattern = /^[0-9]+$/;
    if(!phonePattern.test(formPhone)){

    alert("Phone number should contain only digits.");

    return;

}
if(formPhone.length < 7 || formPhone.length > 15){

    alert("Please enter a valid phone number.");

    return;

}
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!emailPattern.test(formEmail)){

    alert("Please enter a valid email address.");

    return;

}





    console.log(formName);
    console.log(formCountryCode + " " + formPhone);
    console.log(formEmail);
    console.log(formMessage);
    const templateParams = {
        name: formName,
        country_code: formCountryCode,
        phone_number: formPhone,
        email: formEmail,
        message: formMessage
    };

    emailjs.send("service_x9qvu0b","template_y5h2q83",templateParams)
    .then(function(response){

        popup.classList.add("show");

    // Hide after 5 seconds
    setTimeout(function(){

        popup.classList.remove("show");

    }, 5000);
        console.log("Success:", response);
        contactForm.reset();

    }, function(error){

        alert("Failed to send email. Check the console for more details.");
        console.error("Failed:", error);

    });
    
    // Show popup
    

});