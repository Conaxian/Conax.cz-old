import { Component } from "react";
import ReactMarkdown from "react-markdown";

import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeRaw from "rehype-raw";
import rehypeKatex from "rehype-katex";

import components from "./components";

import "katex/dist/katex.min.css";

interface Props {
  text: string;
}

class Markdown extends Component {
  override props!: Readonly<Props>;

  override render() {
    let text = this.props.text.replace(/$/gm, "  ");

    return (
      <div className="markdown">
        <ReactMarkdown
          children={text}
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeRaw, rehypeKatex]}
          components={components}
        />
      </div>
    );
  }
}

export default Markdown;
