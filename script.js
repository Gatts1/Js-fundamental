
//===================================================
// Js de suma

const $formSum = document.getElementById("sum");


function handleSumSubmit(event) {
  event.preventDefault();
  const $first = event.target.elements.first;
  const $second = event.target.elements.second;
  const $output = event.target.elements.result;
  $output.innerText = +$first.value + +$second.value;
}
$formSum.addEventListener("submit", handleSumSubmit);

//===================================================
// substract

const $formSubstract = document.getElementById("substract");

function handleSubstractSubmit(event){
  event.preventDefault();
  const $first = event.target.elements.first;
  const $second = event.target.elements.second;
  const $output = event.target.elements.result;
  $output.innerText = +$first.value - +$second.value;
}
$formSubstract.addEventListener("submit", handleSubstractSubmit);

// ===================================================
// Multiplication

const $formMultiplication = document.getElementById("multiplication");

function handleMultiplicationSubmit(event){
  event.preventDefault();
  const $first = event.target.elements.first;
  const $second = event.target.elements.second;
  const $output = event.target.elements.result;
  $output.innerText = +$first.value * +$second.value;
}
$formMultiplication.addEventListener("submit", handleMultiplicationSubmit);

//=======================================================
// Division

const $formDivision = document.getElementById("division");

function handleDivisionSubmit(event){
  event.preventDefault();
  const $first = event.target.elements.first;
  const $second = event.target.elements.second;
  const $output = event.target.elements.result;
  $output.innerText = +$first.value / +$second.value;
}

$formDivision.addEventListener("submit", handleDivisionSubmit);

//========================================================
// Power

const $formPower = document.getElementById("power");

function handlePowerSubmit(event){
  event.preventDefault();
  const $first = event.target.elements.first;
  const $second = event.target.elements.second;
  const $output = event.target.elements.result;
  $output.innerText = Math.pow(+$first.value, +$second.value);
}

$formPower.addEventListener("submit", handlePowerSubmit);

//=========================================================
//Square Root

const $formSquare = document.getElementById("square");

function handleSquareSubmit(event){
  event.preventDefault();
  const $first = event.target.elements.first;
  const $output = event.target.elements.result;
  $output.innerText = (+$first.value)** (1/2);
}

$formSquare.addEventListener("submit", handleSquareSubmit);



