const handleCalculateButtonClick = () => {
  clearNotifications("message-box");

  const weightValue = parseFloat(document.getElementById("weight").value);
  const heightValue = parseFloat(document.getElementById("height").value);

  if (requiredValidation(weightValue, heightValue)) {
    const imcValue = (weightValue / Math.pow(heightValue / 100, 2)).toFixed(1);

    const range = verifyImcRange(imcValue);

    createNotifyMessage(`${imcValue} | ${range}`, "message-box");
  }
};

const verifyImcRange = (value) => {
  if (value < 18.5) return "Abaixo do peso";
  else if (value >= 18.5 && value < 24.9) return "Peso normal";
  else if (value >= 25 && value < 29.9) return "Sobrepeso";
  else if (value >= 30 && value < 34.9) return "Obsidade grau 1";
  else if (value >= 35 && value < 39.9) return "Obsidade grau 2";
  else return "Obsidade grau 3";
};

const clearNotifications = (elementName) => {
  const element = document.getElementById(elementName);
  element.replaceChildren();
  element.classList.value = "message";
};

const createNotifyMessage = (message, elementName, styleType = "success") => {
  const messageBoxElement = document.getElementById(elementName);
  const textElement = document.createElement("p");
  const _message = document.createTextNode(message);

  textElement.appendChild(_message);
  messageBoxElement.appendChild(textElement);

  messageBoxElement.classList.add(styleType);
};

const requiredValidation = (weight, height) => {
  if (!weight) {
    createNotifyMessage(
      "É necessário informar um valor para o seu peso",
      "message-box",
      "error"
    );

    return false;
  }
  if (!height) {
    createNotifyMessage(
      "É necessário informar um valor para a sua altura",
      "message-box",
      "error"
    );
    return false;
  }

  return true;
};

const calculateButton = document.getElementById("calculate-button");
calculateButton.addEventListener("click", handleCalculateButtonClick);
