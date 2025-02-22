const lengthTab = document.getElementById("length-tab");
const weightTab = document.getElementById("weight-tab");
const temperatureTab = document.getElementById("temperature-tab");

function showForm(formId) {
  const lengthElement = document.getElementById("form-section-length");
  const weightElement = document.getElementById("form-section-weight");
  const temperatureElement = document.getElementById(
    "form-section-temperature"
  );

  if (lengthElement) {
    lengthElement.classList.remove("active");
  }
  if (weightElement) {
    weightElement.classList.remove("active");
  }
  if (temperatureElement) {
    temperatureElement.classList.remove("active");
  }

  const elementToShow = document.getElementById(formId);
  if (elementToShow) {
    elementToShow.classList.add("active");
  }
}

if (lengthTab) {
  lengthTab.onclick = () => {
    showForm("form-section-length");
  };
}

if (weightTab) {
  weightTab.onclick = () => {
    showForm("form-section-weight");
  };
}

if (temperatureTab) {
  temperatureTab.onclick = () => {
    showForm("form-section-temperature");
  };
}

showForm("form-section-length");

const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
  themeToggle.onclick = () => {
    document.body.classList.toggle("dark-mode");
  };
}

const InputFromLength = document.getElementById("input-unit-from-l");
const InputToLength = document.getElementById("input-unit-to-l");
const InputFromWeight = document.getElementById("input-unit-from-w");
const InputToWeight = document.getElementById("input-unit-to-w");
const InputFromTemperature = document.getElementById("input-unit-from-t");
const InputToTemperature = document.getElementById("input-unit-to-t");

const showBtn = document.getElementById("show");

showBtn.onclick = () => {
  const InputFromLength = document.getElementById("input-unit-from-l");
  const InputLengthValue = InputFromLength.value.toLowerCase();
  console.log(InputLengthValue);
};

function convertLength(value, fromUnit, toUnit) {
  const factors = { m: 1, km: 1000, cm: 0.01, mm: 0.001 };
  if (!factors[fromUnit] || !factors[toUnit]) {
    return NaN;
  }

  return (value * factors[fromUnit]) / factors[toUnit];
}

function convertWeight(value, fromUnit, toUnit) {
  const factors = { kg: 1, g: 0.001, lb: 0.453592, oz: 0.0283495 };
  if (!factors[fromUnit] || !factors[toUnit]) {
    return NaN;
  }
  return (value * factors[fromUnit]) / factors[toUnit];
}

function convertTemperature(value, fromUnit, toUnit) {
  fromUnit = fromUnit.toLowerCase();
  toUnit = toUnit.toLowerCase();
  let result = NaN;
  if (fromUnit === toUnit) {
    result = value;
  } else if (fromUnit === "c" && toUnit === "f") {
    result = (value * 9) / 5 + 32;
  } else if (fromUnit === "c" && toUnit === "k") {
    result = value + 273.15;
  } else if (fromUnit === "f" && toUnit === "c") {
    result = ((value - 32) * 5) / 9;
  } else if (fromUnit === "f" && toUnit === "k") {
    result = ((value - 32) * 5) / 9 + 273.15;
  } else if (fromUnit === "k" && toUnit === "c") {
    result = value - 273.15;
  } else if (fromUnit === "k" && toUnit === "f") {
    result = ((value - 273.15) * 9) / 5 + 32;
  }
  return result;
}

const lengthForm = document.querySelector("#form-section-length form");
if (lengthForm) {
  lengthForm.onsubmit = (e) => {
    e.preventDefault();
    const val = parseFloat(document.getElementById("input-value-l").value);
    const fromUnit = document
      .getElementById("input-unit-from-l")
      .value.toLowerCase();
    const toUnit = document
      .getElementById("input-unit-to-l")
      .value.toLowerCase();
    const result = convertLength(val, fromUnit, toUnit);
    if (isNaN(result)) {
      alert("Invalid length units. Use m, km, cm, or mm.");
    } else {
      alert(`Result: ${result}`);
    }
  };
}

const weightForm = document.querySelector("#form-section-weight form");
if (weightForm) {
  weightForm.onsubmit = (e) => {
    e.preventDefault();
    const val = parseFloat(document.getElementById("input-value-w").value);
    const fromUnit = document
      .getElementById("input-unit-from-w")
      .value.toLowerCase();
    const toUnit = document
      .getElementById("input-unit-to-w")
      .value.toLowerCase();
    const result = convertWeight(val, fromUnit, toUnit);
    if (isNaN(result)) {
      alert("Invalid weight units. Use kg, g, lb, or oz.");
    } else {
      alert(`Result: ${result}`);
    }
  };
}

const temperatureForm = document.querySelector(
  "#form-section-temperature form"
);
if (temperatureForm) {
  temperatureForm.onsubmit = (e) => {
    e.preventDefault();
    const val = parseFloat(document.getElementById("input-value-t").value);
    const fromUnit = document.getElementById("input-unit-from-t").value;
    const toUnit = document.getElementById("input-unit-to-t").value;
    const result = convertTemperature(val, fromUnit, toUnit);
    if (isNaN(result)) {
      alert("Invalid temperature units. Use C, F, or K.");
    } else {
      alert(`Result: ${result}`);
    }
  };
}
