const formSubmit = (e) => {
  e.preventDefault;
  let reps = document.getElementById("reps").value;
  let sets = document.getElementById("sets").value;

    let reps2ndTier = ((reps * sets)*2) / sets
    let sets2ndTier = sets
    let reps3rdTier = ((reps * sets)*3) / sets
    let sets3rdTier = sets

    document.getElementById('reps-2tier').innerHTML = `Reps for 2nd movement = ${reps2ndTier}`
    document.getElementById('sets-2tier').innerHTML = `Sets for 2nd movement = ${sets2ndTier}`
    document.getElementById('reps-3tier').innerHTML = `Reps for 3rd movement = ${reps3rdTier}`
    document.getElementById('sets-3tier').innerHTML = `Sets for 3rd movement = ${sets3rdTier}`

  return false;
};
