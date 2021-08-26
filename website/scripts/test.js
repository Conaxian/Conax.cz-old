"use strict";

window.addEventListener("load", main);

function main() {
  ReactDOM.render(
    React.createElement(
      "h1",
      null,
      "Hello world!"
    ),
    document.getElementById("container")
  );
}
