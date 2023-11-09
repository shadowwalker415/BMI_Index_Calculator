import ImperialView from "./imperialview";
import MetricView from "./metricview";

const controlImperialView = (event) => {
  event.target.id === "imperial" && ImperialView.render();
};

const controlMetricView = (event) => {
  event.target.id === "metric" && MetricView.render();
};

ImperialView.handleCheck(controlImperialView);
MetricView.handleCheck(controlMetricView);
