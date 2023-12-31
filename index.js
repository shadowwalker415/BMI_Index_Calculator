import imperialview from "./imperialview";
import metricview from "./metricview";
import resultview from "./resultview";
import {
  calcMetric,
  calcImperial,
  getHeightInInches,
  getMetricIdealWeight,
  getImperialIdealWeight,
} from "./helpers";

const init = () => {
  window.addEventListener("load", function () {
    metricview.render();
  });
};

const controlMetricView = (event) => {
  const inputContainer =
    event.target.closest(".form__radio").nextElementSibling;
  if (
    event.target.id === "metric" &&
    inputContainer.firstElementChild.id === "imperial__form"
  ) {
    imperialview.clearContent();
    metricview.render();
  } else {
    return;
  }
};

const controlImperialView = (event) => {
  const inputContainer =
    event.target.closest(".form__radio").nextElementSibling;

  if (
    event.target.id === "imperial" &&
    inputContainer.firstElementChild.id === "metric__form"
  ) {
    metricview.clearContent();
    imperialview.render();
  } else {
    return;
  }
};

const getMetricBMI = (formData) => {
  try {
    const bmi = calcMetric(formData);
    return bmi;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getImperialBMI = (formData) => {
  try {
    const bmi = calcImperial(formData);
    return bmi;
  } catch (error) {
    throw new Error(error.message);
  }
};

const controlMetricSubmit = (event) => {
  try {
    if (
      event.target.tagName.toLowerCase() === "form" &&
      event.target.id === "metric__form"
    ) {
      event.preventDefault();
      const data = new FormData(event.target);
      let metricFormData = {};
      data.forEach((value, key) => {
        metricFormData[key] = +value;
      });
      event.target.children[0].firstElementChild.nextElementSibling.value = "";
      event.target.children[1].firstElementChild.nextElementSibling.value = "";
      resultview.clearContent();
      const idealMetricWeight = getMetricIdealWeight(metricFormData);
      const bmiResult = getMetricBMI(metricFormData).toFixed(1);
      resultview.render(bmiResult, idealMetricWeight);
    } else {
      return;
    }
  } catch (error) {
    resultview.renderError(error.message);
  }
};

const controlImperialSubmit = (event) => {
  try {
    if (
      event.target.tagName.toLowerCase() === "form" &&
      event.target.id === "imperial__form"
    ) {
      event.preventDefault();
      const data = new FormData(event.target);
      let imperialFormData = {};
      data.forEach((value, key) => {
        imperialFormData[key] = +value;
      });
      event.target.children[0].firstElementChild.nextElementSibling.value = "";
      event.target.children[1].firstElementChild.nextElementSibling.value = "";
      event.target.children[2].firstElementChild.nextElementSibling.value = "";
      event.target.children[3].firstElementChild.nextElementSibling.value = "";
      resultview.clearContent();
      const bmiResult = getImperialBMI(imperialFormData).toFixed(1);
      const height = getHeightInInches(imperialFormData);
      const idealImperialWeight = getImperialIdealWeight(height);
      // resultview.clearContent();
      resultview.render(bmiResult, idealImperialWeight);
    } else {
      return;
    }
  } catch (error) {
    resultview.renderError(error.message);
  }
};

init();
metricview.handleCheck(controlMetricView);
imperialview.handleCheck(controlImperialView);
metricview.handleSubmit(controlMetricSubmit);
imperialview.handleSubmit(controlImperialSubmit);
