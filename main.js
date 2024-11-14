window.onload = function () {
  var splineElement = document.querySelectorAll("spline-viewer");

  for (let pas = 0; pas < splineElement.length; pas++) {
    var shadowRoot = splineElement[pas].shadowRoot;
    shadowRoot.querySelector("#logo").remove();
  }
};

// scroll down
function scrollToProjects() {
  const projectsSection = document.getElementById("projects");
  projectsSection.scrollIntoView({ behavior: "smooth" });
}

/*=============== SHOW MENU ===============*/
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle"); // Hamburger icon
  const navList = document.getElementById("nav-list"); // Navigation list

  // Toggle the 'active' class to show/hide the menu
  navToggle.addEventListener("click", () => {
    navList.classList.toggle("active"); // Show or hide the nav list
    navToggle.classList.toggle("active"); // Optionally toggle active class on hamburger icon
  });
});

// CANVAS
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  function setupCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function drawColorSplash(x, y, width, height, colorStart, colorEnd) {
    const gradient = ctx.createRadialGradient(
      x,
      y,
      0,
      x,
      y,
      Math.max(width, height)
    );
    gradient.addColorStop(0, colorStart);
    gradient.addColorStop(1, colorEnd);

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.ellipse(x, y, width, height, 0, 0, 2 * Math.PI); // Draws an ellipse for stretched shapes
    ctx.fill();
  }

  function update(time) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Left-side splashes (remain the same)
    const topLeftX = 0.15 * canvas.width + 30 * Math.sin(time * 0.0012);
    const topLeftY = 0.1 * canvas.height + 30 * Math.cos(time * 0.0013);

    const bottomLeftX = 0.1 * canvas.width + 35 * Math.sin(time * 0.0014);
    const bottomLeftY = 0.9 * canvas.height + 35 * Math.cos(time * 0.0012);

    // Right-side splashes adjustments
    const topRightX = 0.95 * canvas.width + 25 * Math.cos(time * 0.0011);
    const topRightY = 0.2 * canvas.height + 25 * Math.sin(time * 0.0014);

    // Move bottom-right splash further left and make it smaller
    const bottomRightX = 0.65 * canvas.width + 30 * Math.cos(time * 0.0013); // Moved further left
    const bottomRightY = 0.8 * canvas.height + 30 * Math.sin(time * 0.0012);
    const bottomRightWidth = 400; // Smaller width
    const bottomRightHeight = 200; // Smaller height

    // Draw each color splash with adjusted positions and sizes
    drawColorSplash(
      topLeftX,
      topLeftY,
      400,
      300,
      "rgba(63, 94, 251, 0.5)",
      "rgba(252, 70, 107, 0)"
    ); // Top-left
    drawColorSplash(
      topRightX,
      topRightY,
      450,
      450,
      "rgba(131, 58, 180, 0.5)",
      "rgba(253, 29, 29, 0)"
    ); // Top-right
    drawColorSplash(
      bottomLeftX,
      bottomLeftY,
      400,
      400,
      "rgba(252, 176, 69, 0.5)",
      "rgba(252, 70, 107, 0)"
    ); // Bottom-left
    drawColorSplash(
      bottomRightX,
      bottomRightY,
      bottomRightWidth,
      bottomRightHeight,
      "rgba(160, 93, 134, 0.5)",
      "rgba(57, 34, 115, 0)"
    ); // Bottom-right, adjusted

    window.requestAnimationFrame(update);
  }

  setupCanvas();
  update(0);
  window.addEventListener("resize", setupCanvas);
});
