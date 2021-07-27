import React from "react";

import List from ".";

export default {
  title: "Example/List",
  component: List,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <List values={[
    1,2,3,4
]} />;

export const Primary = Template.bind({});
Primary.args = {
};
