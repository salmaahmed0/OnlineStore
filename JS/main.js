// Fixed navebar
// const navbar = document.getElementById("navbar");
// const sticky = navbar.offsetTop;
// function fixedNav() {
//     if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//     } else {
//     navbar.classList.remove("sticky");
//     }
// }
// End fixed navebar
// Show password
function ShowPassword() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
// End Show password 
