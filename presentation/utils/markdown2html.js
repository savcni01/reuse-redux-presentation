import showdown from "showdown";

const converter = new showdown.Converter();

export default function markdown2html(text) {
  return converter.makeHtml(text);
};
