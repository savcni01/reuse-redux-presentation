import React from "react";
import { Deck, Slide } from "spectacle";
import markdown2html from "./utils/markdown2html";
// import createTheme from "spectacle/lib/themes/default/";
import createTheme from "spectacle-theme-nova";

require("normalize.css");
require("spectacle/lib/themes/default/prism.light");
require("./prism-tomorrow.css");
require("./live/counter.css");

const theme = createTheme("nova");

// const theme = createTheme({
//   primary: "white",
//   secondary: "black",
//   tertiary: "gray",
//   quaternary: "lightgray"
// }, {
//   primary: "open-sans",
//   secondary: "Helvetica"
// });

const slidesImports = [
  import("./slides/000-intro"),
  import("./slides/010-nik"),
  import("./slides/020-anons"),
  import("./slides/030-screen-nmc"),
  import("./slides/040-screen-nmc"),
  import("./slides/050-screen-nmc"),
  import("./slides/060-screen-nmc"),
  import("./slides/070-screen-nmc"),
  import("./slides/110-share-real-live"),
  import("./slides/120-share-morning"),
  import("./slides/130-share-breakfast"),
  import("./slides/140-share-school"),
  import("./slides/150-share-behavior"),
  import("./slides/210-reuse-in-redux-react"),
  import("./slides/220-redux-terms"),
  import("./slides/230-redux-flow"),
  import("./slides/240-react-app"),
  import("./slides/250-react-app-code"),
  import("./slides/260-redux-store"),
  import("./slides/270-redux-store-code"),
  import("./slides/280-react-redux-terms"),
  import("./slides/290-react-redux"),
  import("./slides/300-react-redux-code"),
  import("./slides/310-react-redux-connect"),
  import("./slides/320-smart-dumb"),
  import("./slides/330-react-redux-connect-code"),
  import("./slides/410-share-redux"),
  import("./slides/420-counter"),
  import("./slides/430-counter-code"),
  import("./slides/440-two-counters-code"),
  import("./slides/450-two-counters"),
  import("./slides/460-counters-fixed-code"),
  import("./slides/470-counters-fixed"),
  import("./slides/480-solutions-problem"),
  import("./slides/510-requirements"),
  import("./slides/520-counters-sliced-code"),
  import("./slides/530-counters-sliced"),
  import("./slides/540-counters-isolated-code"),
  import("./slides/550-counters-isolated"),
  import("./slides/560-ideas"),
  import("./slides/610-redux-island"),
  import("./slides/611-redux-island"),
  import("./slides/612-redux-island"),
  import("./slides/620-island-parts"),
  import("./slides/630-island-start"),
  import("./slides/640-counters-island-code"),
  import("./slides/650-counters-island"),
  import("./slides/660-code-compare"),
  import("./slides/710-island-summary"),
  import("./slides/990-final")
];

try {
  // noinspection JSUnresolvedVariable
  theme.screen.global.body.fontSize = "2em";
  theme.screen.components.heading.h5 = {
    color: theme.screen.components.heading.h2.color,
    margin: "0 auto 2rem"
  };
  // eslint-disable-next-line no-console
  console.log("theme: ", theme.screen);
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
        progress={"pacman"}
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
