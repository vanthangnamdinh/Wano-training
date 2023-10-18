document.addEventListener("DOMContentLoaded", function () {
    
    const formData = new URLSearchParams(window.location.search);
    if (formData.has("data")) {
        const data = JSON.parse(formData.get("data"));
        const lastName=document.getElementById("lastname")
        lastName.value=data['name'].split(" ")[0]
        const firstName=document.getElementById("firstname")
        firstName.value=data['name'].split(" ")[1]
        const gender=document.getElementById(data['gender'])
        gender.checked=true
        const email=document.getElementById("email")
        email.value=data['email']
        const phone=document.getElementById("phone")
        phone.value=data['phone']
        const language=document.getElementById("language")
        language.value=data['language']
        const secondLanguage=document.getElementById(data['secondLanguage'])
        secondLanguage.checked=true
        const certificates=document.getElementById("certificates")
        certificates.value=data['certificates']
        const seftIntro=document.getElementById("self-introduce")
        seftIntro.innerText=data['self-introduce']
    }
});