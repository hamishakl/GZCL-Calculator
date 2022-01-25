const formSubmit = (e) => {
  e.preventDefault;
  let reps = document.getElementById("reps").value;
  let sets = document.getElementById("sets").value;

    let reps2ndTier = ((reps * sets)*2) / sets
    let sets2ndTier = sets
    let reps3rdTier = ((reps * sets)*3) / sets
    let sets3rdTier = sets

    document.getElementById('reps-2tier').innerHTML = `Reps for 2nd movement = 5`
    document.getElementById('sets-2tier').innerHTML = `Sets for 2nd movement = ${calcSets2ndMovement(reps, sets, 2)}`
    document.getElementById('reps-3tier').innerHTML = `Reps for 3rd movement = ${calcReps(reps, 3)}`
    document.getElementById('sets-3tier').innerHTML = `Sets for 3rd movement = ${calcSets(reps, sets, 3)}`
    
    document.getElementById('volume-2tier').innerHTML = `Total vol = ${vol(calcSets2ndMovement(reps, sets, 2), 5)}` 
    document.getElementById('volume-3tier').innerHTML = `Total vol = ${vol(calcReps(reps, 3), calcSets(reps, sets, 3))}` 
  return false;
};
const vol = (a, b) => {
    return a*b
}

const calcSets2ndMovement = (a, b, c) => {
    let total = (vol(a, b) * c)

    return Math.round(total / 5)
}

const calcReps = (a, b) => {
    return a*b
}

const calcSets = (a, b, c) => {
    let total = (vol(a,b)*c)
    let reps =  a * c
    return total / reps
}
