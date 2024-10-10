// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
const synth = window.speechSynthesis;

// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
let textToSpeak = '';

// Create an array of nouns
const nouns = ["tiger", "dog", "cheetah", "fish", "elephant"];

// Create an array of verbs
const verbs = ["runs", "flies", "eats", "reads", "writes"];

// Create an array of adjectives
const adjectives = ["brave", "curious", "energetic", "peaceful", "thoughtful"];

// Create an array of nouns
const nouns2 = ["car", "computer", "phone", "pen", "guitar"];

// Create an array of places
const places = ["museum", "restaurant", "library", "garden", "airport"];

// Get the buttons
const nounButton = document.getElementById("noun-btn");
const verbButton = document.getElementById("verb-btn");
const adjectiveButton = document.getElementById("adjective-btn");
const noun2Button = document.getElementById("noun2-btn");
const placeButton = document.getElementById("place-btn");
const speakButton = document.getElementById("speak-btn");

/* Functions
-------------------------------------------------- */
function speakNow(string) {
  // Create a new speech object, attaching the string of text to speak
  const utterThis = new SpeechSynthesisUtterance(string);
  // Actually speak the text
  synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the noun button
nounButton.onclick = function() {
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  textToSpeak += `The ${randomNoun} `;
  console.log(textToSpeak);
};

// Onclick handler for the verb button
verbButton.onclick = function() {
  const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
  textToSpeak += `${randomVerb} `;
  console.log(textToSpeak);
};

// Onclick handler for the adjective button
adjectiveButton.onclick = function() {
  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  textToSpeak += `the ${randomAdjective} `;
  console.log(textToSpeak);
};

// Onclick handler for the noun2 button
noun2Button.onclick = function() {
  const randomNoun2 = nouns2[Math.floor(Math.random() * nouns2.length)];
  textToSpeak += `${randomNoun2} `;
  console.log(textToSpeak);
};

// Onclick handler for the place button
placeButton.onclick = function() {
  const randomPlace = places[Math.floor(Math.random() * places.length)];
  textToSpeak += `at the ${randomPlace}.`;
  console.log(textToSpeak);
};

// Onclick handler for the speak button
speakButton.onclick = function() {
  speakNow(textToSpeak);
console.log(textToSpeak);
};