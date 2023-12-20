import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Settings");
  }

  async getHtml() {
    return `
            <h1>Welcome back, Shawn</h1>
            <p>
                Settings Page
            </p>
        `;
  }
}
