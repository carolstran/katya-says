import React from "react";
import WordArt from "react-wordart";

const katyaQuotes = [
  "Yekaterina Petrovna Zamolodchikova, but your dad just calls me Katya",
  "I love love. Every day of my life is Valentine's Day. When you're a pathological narcissist, you have to fall in love with yourself every day",
  "Just be yourself, and if no one likes that, change",
  "I make loneliness work for me",
  "Shoot for the moon; if you miss, you will die in outer space, which is cool",
  "The key to a swollen vagina is courage",
  "I don't know anything about science other than it's really good for you",
  "Count on me to shine where it doesn't count",
  "I'm just your average, run-of-the-mill Russian bisexual transvestite hooker",
  "I am not emotionally or psychologically equipped to deal with a lot of situations that happen in life",
  "What's the best part about being married to a sociopath? The constant threat of danger keeps you so thin",
  "I feel confident, I feel sexy, I feel stupid",
  "You know you want this crocheted pussy",
  "When do we get to blow them? I can't say that?",
  "You can put a fucking man on the moon, but I can't get laid?",
  "I went into the women's restroom by accident earlier today and as I was peeing I quietly whispered I'm sorry and then I left. It was fine",
  "Can you even fuck a pokeman?",
  "I want a strong capable man who was voted in high school most likely to replace his tooth enamel with salt water taffy. I want that man now",
  "Sometimes I need to drop everything and check to see if I have shit myself",
  "Have you ever startled yourself awake in the middle of the night knowing your name was Kathleen and you needed to fight for what was right?",
  "Have you ever woken up in the morning with amnesia but then looked in the mirror and screamed and shouted oh yes god this will do just fine"
];

const wordArtStyles = [
  "rainbow",
  "blues",
  "superhero",
  "radial",
  "tilt",
  "purple",
  "horizon",
  "italicOutline",
  "slate"
];

const getRandomThings = arrayOfThings => {
  return arrayOfThings[Math.floor(Math.random() * arrayOfThings.length)];
};

const QuoteArt = () => {
  return (
    <WordArt
      text={getRandomThings(katyaQuotes)}
      theme={getRandomThings(wordArtStyles)}
      fontSize={50}
    />
  );
};

export default QuoteArt;
