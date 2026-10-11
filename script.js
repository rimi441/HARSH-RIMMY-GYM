function joinGym() {
  let welcome = document.getElementById("welcome");
  if (welcome) {
    welcome.style.display = "block";
  } else {
    alert("Welcome section HTML mein nahi mila!");
  }
}