/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let site = ["gigante", "bailarin"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let a = 0; a < adj.length; a++) {
      for (let ba = 0; ba < noun.length; ba++) {
        for (let lo = 0; lo < site.length; lo++) {
          console.log(pronoun[i] + adj[a] + noun[ba] + site[lo] + ".com");
        }
      }
    }
  }
};
