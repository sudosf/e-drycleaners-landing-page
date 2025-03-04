document.addEventListener("DOMContentLoaded", function () {
  fetch("components/navbar.html")
    .then(response => response.text())
    .then(html => {
      document.getElementById("navbar-container").innerHTML = html;
    });
});

function changeTab(tabId) {
  // Get all tab buttons and remove 'active' class
  document.querySelectorAll('.terms-tab').forEach(tab => {
    tab.classList.remove('active');
  });

  // Get all tab content sections and hide them
  document.querySelectorAll('.terms-content').forEach(content => {
    content.classList.remove('active');
  });

  // Add 'active' class to the selected tab button
  document.querySelector(`[onclick="changeTab('${tabId}')"]`).classList.add('active');

  // Show the corresponding content section
  document.getElementById(tabId).classList.add('active');
}

// Set the default active tab when the page loads
document.addEventListener("DOMContentLoaded", function () {
  changeTab('terms-conditions');
});
