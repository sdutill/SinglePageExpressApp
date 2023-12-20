import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Posts");
  }

  async getHtml() {
    return `
            <h1>Welcome back, Shawn</h1>
            <p>
                Posts Page
            </p>
        `;
  }
}
