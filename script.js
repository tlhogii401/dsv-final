function toggleMenu(){
 document.getElementById('navLinks').classList.toggle('active');
}
function sendToWhatsApp() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let service = document.getElementById("service").value;
    let message = document.getElementById("message").value;

    let url = "https://wa.me/27608763221?text="
        + "Name: " + encodeURIComponent(name) + "%0a"
        + "Email: " + encodeURIComponent(email) + "%0a"
        + "Service: " + encodeURIComponent(service) + "%0a"
        + "Details: " + encodeURIComponent(message);

    window.open(url, "_blank");
}