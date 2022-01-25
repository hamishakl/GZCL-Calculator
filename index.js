const formSubmit = (e) => {
  e.preventDefault;
  let reps = document.getElementById("reps-slider").value;
  let sets = document.getElementById("sets-slider").value;
  let weight = document.getElementById("weight").value;

  console.log(reps);

  document.getElementById("reps-2tier").innerHTML = `5`;
  document.getElementById("sets-2tier").innerHTML = `${calcSets2ndMovement(
    reps,
    sets,
    2
  )}`;
  document.getElementById("reps-3tier").innerHTML = `${calcReps(reps, 3)}`;
  document.getElementById("sets-3tier").innerHTML = `${calcSets(
    reps,
    sets,
    3
  )}`;

  document.getElementById("weight-2tier").innerHTML = `${calcWeight(
    weight,
    reps, 
    sets
  )}kg`;

  document.getElementById("weight-3tier").innerHTML = `${
    Math.round((weight * 0.6) / 2.5, 1) * 2.5
  }kg`;
  document.getElementById("table").style.opacity = "1";
  return false;
};

const vol = (a, b) => {
  return a * b;
};

const calcSets2ndMovement = (a, b, c) => {
  let total = vol(a, b) * c;
  let d =  Math.round(total / 5);
  if (d == 0) {
    return 1
  } else {
    return d
  }
};

const calcReps = (a, b) => {
  return a * b;
};

const calcSets = (a, b, c) => {
  let total = vol(a, b) * c;
  let reps = a * c;
  return total / reps;
};

const calcWeight = (a, b, c) => {
  if (b == 1) {
    console.log(b);
    return Math.round((a * 0.7) / 2.5, 1) * 2.5;
  } else if (b == 2) {
    console.log(b);
    return Math.round((a * 0.725) / 2.5, 1) * 2.5;
  } else if (b == 3) {
    console.log(b);
    return Math.round((a * 0.75) / 2.5, 1) * 2.5;
  } else if (b >= 4) {
    console.log(b);
    return Math.round((a * 0.8) / 2.5, 1) * 2.5;
  }
};

console.log(calcWeight(122.5, 5));

const updateRange = (a, b) => {
  if (a === "reps-slider") {
    document.getElementById("reps-text").innerHTML = b;
  }
  if (a === "sets-slider") {
    document.getElementById("sets-text").innerHTML = b;
  }
};
