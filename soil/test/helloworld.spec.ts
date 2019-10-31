import { createElement } from "react";
import chalk from "chalk";
import { expect } from "chai";
import { render } from "ink-testing-library";
import App from "../src/App";

describe("Hello world test", () => {
  it("should say Hello", () => {
    const { lastFrame } = render(createElement(App));
    expect(lastFrame()).to.contain("Hello");
  });
  it("should say a green world", () => {
    const { lastFrame } = render(createElement(App));
    expect(lastFrame()).to.contain(chalk`{green world}`);
  });
});
