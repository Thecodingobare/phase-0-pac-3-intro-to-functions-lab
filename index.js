function shout(string) {
  return string.toUpperCase();
}
console.log(shout("hello"));

function whisper(string) {
  return string.toLowerCase();
}

console.log(whisper("HELLo"));

function logShout(string) {
  console.log(string.toUpperCase());
}
logShout("hellO");

function logWhisper(string) {
  console.log(string.toLowerCase());
}

logWhisper("hElLo");

function sayHiToHeadphonedRoommate(string) {
  if (string.toLowerCase() === string) {
    return "I can't hear you!";
  } if (string.toUpperCase() === string) {
    return "YES INDEED!";
  } if (string == "Let's have dinner together!") {
    return "I would love to!";
  }
}
