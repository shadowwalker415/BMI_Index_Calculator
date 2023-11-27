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

const init = function () {
  window.addEventListener("load", function () {
    metricview.render();
  });
};

const controlMetricView = function (event) {
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

const controlImperialView = function (event) {
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

const controlMetricSubmit = function (event) {
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
    const bmiResult = calcMetric(metricFormData).toFixed(1);
    const idealMetricWeight = getMetricIdealWeight(metricFormData);
    resultview.clearContent();
    isNaN(metricFormData.height) || isNaN(metricFormData.weight)
      ? resultview.renderError()
      : resultview.render(bmiResult, idealMetricWeight);
  } else {
    return;
  }
};

const controlImperialSubmit = function (event) {
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
    const bmiResult = calcImperial(imperialFormData).toFixed(1);
    const height = getHeightInInches(imperialFormData);
    const idealImperialWeight = getImperialIdealWeight(height);
    console.log(imperialFormData);
    resultview.clearContent();
    isNaN(imperialFormData.foot) ||
    isNaN(imperialFormData.inch) ||
    isNaN(imperialFormData.stone) ||
    isNaN(imperialFormData.pounds)
      ? resultview.renderError()
      : resultview.render(bmiResult, idealImperialWeight);
  } else {
    return;
  }
};

init();
metricview.handleCheck(controlMetricView);
imperialview.handleCheck(controlImperialView);
metricview.handleSubmit(controlMetricSubmit);
imperialview.handleSubmit(controlImperialSubmit);
