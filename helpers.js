/**
 *
 * @param {Object} param0 A JavaScript Object
 * @returns Number
 */

export const calcMetric = function ({ weight, height }) {
  if (weight === 0 || height === 0)
    throw new Error("Neither height nor weight can be 0");
  if (isNaN(weight) || isNaN(height))
    throw new Error("Height & weight must both be numbers and not letters");
  if (weight < 0 || height < 0)
    throw new Error("Height or weight cannot be negative numbers");
  if (weight > 200 || height > 300)
    throw new Error("Neither height nor weight can be extreme numbers");
  return weight / (height / 100) ** 2;
};

/**
 *
 * @param {Object} param0 A JavaScript Object
 * @returns  Number
 */
export const calcImperial = function ({ foot, inch, stone, pounds }) {
  if (isNaN(foot) || isNaN(inch) || isNaN(stone) || isNaN(pounds))
    throw new Error("All inputs must be numbers and not letters");
  if (foot <= 0 || stone <= 0 || pounds <= 0)
    throw new Error("Neither foot, stone nor pounds can be 0 or less than 0 ");
  if (inch < 0) throw new Error("Inch cannot be less than 0");
  if (pounds > 1000 || stone > 1000 || foot > 100 || inch > 11)
    throw new Error("Neither input can be extreme numbers");
  const weightInPounds = stone * 14 + pounds;
  const heightInInches = foot * 12 + inch;
  if (weightInPounds === 0 || (weightInPounds < 50 && heightInInches > 80))
    return;
  return (weightInPounds / heightInInches ** 2) * 703;
};

/**
 *
 * @param {Object}param0 A JavaScript Object
 * @returns Number
 */

/**
 *
 * @param {Object} param0 A JavaScript Object
 * @returns Number
 */
export const getHeightInInches = function ({ foot, inch }) {
  if (foot === NaN || inch === NaN) return;
  if (foot <= 0 || inch < 0) return;
  if (foot > 100 || inch > 11) return;
  return foot * 12 + inch;
};

/**
 *
 * @param {Object} param0 A JavaScript Object
 * @returns A JavaScript Object with properties minLimitWeight,  maxLimitWeight and isMetric
 */
export const getMetricIdealWeight = function ({ height }) {
  if (height === 0 || height > 300 || height < 0 || height === NaN) return;
  const minWeight = 18.5 * (height / 100) ** 2;
  const maxWeight = 24.9 * (height / 100) ** 2;
  const metricIdealWeight = {
    minLimitWeight: minWeight.toFixed(1),
    maxLimitWeight: maxWeight.toFixed(1),
    isMetric: true,
  };
  return metricIdealWeight;
};

/**
 *
 * @param {Number} height
 * @returns A JavaScript Object with properties minLimitWeight, maxLimitWeight and isImperial
 */
export const getImperialIdealWeight = function (height) {
  if (height <= 0 || height === NaN) return;
  const minWeight = (18.5 * height ** 2) / 703;
  const maxWeight = (24.9 * height ** 2) / 703;
  const imperialIdealWeight = {
    minLimitWeight: minWeight.toFixed(1),
    maxLimitWeight: maxWeight.toFixed(1),
    isImperial: true,
  };
  return imperialIdealWeight;
};
