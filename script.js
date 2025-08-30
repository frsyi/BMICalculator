document.getElementById("bmiForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);

  const bmi = weight / (height / 100) ** 2;
  let category = "";

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal Weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Overweight";
  } else {
    category = "Obesity";
  }

  document.getElementById("result").innerText = bmi.toFixed(1);
  document.getElementById("category").innerText = category;
  document.getElementById("resultBox").style.display = "block";
});
