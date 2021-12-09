import {styled, ThemedProps} from "@mui/material/styles";
import {Theme} from "@emotion/react";

interface Props {
  underlined?: boolean;
  theme?: Theme
}

export const Section = styled('div')<Props>`
  padding: ${props => props.theme.spacing(4)}px 0;

  &:last-child {
    min-height: calc(100vh + 1px);
  }

  & > &:last-child {
    min-height: initial;
  }

  ${(props) => props.theme.breakpoints.down("md")} {
    padding: 0;
  }
  ${(props: Props) =>
  (props.underlined &&
    `
    position: relative;

    &:not(:last-of-type):after {
      position: absolute;
      bottom: 0;
      width: 100%;
      display: block;
      content: '';
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }
  `) ||
  ''}
`;