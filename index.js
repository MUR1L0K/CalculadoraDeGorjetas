document.getElementById("button").addEventListener("click", (ev) => {
  ev.preventDefault();
  let num = document.getElementById("bill").value;
  let people = document.getElementById("people").value;
  let services = document.getElementById("service");
  let selectedService = services.value;
  let res = document.getElementById("res");
  let tip = 0;

  switch (selectedService) {
    case "amazing":
      tip = (num * 0.3) / people;
      break;
    case "good":
      tip = (num * 0.2) / people;
      break;
    case "regular":
      tip = (num * 0.15) / people;
      break;
    case "bad":
      tip = (num * 0.1) / people;
      break;
    case "awful":
      tip = (num * 0.05) / people;
      break;
    default:
      alert("ERROR!");
  }

  res.innerText = `O valor da gorjeta ficou ${tip.toFixed(
    2
  )} para cada pessoa (${people})`;
});
