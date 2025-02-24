// Ensure variables persist across pages using localStorage
window.orgType = localStorage.getItem("orgType") || "";
window.orgName = localStorage.getItem("orgName") || "";
window.workersCount = localStorage.getItem("workersCount") || 0;
window.monthlyBudget = localStorage.getItem("monthlyBudget") || 0;
window.peopleServed = localStorage.getItem("peopleServed") || 0;
window.dietaryRestrictions = localStorage.getItem("dietaryRestrictions") || "";
window.storageCapacity = localStorage.getItem("storageCapacity") || 0;
window.deliveryFrequency = localStorage.getItem("deliveryFrequency") || "";
window.additionalInfo = localStorage.getItem("additionalInfo") || "";

const updateLocalStorage = () => {
    localStorage.setItem("orgType", window.orgType);
    localStorage.setItem("orgName", window.orgName);
    localStorage.setItem("workersCount", window.workersCount);
    localStorage.setItem("monthlyBudget", window.monthlyBudget);
    localStorage.setItem("peopleServed", window.peopleServed);
    localStorage.setItem("dietaryRestrictions", window.dietaryRestrictions);
    localStorage.setItem("storageCapacity", window.storageCapacity);
    localStorage.setItem("deliveryFrequency", window.deliveryFrequency);
    localStorage.setItem("additionalInfo", window.additionalInfo);
};

const buttons = document.querySelectorAll(".option-btn");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        window.orgType = button.textContent;
        updateLocalStorage();
        console.log("Organization Type: ", window.orgType);
    });
});

const nameInput = document.querySelector(".input-container input");
const nameSubmit = document.querySelector(".input-container .submit-btn");
nameSubmit.addEventListener("click", () => {
    window.orgName = nameInput.value;
    updateLocalStorage();
    console.log("Organization Name: ", window.orgName);
});

const form = document.querySelector(".form-container");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    window.workersCount = document.getElementById("workers-count").value;
    window.monthlyBudget = document.getElementById("monthly-budget").value;
    window.peopleServed = document.getElementById("people-served").value;
    window.dietaryRestrictions = document.getElementById("dietary-restrictions").value;
    window.storageCapacity = document.getElementById("storage-capacity").value;
    window.deliveryFrequency = document.getElementById("delivery-frequency").value;
    window.additionalInfo = document.getElementById("additional-info").value;

    updateLocalStorage();

    console.log("Workers Count: ", window.workersCount);
    console.log("Monthly Budget: ", window.monthlyBudget);
    console.log("People Served: ", window.peopleServed);
    console.log("Dietary Restrictions: ", window.dietaryRestrictions);
    console.log("Storage Capacity: ", window.storageCapacity);
    console.log("Delivery Frequency: ", window.deliveryFrequency);
    console.log("Additional Info: ", window.additionalInfo);

    // Redirect to app.html after form submission
    window.location.href = "app.html";
});
