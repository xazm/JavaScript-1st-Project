import { sort, search, newsList } from "./main.js";

// //Example testing for search function
// test("Search function testing", () => {
//   expect(search(newsList)).toBe("I am a cool web developer");
// });

//const newsList = require("./main")

test("check if it is contain news" , () => {
  expect(newsList[0]).toBe("What films should an aspiring journalist watch?");
});


test ("Search Function testing " , () => {
  expect(search("films")).toContain("What films should an aspiring journalist watch?");
});


test (" Testing sort function", () => {
  expect(sort()).toContain("Marie Colvin shined a light on war-torn corners of the world", 
  "What books should an aspiring journalist read?", 
  "Decoder: Armenia in a bind as Ukraine war resets global order", 
  "'Nightmare' TV show 'Euphoria — health threat or high art?", 
  "Media glare can enrich tennis pros yet imperil mental health", 
  "Decoder: Mining asteroids for minerals can help spare Earth", 
  "Buried underpants and tea bags help scientists evaluate soil", 
  "What films should an aspiring journalist watch?");
});