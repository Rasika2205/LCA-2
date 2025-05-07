// Learn more toggle
function toggleInfo() {
  const paragraph = document.getElementById("extra-info");
  if (paragraph.style.display === "none") {
    paragraph.style.display = "block";
    console.log("Extra info is now visible.");
  } else {
    paragraph.style.display = "none";
    console.log("Extra info is now hidden.");
  }
}

// Host button click
document.querySelector('.host-button').addEventListener('click', function () {
  alert("Thank you for your interest! Host signup coming soon.");
  console.log("Host button clicked - alert shown.");
});

// Custom function with a callback for search
function handleSearch(inputValue, callback) {
  const trimmed = inputValue.trim();
  if (trimmed.length === 0) {
    alert("Please type something to search.");
    console.log("Empty search input - alert triggered.");
    return;
  }
  console.log("Search submitted with value:", trimmed);
  callback(trimmed);
}

// Search input 'Enter' event
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector(".search-bar input");

  if (searchInput) {
    searchInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        handleSearch(searchInput.value, function (result) {
          alert("You searched for: " + result);
          console.log("Search callback executed with result:", result);
        });
      }
    });
  }
});

// Smooth content update after 2 seconds
setTimeout(function () {
  document.getElementById("section-title").textContent = "Discover India's Hidden Treasures";
  const features = document.querySelectorAll(".feature h4");
  features.forEach(function (feature) {
    feature.style.color = "#0C6B90";
  });
  console.log("Section title and feature colors updated after 2 seconds.");
}, 2000);

// Button style update on page load
window.onload = function () {
  document.getElementById("exploreBtn").classList.add("cta-button");
  console.log("Explore button styled on load.");
};

// Hover effect on cards
const cards = document.querySelectorAll('.experience-card');
cards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.transform = 'scale(1.03)';
    card.style.transition = 'transform 0.3s ease';
    
  });

  card.addEventListener('mouseout', () => {
    card.style.transform = 'scale(1)';
  });
});

// Click event on Book Now buttons
const bookButtons = document.querySelectorAll('.book-btn');
bookButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Thank you for booking!');
    console.log("Book Now button clicked.");
  });
});

// 'B' key shortcut for booking
document.addEventListener('keydown', function(event) {
  if (event.key.toLowerCase() === 'b') {
    document.querySelector('.book-btn').click();
    console.log("'B' key pressed - Book Now triggered.");
  }
});

// 'S' key to highlight email input
document.addEventListener("keydown", function(event) {
  if (event.key === "s" || event.key === "S") {
    const emailField = document.querySelector(".email-input");
    emailField.style.outline = "3px solid #0C6B90";
    emailField.textContent = "Start typing your email...";
    console.log("'S' key pressed - email field highlighted.");
  }
});

// Subscribe button click
const subscribeBtn = document.querySelector(".subscribe-btn");
const notification = document.getElementById("notification");
const messagesList = document.getElementById("messages-list");

subscribeBtn.addEventListener("click", () => {
  subscribeBtn.style.backgroundColor = "#0C6B90";
  subscribeBtn.style.color = "white";
  subscribeBtn.textContent = "Subscribed!";
  console.log("Subscribe button clicked - styling updated.");

  notification.style.display = "block";
  console.log("Notification shown.");

  setTimeout(() => {
    notification.style.display = "none";
    console.log("Notification hidden after 3 seconds.");
  }, 3000);

  const newMessage = document.createElement("li");
  newMessage.textContent = "Thank you for subscribing! You will receive updates soon.";
  newMessage.style.color = "white";
  newMessage.classList.add("message-item");
  messagesList.append(newMessage);
  console.log("New message added to list.");
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  console.log("Hamburger menu clicked - nav visibility toggled.");
});
