

  const hamburger = document.querySelector('.hamburger-icon');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });


  const showMoreBtn = document.querySelector('.show-more-button');

  showMoreBtn.addEventListener('click', () => {
      const msg = document.createElement('div');
      msg.textContent = "More exciting trips coming soon. Stay tuned!";
      msg.style.color = '#023e8a';
      msg.style.fontWeight = 'bold';
      msg.style.marginBottom = '15px';  // space between message and button
  
      // Insert message just before the button
      showMoreBtn.parentElement.insertBefore(msg, showMoreBtn);
  
      // Disable the button visually
      showMoreBtn.style.pointerEvents = 'none';
      showMoreBtn.style.opacity = '0.6';
  });
  

  function toggleCardDetails(card) {
    card.classList.toggle('opened');
}

// Attach the click event listener
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => toggleCardDetails(card));
});





// Function to handle the expansion of the card
function expandCard(card) {
  // Toggle the 'expanded' class to show or hide the extra details
  card.classList.toggle('expanded');
  
  // If the card is expanded, update the 'Explore' button text
  const exploreButton = card.querySelector('.explore-button-text');
  if (card.classList.contains('expanded')) {
      exploreButton.textContent = 'Close';
  } else {
      exploreButton.textContent = 'Explore';
  }
}

// Attach event listeners to each "Explore" button
document.querySelectorAll('.explore-button').forEach(button => {
  button.addEventListener('click', function(event) {
      const card = this.closest('.card');  // Get the closest card element
      expandCard(card);  // Toggle expansion on the clicked card
  });
});

// Optional: Smooth hover animation (already in CSS)
