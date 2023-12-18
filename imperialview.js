class ImperialView {
  #inputContainer = document.querySelector(".input__container");
  #formRadio = document.querySelector(".form__radio");

  #getHTML() {
    const html = `
        <form action="#" class="form__imperial" id="imperial__form">
          <div class="form__imperial-height">
            <label class="input__label" for="foot">Height</label>
            <input type="text" class="input__type" id="foot" name='foot' placeholder="0" />
            <div class="foot__container"><span class="ft">ft</span></div>
          </div>

          <div class="form__imperial-height">
            <label class="input__label-invisible" for="inch">Inch</label>
            <input type="text" class="input__type"  id="inch" name='inch' placeholder="0" />
            <div class="inch__container"><span class="in">in</span></div>
          </div>

          <div class="form__imperial-height">
            <label class="input__label" for="stone">Weight</label>
            <input type="text" class="input__type"  id="stone" name='stone' placeholder="0" />
            <div class="stone__container"><span class="st">st</span></div>
          </div>
          <div class="form__imperial-height">
            <label class="input__label-invisible"  for="pounds">Pounds</label>
            <input
              type="text"
              class="input__type"
              id="pounds"
              name='pounds'
              placeholder="0"
            />
            <div class="pounds__container"><span class="lbs">lbs</span></div>
          </div>
          <input class="input__btn" type="submit" />
      </form>`;

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

  clearContent() {
    this.#inputContainer.innerHTML = "";
    return this;
  }

  handleCheck(handler) {
    this.#formRadio.addEventListener("click", handler);
  }
}

export default new ImperialView();
