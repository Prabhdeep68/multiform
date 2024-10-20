var Form1 = document.getElementById("Form1");
var Form2 = document.getElementById("Form2");
var Form4 = document.getElementById("Form4"); // Updated to Form 4

var Next1 = document.getElementById("Next1");
var Next2 = document.getElementById("Next2");
var Back1 = document.getElementById("Back1");
var Back2 = document.getElementById("Back2");
var Back3 = document.getElementById("Back3");
var progress = document.getElementById("progress");

let currentForm = 0;

function updateForms() {
    // Hide all forms
    Form1.style.display = "none";
    Form2.style.display = "none";
    Form4.style.display = "none";

    // Show the current form
    if (currentForm === 0) {
        Form1.style.display = "block";
    } else if (currentForm === 1) {
        Form2.style.display = "block";
    } else if (currentForm === 2) {
        Form4.style.display = "block"; // Show Form 4
    }

    // Update progress
    progress.style.width = (currentForm + 1) * 120 + "px";
}

// Validate Form 1 inputs
function validateForm1() {
    const inputs = Form1.querySelectorAll("input");
    let valid = true;

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            valid = false;
            input.classList.add("error");
        } else {
            input.classList.remove("error");
        }
    });

    return valid;
}

// Validate Form 2 inputs
function validateForm2() {
    const inputs = Form2.querySelectorAll("input[required]");
    let valid = true;

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            valid = false;
            input.classList.add("error");
        } else {
            input.classList.remove("error");
        }
    });

    return valid;
}

// Validate Form 4 inputs
function validateForm4() {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];

    if (!file) {
        alert("Please upload a file.");
        return false;
    }

    const validTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    if (!validTypes.includes(file.type)) {
        alert("Please upload a .jpg, .png, or .pdf file.");
        return false;
    }

    if (file.size > 5 * 1024 * 1024) { // 5 MB
        alert("File size must be less than 5 MB.");
        return false;
    }

    return true;
}

// Next1 button click
Next1.onclick = function() {
    if (validateForm1()) {
        currentForm++;
        updateForms();
    } else {
        alert("Please fill all fields in Form 1.");
    }
}

// Back1 button click
Back1.onclick = function() {
    if (currentForm > 0) {
        currentForm--;
        updateForms();
    }
}

// Next2 button click
Next2.onclick = function() {
    if (validateForm2()) {
        currentForm++;
        updateForms();
    } else {
        alert("Please fill all required fields in Form 2.");
    }
}

// Back2 button click
Back2.onclick = function() {
    if (currentForm > 0) {
        currentForm--;
        updateForms();
    }
}

// Back3 button click
Back3.onclick = function() {
    if (currentForm > 0) {
        currentForm--;
        updateForms();
    }
}

// Submit Form4
Form4.onsubmit = function(event) {
    event.preventDefault(); // Prevent default form submission
    if (validateForm4()) {
        alert("Form submitted successfully!");
        // Handle form submission logic here
    }
}

// Initialize the first form
updateForms();
