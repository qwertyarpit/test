const blob = document.querySelector(".cursor");

window.onpointermove = (event) => {
  const { clientX, clientY } = event;

  blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
      //   bottom: `${clientY}px`
    },
    { duration: 3000, fill: "forwards" }
  );
};

window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  loader.className += " hidden"; // class "loader hidden"
});

// Loader count from 1 to 100
let count = 0;
let intervalId = setInterval(function () {
  count++;
  document.getElementById("loader-text").textContent = count;
  if (count === 100) {
    clearInterval(intervalId);
  }
}, 50); // Adjust this to change the speed of counting

// work
