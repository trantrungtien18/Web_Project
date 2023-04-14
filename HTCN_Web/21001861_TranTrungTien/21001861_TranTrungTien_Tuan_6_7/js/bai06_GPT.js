unction appendValue(val) {
  document.getElementById("result").value += val;
}

function clearValue() {
  document.getElementById("result").value = "";
}

function calculate() {
  var expression = document.getElementById("result").value;
  var result = eval(expression);
  document.getElementById("result").value = result;
}
