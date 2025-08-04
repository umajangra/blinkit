const searchInput = document.getElementById('search');
const placeholders = [
  "Search for Groceries...",
  "Search for Dairy...",
  "Search for Snacks...",
  "Search for Beverages..."
];

let currentPlaceholderIndex = 0;

// Function to change the placeholder
function changePlaceholder() {
  searchInput.placeholder = placeholders[currentPlaceholderIndex];
  currentPlaceholderIndex = (currentPlaceholderIndex + 1) % placeholders.length;
}

// Call the changePlaceholder function every 2 seconds (2000 milliseconds)
setInterval(changePlaceholder, 2000);

// Initial call to set the first placeholder
changePlaceholder();
 



 

const slider = document.getElementById('slider');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    const cardWidth = 256 + 16; // Tailwind w-60 = 240px, p-4 = 16px padding, gap is 16px

    nextBtn.addEventListener('click', () => {
      slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
      slider.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    });





