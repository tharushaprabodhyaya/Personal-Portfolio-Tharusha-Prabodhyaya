// ========================
// CUSTOM ALERT FUNCTION
// ========================

function showCustomAlert(message, icon = "ℹ️") {
  // Create overlay
  const overlay = document.createElement("div");
  overlay.className = "custom-alert-overlay";
  
  // Create alert box
  const alertBox = document.createElement("div");
  alertBox.className = "custom-alert-box";
  
  // Add content
  alertBox.innerHTML = `
    <div class="custom-alert-icon">${icon}</div>
    <div class="custom-alert-message">${message}</div>
    <button class="custom-alert-btn">OK</button>
  `;
  
  overlay.appendChild(alertBox);
  document.body.appendChild(overlay);
  
  // Show alert with animation
  setTimeout(() => {
    overlay.classList.add("active");
  }, 10);
  
  // Close alert on button click
  const closeBtn = alertBox.querySelector(".custom-alert-btn");
  closeBtn.addEventListener("click", () => {
    overlay.classList.remove("active");
    setTimeout(() => {
      document.body.removeChild(overlay);
    }, 300);
  });
  
  // Close on overlay click
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.remove("active");
      setTimeout(() => {
        document.body.removeChild(overlay);
      }, 300);
    }
  });
}

// ========================
// ONLOAD WELCOME ALERT
// ========================

window.onload = function() {
  showCustomAlert("Welcome to My Personal Portfolio Website! <br> < @tharushaprabodhyaya > <br> 👨🏻‍💻 🚀", "👋");
}

// ========================
// TOAST NOTIFICATION FUNCTION
// ========================

function showToast(message, icon = "🚫") {
  // Check if toast already exists
  let existingToast = document.querySelector(".toast-notification");
  
  if (existingToast) {
    // If toast exists, just shake it
    existingToast.classList.add("shake");
    setTimeout(() => {
      existingToast.classList.remove("shake");
    }, 300);
    return;
  }
  
  // Create toast
  const toast = document.createElement("div");
  toast.className = "toast-notification";
  
  toast.innerHTML = `
    <div class="toast-icon">${icon}</div>
    <div class="toast-message">${message}</div>
    <button class="toast-close">×</button>
  `;
  
  document.body.appendChild(toast);
  
  // Show toast with animation
  setTimeout(() => {
    toast.classList.add("show");
  }, 10);
  
  // Auto hide after 3 seconds
  const autoHideTimer = setTimeout(() => {
    hideToast(toast);
  }, 3000);
  
  // Close button
  const closeBtn = toast.querySelector(".toast-close");
  closeBtn.addEventListener("click", () => {
    clearTimeout(autoHideTimer);
    hideToast(toast);
  });
}

function hideToast(toast) {
  toast.classList.remove("show");
  setTimeout(() => {
    if (toast.parentNode) {
      document.body.removeChild(toast);
    }
  }, 400);
}

// ========================
// COPY PREVENTION (Toast)
// ========================

document.addEventListener("copy", function (e) {
  e.preventDefault();
  showToast("Copying content is disabled!", "🚫");
});

// ========================
// RIGHT CLICK PREVENTION
// ========================

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  showToast("Right-click is disabled!", "⚠️");
});
