// functions.js

const capitalizeTextFirstChar = (text) => {
  if (typeof text !== "string")
    throw new TypeError("parameter should be string");
  return text
    .split(" ")
    .map((word) => word[0]?.toUpperCase() + word.slice(1))
    .join(" ");
};

const createArray = (length) => {
  return Array.from(Array(length).keys());
};

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = { capitalizeTextFirstChar, createArray, random };
