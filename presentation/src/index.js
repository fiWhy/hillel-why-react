import React from "react";
import ReactDOM from "react-dom";

import {
  FlexBox,
  Heading,
  SpectacleLogo,
  UnorderedList,
  CodeSpan,
  OrderedList,
  ListItem,
  FullScreen,
  Progress,
  Appear,
  Slide,
  Deck,
  Text,
  Grid,
  Box,
  Image,
  CodePane,
  MarkdownSlide,
  MarkdownSlideSet,
  Notes,
} from "spectacle";

import Hello from "./slides/01_hello";
import AngularVsReact from "./slides/02_angular_vs_react";
import AngularCons from "./slides/03_angular_cons";
import ReactCons from "./slides/04_react_cons";
import Why from "./slides/05_why";
import ThatsWhy from "./slides/06_thats_why";
import ThatsWhyClass from "./slides/07_thats_why_class";
import ThatsWhyNoJSX from "./slides/08_thats_why_no_jsx";
import WhatToKnow from "./slides/09_what_to_know";
import WhatToKnowList from "./slides/10_what_to_know_list";
import Hooks from "./slides/11_hooks";
import HookExample from "./slides/12_hook_example";
import HookErrorExample from "./slides/13_hook_error_example";
import CustomHooks from "./slides/14_custom_hooks";
import StyledComponents from "./slides/15_styled_components";
import StyledComponentsExample from "./slides/16_styled_components_example";
import StyledComponentsThemedExample from "./slides/17_styled_components_themed_example";
import Storybook from "./slides/18_storybook";
import TheEnd from "./slides/19_the_end";

const formidableLogo =
  "https://avatars2.githubusercontent.com/u/5078602?s=280&v=4";

// SPECTACLE_CLI_THEME_START
const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

const Presentation = () => (
  <Deck theme={theme} template={template}>
    <Hello />
    <AngularVsReact />
    <AngularCons />
    <ReactCons />
    <Why />
    <ThatsWhy />
    <ThatsWhyClass />
    <ThatsWhyNoJSX />
    <WhatToKnow />
    <WhatToKnowList />
    <Hooks />
    <HookExample />
    <HookErrorExample />
    <CustomHooks />
    <StyledComponents />
    <StyledComponentsExample />
    <StyledComponentsThemedExample />
    <Storybook />
    <TheEnd />
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById("root"));
