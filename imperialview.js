class ImperialView {
  #parentElement = document.querySelector(".form__input-group");
  #imperialBtnElement = document.querySelector(".form__radio-group");

  handleCheck(handler) {
    this.#imperialBtnElement.addEventListener("click", handler);
  }

  render() {
    const viewHTML = this.#getHTML();
    this.#parentElement.innerHTML = "";
    this.#parentElement.insertAdjacentHTML("beforeend", viewHTML);
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
          required
        />
        <span class="input__unit-height">ft</span>
      </div>
      <div class="input__group">
        <label class="input__label-invisible" for="height">Height</label>
        <input
          type="text"
          class="input__type"
          id="height"
          placeholder="0"
          required
        />
        <span class="input__unit-height">in</span>
      </div>
      <div class="input__group">
        <label class="input__label" for="weight">Weight</label>
        <input
          type="text"
          class="input__type"
          id="weight"
          placeholder="0"
          required
        />
        <span class="input__unit-weight">st</span>
      </div>
      <div class="input__group">
        <label class="input__label-invisible" for="weight">Weight</label>
        <input
          type="text"
          class="input__type"
          id="weight"
          placeholder="0"
          required
        />
        <span class="input__unit-weight">lbs</span>
    </div>`;

    return html;
  }
}

export default new ImperialView();
