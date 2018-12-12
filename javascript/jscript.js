function checkSearchInput() {
    var input_text = document.forms["google-form"]["search-text"].value;
    if (input_text == "") {
        alert("Cant search an empty search field");
        return false;
    }
}

function toggleMobileMenuVisibility() {
    var x = document.getElementById("mobile-menu");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
