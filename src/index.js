function displayQuote(response) {
    new Typewriter("#quote", {
      strings: response.data.answer,
      autoStart: true,
      delay: 1,
      cursor: "",
    });
  }
  
  function generateQuote(event) {
    event.preventDefault();
  
    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "2046c535afeb092fo82f1d306d8a2b2t";
    let context = "You are a quote expert and love to write short, inspiring quotes. Your mission is to generate a quote based on user input and format it appropriately. Sign the quote with <br /> Shukh's AI inside a <strong> element.";
    let prompt = `User instructions: Generate an inspiring quote about ${instructionsInput.value}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  
    let quoteElement = document.querySelector("#quote");
    quoteElement.classList.remove("hidden");
    quoteElement.innerHTML = `<div class="generating">⏳ Generating a quote about ${instructionsInput.value}</div>`;
  
    axios.get(apiURL).then(displayQuote);
  }
  
  let quoteFormElement = document.querySelector("#quote-generator-form");
  quoteFormElement.addEventListener("submit", generateQuote);