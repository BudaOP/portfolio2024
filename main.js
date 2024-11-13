window.onload = function () {
  var splineElement = document.querySelectorAll("spline-viewer");

  for (let pas = 0; pas < splineElement.length; pas++) {
    var shadowRoot = splineElement[pas].shadowRoot;
    shadowRoot.querySelector("#logo").remove();
  }
};

/*=============== SHOW MENU ===============*/

// random
// document.addEventListener("DOMContentLoaded", () => {
//   const canvas = document.querySelector("canvas");
//   const ctx = canvas.getContext("2d");

//   let mouseMoved = false;

//   const pointer = {
//     x: 0.5 * window.innerWidth,
//     y: 0.5 * window.innerHeight,
//   };

//   const params = {
//     pointsNumber: 40,
//     widthFactor: 10,
//     mouseThreshold: 0.5,
//     spring: 0.25,
//     friction: 0.5,
//   };

//   const trail = new Array(params.pointsNumber);
//   for (let i = 0; i < params.pointsNumber; i++) {
//     trail[i] = {
//       x: pointer.x,
//       y: pointer.y,
//       dx: 0,
//       dy: 0,
//     };
//   }

//   window.addEventListener("click", (e) => {
//     updateMousePosition(e.pageX, e.pageY);
//   });

//   window.addEventListener("mousemove", (e) => {
//     mouseMoved = true;
//     updateMousePosition(e.pageX, e.pageY);
//   });

//   window.addEventListener("touchmove", (e) => {
//     mouseMoved = true;
//     updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
//   });

//   function updateMousePosition(eX, eY) {
//     pointer.x = eX;
//     pointer.y = eY;
//   }

//   function setupCanvas() {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//   }

//   function update(t) {
//     if (!mouseMoved) {
//       pointer.x =
//         (0.5 + 0.3 * Math.cos(0.002 * t) + Math.sin(0.005 * t)) *
//         window.innerWidth;
//       pointer.y =
//         (0.5 + 0.2 * Math.cos(0.005 * t) + 0.1 * Math.cos(0.01 * t)) *
//         window.innerHeight;
//     }

//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     trail.forEach((p, pIdx) => {
//       const prev = pIdx === 0 ? pointer : trail[pIdx - 1];
//       const spring = pIdx === 0 ? 0.4 * params.spring : params.spring;
//       p.dx += (prev.x - p.x) * spring;
//       p.dy += (prev.y - p.y) * spring;
//       p.dx *= params.friction;
//       p.dy *= params.friction;
//       p.x += p.dx;
//       p.y += p.dy;
//     });

//     var gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
//     gradient.addColorStop(0, "rgba(160, 93, 134, 1)");
//     gradient.addColorStop(1, "rgba(57, 34, 115, 1)");

//     ctx.strokeStyle = gradient;
//     ctx.lineCap = "round";
//     ctx.beginPath();
//     ctx.moveTo(trail[0].x, trail[0].y);

//     for (let i = 1; i < trail.length - 1; i++) {
//       const xc = 0.5 * (trail[i].x + trail[i + 1].x);
//       const yc = 0.5 * (trail[i].y + trail[i + 1].y);
//       ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
//       ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
//       ctx.stroke();
//     }
//     ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
//     ctx.stroke();

//     window.requestAnimationFrame(update);
//   }

//   setupCanvas();
//   update(0);
//   window.addEventListener("resize", setupCanvas);
// });

// 2 way
// document.addEventListener("DOMContentLoaded", () => {
//   const canvas = document.querySelector("canvas");
//   const ctx = canvas.getContext("2d");

//   const pointer = {
//     x: 0.2 * window.innerWidth,
//     y: 0.2 * window.innerHeight,
//   };

//   const params = {
//     pointsNumber: 40,
//     widthFactor: 15, // Increase the line width for a larger effect
//     spring: 0.25,
//     friction: 0.5,
//   };

//   const trail = new Array(params.pointsNumber);
//   for (let i = 0; i < params.pointsNumber; i++) {
//     trail[i] = {
//       x: pointer.x,
//       y: pointer.y,
//       dx: 0,
//       dy: 0,
//     };
//   }

//   function setupCanvas() {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//   }

//   function update(t) {
//     // Define the center of movement and increase movement range for larger effect
//     const centerX = 0.5 * window.innerWidth;
//     const centerY = 0.5 * window.innerHeight;
//     const movementRangeX = 0.3 * window.innerWidth; // Increase to 30% of width
//     const movementRangeY = 0.3 * window.innerHeight; // Increase to 30% of height

//     // Main movement pattern
//     pointer.x =
//       centerX + movementRangeX * (Math.cos(0.0001 * t) + Math.sin(0.00015 * t));
//     pointer.y =
//       centerY + movementRangeY * (Math.sin(0.0001 * t) + Math.cos(0.0002 * t));

//     // Random "jerk" effect by occasionally adding a small burst to pointer.x and pointer.y
//     if (Math.random() < 0.01) {
//       // Random chance for a jerk
//       pointer.x += (Math.random() - 0.5) * 50; // Small burst in x-direction
//       pointer.y += (Math.random() - 0.5) * 50; // Small burst in y-direction
//     }

//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     trail.forEach((p, pIdx) => {
//       const prev = pIdx === 0 ? pointer : trail[pIdx - 1];
//       const spring = pIdx === 0 ? 0.4 * params.spring : params.spring;
//       p.dx += (prev.x - p.x) * spring;
//       p.dy += (prev.y - p.y) * spring;
//       p.dx *= params.friction;
//       p.dy *= params.friction;
//       p.x += p.dx;
//       p.y += p.dy;
//     });

//     // Create a gradient with multiple colors
//     var gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
//     gradient.addColorStop(0, "rgba(160, 93, 134, 1)");
//     gradient.addColorStop(0.25, "rgba(93, 160, 134, 1)");
//     gradient.addColorStop(0.5, "rgba(57, 34, 115, 1)");
//     gradient.addColorStop(0.75, "rgba(134, 93, 160, 1)");
//     gradient.addColorStop(1, "rgba(115, 57, 34, 1)");

//     ctx.strokeStyle = gradient;
//     ctx.lineCap = "round";
//     ctx.beginPath();
//     ctx.moveTo(trail[0].x, trail[0].y);

//     for (let i = 1; i < trail.length - 1; i++) {
//       const xc = 0.5 * (trail[i].x + trail[i + 1].x);
//       const yc = 0.5 * (trail[i].y + trail[i + 1].y);
//       ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
//       ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
//       ctx.stroke();
//     }
//     ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
//     ctx.stroke();

//     window.requestAnimationFrame(update);
//   }

//   setupCanvas();
//   update(0);
//   window.addEventListener("resize", setupCanvas);
// });

// way 3

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

    // Apply even more noticeable movements for each splash using sine and cosine
    const topLeftX = 0.1 * canvas.width + 30 * Math.sin(time * 0.0012);
    const topLeftY = 0.1 * canvas.height + 30 * Math.cos(time * 0.0013);

    const topRightX = 0.85 * canvas.width + 25 * Math.cos(time * 0.0011);
    const topRightY = 0.1 * canvas.height + 25 * Math.sin(time * 0.0014);

    const bottomLeftX = 0.1 * canvas.width + 35 * Math.sin(time * 0.0014);
    const bottomLeftY = 0.9 * canvas.height + 35 * Math.cos(time * 0.0012);

    const bottomRightX = 0.7 * canvas.width + 30 * Math.cos(time * 0.0013);
    const bottomRightY = 0.85 * canvas.height + 30 * Math.sin(time * 0.0012);

    // Draw each color splash with larger size and more noticeable movement
    drawColorSplash(
      topLeftX,
      topLeftY,
      500,
      300,
      "rgba(63, 94, 251, 0.5)",
      "rgba(252, 70, 107, 0)"
    ); // Top-left, much larger
    drawColorSplash(
      topRightX,
      topRightY,
      350,
      350,
      "rgba(131, 58, 180, 0.5)",
      "rgba(253, 29, 29, 0)"
    );
    drawColorSplash(
      bottomLeftX,
      bottomLeftY,
      400,
      400,
      "rgba(252, 176, 69, 0.5)",
      "rgba(252, 70, 107, 0)"
    );
    drawColorSplash(
      bottomRightX,
      bottomRightY,
      800,
      400,
      "rgba(160, 93, 134, 0.5)",
      "rgba(57, 34, 115, 0)"
    );

    window.requestAnimationFrame(update);
  }

  setupCanvas();
  update(0);
  window.addEventListener("resize", setupCanvas);
});
