const menuBtn1 = document.getElementById('menuBtn1');
const closeBtn = document.getElementById('closeBtn');
const sidebar = document.getElementById('sidebar');
const backdrop = document.getElementById('backdrop');

// Open Sidebar
function openSidebar() {
  sidebar.classList.add('active');
  backdrop.classList.add('active');
  menuBtn1.style.display = 'none';    // Hide ☰ icon
  closeBtn.style.display = 'block';  // Show × icon
}

// Close Sidebar
function closeSidebar() {
  sidebar.classList.remove('active');
  backdrop.classList.remove('active');
  menuBtn1.style.display = 'inline-block';  // Show ☰ icon again
  closeBtn.style.display = 'none';         // Hide × icon
}

// Event Listeners
menuBtn1.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
backdrop.addEventListener('click', closeSidebar);