const findMessage = (percentage, love, crush) => {
  var msg = "";
  if (love.toUpperCase() == crush.toUpperCase()) {
    msg = `You're a perfect match... for yourself!`;
    return msg;
  } else if (percentage > 90) {
    msg = `You're a perfect match... for yourself!`;
  } else if (percentage > 70) {
    msg = `${love} and ${crush} sitting in the tree, K-I-S-S-I-N-G, First comes love, Then comes marriage, Then comes a baby in a baby carriage. Aww, you're a great match for each other.`;
  } else if (percentage > 50) {
    msg = `There's a slim chance this might work. It's gonna be tough, but whatever, YOLO.`;
  } else if (percentage > 30) {
    msg = `Although our sophisticated algorithms say that it won't work out, why not give it a shot? We're sure you can beat probability.`;
  } else if (percentage > 10) {
    msg = `If you're together already, we predict a breakup in 10, 9, 8... :(. If you're not together, run away and stay clear. Sorry, but this ain't gonna work.`;
  } else {
    msg = `OOPS! Don't worry someone better is waiting for you`;
  }
  return msg;
};

module.exports = { findMessage };
