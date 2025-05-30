const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const sidebar = document.getElementById('sidebar');
const backdrop = document.getElementById('backdrop');

// Open Sidebar
function openSidebar() {
  sidebar.classList.add('active');
  backdrop.classList.add('active');
  menuBtn.style.display = 'none';    // Hide ☰ icon
  closeBtn.style.display = 'block';  // Show × icon
}

// Close Sidebar
function closeSidebar() {
  sidebar.classList.remove('active');
  backdrop.classList.remove('active');
  menuBtn.style.display = 'inline-block';  // Show ☰ icon again
  closeBtn.style.display = 'none';         // Hide × icon
}

// Event Listeners
menuBtn.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
backdrop.addEventListener('click', closeSidebar);