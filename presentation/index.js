import React from "react";
import { Deck, Slide } from "spectacle";
import createTheme from "spectacle/lib/themes/default/";
import markdown2html from "./utils/markdown2html";

const slidesImports = [
  import("./slides/_000-intro"),
  import("./slides/_010-nik"),
  import("./slides/_015-anons"),
  import("./slides/_020-screen-nmc"),
  import("./slides/_030-screen-nmc"),
  import("./slides/_040-screen-nmc"),
  import("./slides/_050-screen-nmc"),
  import("./slides/_110-share-real-live"),
  import("./slides/_120-share-morning"),
  import("./slides/_130-share-breakfast"),
  import("./slides/_140-share-school"),
  import("./slides/_150-share-behavior"),
  import("./slides/_200-reuse-in-redux-react"),
  import("./slides/_255-redux-terms"),
  import("./slides/_210-redux-flow"),
  import("./slides/_220-react-app"),
  import("./slides/_230-react-app-code"),
  import("./slides/_240-redux-store"),
  import("./slides/_250-redux-store-code"),
  import("./slides/_255-redux-terms"),
  import("./slides/_260-react-redux"),
  import("./slides/_270-react-redux-code"),
  import("./slides/_280-react-redux-connect"),
  import("./slides/_290-react-redux-connect-code"),
  import("./slides/_300-share-redux"),
  import("./slides/_310-counter"),
  import("./slides/_320-counter-code"),
  import("./slides/_330-two-counters-code"),
  import("./slides/_340-two-counters"),
  import("./slides/_350-counters-fixed-code"),
  import("./slides/_360-counters-fixed"),
  import("./slides/_400-solutions-problem"),
  import("./slides/_410-requirements"),
  import("./slides/_420-ideas"),
  import("./slides/_430-counters-sliced-code"),
  import("./slides/_440-counters-sliced"),
  import("./slides/_450-counters-isolated-code"),
  import("./slides/_460-counters-isolated"),
  import("./slides/_500-redux-island"),
  import("./slides/_510-counters-island-code"),
  import("./slides/_520-counters-island"),
  import("./slides/_540-island-summary"),
  import("./slides/420-redux-island-internals"),
  import("./slides/430-redux-island-code"),
  import("./slides/_990-final")
];

require("normalize.css");
require("spectacle/lib/themes/default/prism.light");
require("./prism-tomorrow.css");

// const theme = createTheme();
const theme = createTheme({
  primary: "white",
  secondary: "black",
  tertiary: "gray",
  quaternary: "lightgray"
}, {
  primary: "open-sans",
  secondary: "Helvetica"
});

try {
  // noinspection JSUnresolvedVariable
  theme.screen.components.heading.h4.color = "gray";
  // theme.screen.components.heading.h3.color = "gray";
} catch (err) {
  // eslint-disable-next-line
}

export default class Presentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: Array(slidesImports.length).fill({
        default: <Slide key="loading"/>
      })
    };
  }

  componentDidMount() {
    const importedSlides = [];
    Promise.all(slidesImports).then((slidesImportsResolved) => {
      slidesImportsResolved.forEach((slide) => {
        // importedSlides.push(slide.default);
        importedSlides.push(slide);
      });
      this.setState({ slides: importedSlides });
    });
  }

  render() {
    const { slides } = this.state;
    return (
      <Deck
        progress={"bar"}
        transitionDuration={500}
        theme={theme}
      >
        {
          slides.map((slide, index) => {
            return React.cloneElement(slide.default, {
              key: index,
              notes: markdown2html(slide.notes)
            });
          })
        }
      </Deck>
    );
  }
}