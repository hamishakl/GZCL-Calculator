const formSubmit = (e) => {
  e.preventDefault;
  let reps = document.getElementById("reps").value;
  let sets = document.getElementById("sets").value;
  let weight = document.getElementById("weight").value;

  document.getElementById("reps-2tier").innerHTML = `5`;
  document.getElementById(
    "sets-2tier"
  ).innerHTML = `${calcSets2ndMovement(reps, sets, 2)}`;
  document.getElementById(
    "reps-3tier"
  ).innerHTML = `${calcReps(reps, 3)}`;
  document.getElementById(
    "sets-3tier"
  ).innerHTML = `${calcSets(reps, sets, 3)}`;

  document.getElementById(
    "weight-2tier"
  ).innerHTML = `${calcWeight(weight)}kg`;

  document.getElementById("weight-3tier").innerHTML = `${
    weight * 0.65
  }kg`;
  document.getElementById("table").style.opacity = '1'
  return false;
};

const vol = (a, b) => {
  return a * b;
};

const calcSets2ndMovement = (a, b, c) => {
  let total = vol(a, b) * c;

  return Math.round(total / 5);
};

const calcReps = (a, b) => {
  return a * b;
};

const calcSets = (a, b, c) => {
  let total = vol(a, b) * c;
  let reps = a * c;
  return total / reps;
};

const calcWeight = (a) => {
  if (a === 1) {
    return a * 0.7;
  } else if (a === 2) {
    return a * 0.75;
  } else if (a === 3) {
    return a * 0.8;
  } else if (a >= 4) {
    return a * 0.85;
  }
};
