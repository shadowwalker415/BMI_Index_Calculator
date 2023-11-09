class MetricView {
  #parentElement = document.querySelector(".form__input-group");
  #metricBtnElement = document.querySelector(".form__radio-group");

  render() {
    const viewHTML = this.#getHTML();
    this.#parentElement.innerHTML = "";
    this.#parentElement.insertAdjacentHTML("beforeend", viewHTML);
  }

  handleEvent(handler) {
    this.#metricBtnElement.addEventListener("click", handler);
  }

  #getHTML() {
    const html = `
        <div class="input__group">
        <label class="input__label" for="height">Height</label>
        <input
          type="text"
          class="input__type"
          id="height"
          placeholder="0"
        />
        <span class="input__unit-height">cm</span>
      </div>
      <div class="input__group">
        <label class="input__label" for="weight">Weight</label>
        <input
          type="text"
          class="input__type"
          id="weight"
          placeholder="0"
        />
        <span class="input__unit-weight">kg</span>
      </div>
    `;

    return html;
  }
}

export default new MetricView();
