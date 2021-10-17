import { Component } from "react";
import {
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Skeleton,
} from "@mui/material";
import { Restore as RestoreIcon } from "@mui/icons-material";

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
          {this.state.validity ? (
            <>
              <BottomNavigationAction
                label="Previous"
                href={previous}
                icon={<RestoreIcon />}
              />
              <BottomNavigationAction
                label="Subjects"
                href="/notes"
                icon={<RestoreIcon />}
              />
              <BottomNavigationAction
                label="Next"
                href={next}
                icon={<RestoreIcon />}
              />
            </>
          ) : (
            <>
              <Skeleton>
                <BottomNavigationAction />
              </Skeleton>
              <Skeleton>
                <BottomNavigationAction />
              </Skeleton>
              <Skeleton>
                <BottomNavigationAction />
              </Skeleton>
            </>
          )}
        </BottomNavigation>
      </Box>
    );
  }
}

export default NoteNav;
