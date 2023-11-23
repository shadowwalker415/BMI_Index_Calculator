class MetricView {
  #inputContainer = document.querySelector(".input__container");
  #formRadio = document.querySelector(".form__radio");

  #getHTML() {
    const html = `
      <form action="#" class="form__metric" id="metric__form">
          <div class="form__metric-height" >
            <label class="input__label" for="height">Height</label>
            <input
              type="text"
              class="input__type"
              id="height"
              name="height"
              placeholder="0"
              required
            />
          </div>
          <div class="form__metric-weight">
            <label class="input__label" for="weight">Weight</label>
            <input
              type="text"
              class="input__type"
              id="weight"
              name="weight"
              placeholder="0"
              required
            />
          </div>
          <input class="input__btn" type="submit" />
      </form>
        `;
    return html;
  }

  render() {
    const viewHTML = this.#getHTML();
    this.#inputContainer.insertAdjacentHTML("beforeend", viewHTML);
    return this;
  }

  handleSubmit(handler) {
    this.#inputContainer.addEventListener("submit", handler);
  }

  handleCheck(handler) {
    this.#formRadio.addEventListener("click", handler);
  }

  clearContent() {
    this.#inputContainer.innerHTML = "";
    return this;
  }
}

export default new MetricView();
