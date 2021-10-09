import { Component } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeRaw from "rehype-raw";
import rehypeKatex from "rehype-katex";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";

import "katex/dist/katex.min.css";

interface Props {
  text: string;
}

class Markdown extends Component {
  props!: Readonly<Props>;

  render() {
    let text = this.props.text.replace(/$/gm, "  ");
    text = text.replace(/\^([0-9a-zA-Z]+)\^/g, "<sup>$1</sup>");
    text = text.replace(/_([0-9a-zA-Z]+)_/g, "<sub>$1</sub>");

    return (
    <div className="markdown">
      <ReactMarkdown children={ text }
        remarkPlugins={[ remarkGfm, remarkMath ]}
        rehypePlugins={[ rehypeRaw, rehypeKatex ]}
        components={{
          table: ({ children }) => <Table children={ children }
            sx={{ maxWidth: 480 }} />,
          thead: ({ children }) => <TableHead children={ children } />,
          tbody: ({ children }) => <TableBody children={ children } />,
          tr: ({ children }) => <TableRow children={ children } />,
          th: ({ children }) => <TableCell children={ children } />,
          td: ({ children }) => <TableCell children={ children } />,
          blockquote: ({ children }) => <blockquote>
            <i children={ children } /></blockquote>,
        }}
      />
    </div>
    );
  }
}

export default Markdown;
