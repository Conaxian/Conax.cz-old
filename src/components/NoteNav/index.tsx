import { Component } from "react";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import {
  Block as BlockIcon,
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
  MenuBook as MenuBookIcon,
} from "@mui/icons-material";

interface Props {
  subject: string;
  num: number;
}

interface Validity {
  previous: boolean;
  next: boolean;
}

interface State {
  validity: Validity | null;
}

function makeNoteUrl(subject: string, num: number) {
  return `/notes/${subject}/${num}`;
}

async function checkNotes(subject: string, num: number) {
  const previousUrl = makeNoteUrl(subject, num - 1);
  const previousResp = await fetch(previousUrl);
  const previous = previousResp.status !== 404;

  const nextUrl = makeNoteUrl(subject, num + 1);
  const nextResp = await fetch(nextUrl);
  const next = nextResp.status !== 404;

  const validity: Validity = { previous, next };
  return validity;
}

class NoteNav extends Component {
  props!: Readonly<Props>;
  state: Readonly<State> = { validity: null };
  private asyncRequest!: Promise<Validity | void> | null;

  componentDidMount() {
    this.asyncRequest = checkNotes(this.props.subject, this.props.num).then(
      (validity) => {
        this.asyncRequest = null;
        this.setState({ validity });
      }
    );
  }

  render() {
    const previous = makeNoteUrl(this.props.subject, this.props.num - 1);
    const next = makeNoteUrl(this.props.subject, this.props.num + 1);

    return (
      <Box sx={{ position: "fixed", width: "100%", bottom: 0 }}>
        <BottomNavigation showLabels>
          <BottomNavigationAction
            label={this.state.validity?.previous ?? true ? "Previous" : "First"}
            href={this.state.validity?.previous ?? false ? previous : ""}
            icon={
              this.state.validity?.previous ?? true ? (
                <ArrowBackIcon />
              ) : (
                <BlockIcon />
              )
            }
          />
          <BottomNavigationAction
            label="Subjects"
            href="/notes"
            icon={<MenuBookIcon />}
          />
          <BottomNavigationAction
            label={this.state.validity?.next ?? true ? "Next" : "Last"}
            href={this.state.validity?.next ?? false ? next : ""}
            icon={
              this.state.validity?.next ?? true ? (
                <ArrowForwardIcon />
              ) : (
                <BlockIcon />
              )
            }
          />
        </BottomNavigation>
      </Box>
    );
  }
}

export default NoteNav;
