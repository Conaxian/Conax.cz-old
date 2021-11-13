import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";

import type { NormalComponents } from "react-markdown/lib/complex-types";
import type { SpecialComponents } from "react-markdown/lib/ast-to-react";

type MarkdownComponents = Partial<
  Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents
>;

const components: MarkdownComponents = {
  table: ({ children }) => (
    <Table children={children} sx={{ maxWidth: "min(100%, 480px)" }} />
  ),
  thead: ({ children }) => <TableHead children={children} />,
  tbody: ({ children }) => <TableBody children={children} />,
  tr: ({ children }) => <TableRow children={children} />,
  th: ({ children }) => <TableCell children={children} />,
  td: ({ children }) => <TableCell children={children} />,
  blockquote: ({ children }) => (
    <blockquote>
      <i children={children} />
    </blockquote>
  ),
};

export default components;
