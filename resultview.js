class ResultsView {
  #parentElement = document.querySelector(".result__box");

  /**
   *
   * @param {Number} bmiResult
   * @param {Object} idealWeight
   * @returns this
   */
  render(bmiResult, idealWeight) {
    const viewHTML = this.#getResultHTML(bmiResult, idealWeight);
    this.#parentElement.insertAdjacentHTML("beforeend", viewHTML);
    return this;
  }

  renderError(errorMessage) {
    const errorHTML = this.#getErrorHMTL(errorMessage);
    this.#parentElement.insertAdjacentHTML("beforeend", errorHTML);
    return this;
  }

  clearContent() {
    this.#parentElement.innerHTML = "";
    return this;
  }

  /**
   *
   * @param {Number} bmiResult
   * @param {Object} idealWeight
   * @returns Dynamic HMTL String
   */
  #getResultHTML(bmiResult, idealWeight) {
    const html = `
        <div class="display__box">
            <div class="display__box-result">
              <p class="result__tip">Your BMI is...</p>
              <p class="bmi__result">${bmiResult}</p>
            </div>
            <div class="display__box-recommendation">
              <p class="bmi__recommendation">
                Your BMI suggest you have a healthy weight. Your ideal weight is
                between
              </p>
              <span class="min-bmi">${idealWeight.minLimitWeight}${
      idealWeight.isMetric ? "kgs" : "lbs"
    }</span>
              <span class="dash-separator">-</span>
              <span class="max-bmi">${idealWeight.maxLimitWeight}${
      idealWeight.isMetric ? "kgs" : "lbs"
    }</span>
            </div>
        </div>
      `;
    return html;
  }

  #getErrorHMTL(errorMessage) {
    const html = `
       <div class="error__box children_margin-bottom">
          <p class="error__box-subheading">Error! 😣</p>
          <p class="error__box-message">
          ${errorMessage}
          </p>
        </div>

    `;
    return html;
  }
}

export default new ResultsView();
