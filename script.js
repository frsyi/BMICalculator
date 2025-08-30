function hitungBMI(weight, height) {
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

  return {
    bmi: bmi.toFixed(2),
    category: category,
  };
}

console.log(hitungBMI(50, 160));
