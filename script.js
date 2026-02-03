function showMessage(response) {
  if (response === "No") {
    const noButton = document.getElementById("no-button");
    const container = document.querySelector(".container");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    noButton.style.position = "absolute";

    document.getElementsByClassName("image")[0].src = "images/IMG_9604.jpg";

    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    document.getElementById("question").textContent =
      "Alles ok? Die 'nee' daar was gewoon voor de decoratie hoor, druk maar op ja mevrouw niet eens proberen, no need to say no";
    document.getElementById("name").style.display = "none";
  }

  if (response === "Yes") {

    document.getElementById("name").remove();
    document.getElementById("no-button").remove();

    const yesMessage = document.getElementById("question");
    yesMessage.textContent = "Thank you for being my valentine baby, i love you with my whole heart. Thank you for stayign consistent in my life and spending this day with me again (only this time as more than friends iykyk)";
    yesMessage.style.display = "block";
    yesMessage.style.fontStyle = "normal";
    document.getElementsByClassName("image")[0].src = "images/IMG_7564.jpeg";

    // Remove yes button
    document.getElementById("yesButton").remove();
  }
}
