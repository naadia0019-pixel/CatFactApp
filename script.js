const button = document.getElementById("factBtn");
const factText = document.getElementById("fact");

button.addEventListener("click", async () => {

  factText.innerText = "Loading...";

  try {

    const response = await fetch(
      "https://catfact.ninja/fact"
    );

    const data = await response.json();

    factText.innerText = data.fact;

  } catch (error) {

    factText.innerText = "Failed to fetch fact";

    console.log(error);
  }
});