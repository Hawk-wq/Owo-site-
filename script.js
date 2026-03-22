function calc() {
  let coins = document.getElementById("coins").value;
  let result = coins * 0.1;
  document.getElementById("result").innerText =
    "Safe Bet: " + result;
}
