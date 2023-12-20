import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Viewing Post");
  }

  async getHtml() {
    console.log(this.params.id);
    return `
            <h1>Welcome back, Shawn</h1>
            <p>
                You are viewing Post # ${this.params.id}.
            </p>
        `;
  }
}
