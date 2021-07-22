import React, { PureComponent } from "react";
import { render } from "react-dom";

class ReactComponent extends PureComponent {
  render() {
    return <div>Hello world</div>;
  }
}

render(<ReactComponent />, document.getElementById("root"));
