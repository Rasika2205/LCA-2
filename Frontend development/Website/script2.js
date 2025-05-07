// Custom function to handle search
function handleSearch() {
  const input = document.getElementById('searchInput').value.trim();

  if (input) {
    console.log("User is searching for:", input);
    alert(`Searching for: ${input}`);
  } else {
    alert("Please enter a destination to explore.");
    console.log("Empty search input.");
  }
}

// Add click event listener to the search button
document.getElementById('searchButton').addEventListener('click', () => {
  console.log("Search button clicked.");
  handleSearch();
});

// Optional: allow pressing "Enter" key inside the input
document.getElementById('searchInput').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    console.log("Enter key pressed in search input.");
    handleSearch();
  }
});


// Select all destination cards
const destCards = document.querySelectorAll('.dest-card');

destCards.forEach((card) => {
  // Mouseover: add visual effect
  card.addEventListener('mouseover', () => {
    card.style.outline = '3px solid #ffffffaa';
    console.log("Card hovered:", card);
  });

  // Mouseout: remove visual effect
  card.addEventListener('mouseout', () => {
    card.style.outline = 'none';
    console.log("Card unhovered:", card);
  });

  // Click: Add or remove "More Info" dynamically
  card.addEventListener('click', () => {
    const contentArea = card.querySelector('.dest-card-content');
    let existing = contentArea.querySelector('.more-info');

    if (existing) {
      existing.remove();
      console.log("More info removed from card.");
    } else {
      const info = document.createElement('div');
      info.classList.add('more-info');
      info.textContent = ' Explore cultural tours, best seasons to travel & local guides! Click again to hide.';
      info.style.marginTop = '10px';
      info.style.background = 'rgba(255,255,255,0.8)';
      info.style.color = '#0C6B90';
      info.style.padding = '10px';
      info.style.borderRadius = '10px';
      info.style.fontSize = '14px';
      contentArea.appendChild(info);
      console.log("More info added to card.");
    }
  });
});


// Learn more local secrets - button click
document.querySelector('.learn-morel').addEventListener('click', function () {
  const cardContainer = document.querySelector('.cards-wrapperl');
  console.log("'Learn More' clicked. Adding new local secret cards...");

  const newCard1 = document.createElement('div');
  newCard1.classList.add('cardlocals');
  newCard1.innerHTML = `
    <img src="waterfalll.jpg" alt="Hidden Waterfall" />
    <div class="card-contentl">
      <div class="card-titlel">Hidden Waterfall</div>
      <div class="card-descriptionl">"Ask the locals for the 'secret waterfall trail' near the hills."</div>
      <div class="card-authorl">-Ravi, Local Trekker</div>
      <div class="card-locationl">📍Location- Coorg, Karnataka</div>
      <div class="card-tagl">Adventure</div>
    </div>
  `;
  cardContainer.append(newCard1);
  console.log("First local card added.");

  const newCard2 = document.createElement('div');
  newCard2.classList.add('cardlocals');
  newCard2.innerHTML = `
    <img src="rooftop cafe.jpg" alt="Hidden Café" />
    <div class="card-contentl">
      <div class="card-titlel">Hidden Café</div>
      <div class="card-descriptionl">"Behind the spice market is a small rooftop café with the best sunset view."</div>
      <div class="card-authorl">-Fatima, Local Blogger</div>
      <div class="card-locationl">📍Location- Kochi, Kerala</div>
      <div class="card-tagl">Local Secret</div>
    </div>
  `;
  cardContainer.append(newCard2);
  console.log("Second local card added.");
});


// Keyboard shortcut for adding local secret cards
document.addEventListener('keydown', function (event) {
  if (event.key === 'l' || event.key === 'L') {
    document.querySelector('.learn-morel').click();
    console.log("'L' key pressed - triggering learn more click.");
  }
});


// Subscribe button logic
const subscribeBtn = document.querySelector(".subscribe-btn");
const notification = document.getElementById("notification");
const messagesList = document.getElementById("messages-list");

subscribeBtn.addEventListener("click", () => {
  subscribeBtn.style.backgroundColor = "#0C6B90";
  subscribeBtn.style.color = "white";
  subscribeBtn.textContent = "Subscribed!";
  console.log("Subscribe button clicked. Button style updated.");

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
  console.log("New subscription message added to list.");
});


// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.style.display = mobileMenu.style.display === "flex" ? "none" : "flex";
  console.log("Hamburger clicked - mobile menu toggled to:", mobileMenu.style.display);
});
