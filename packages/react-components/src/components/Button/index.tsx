import styled from "styled-components";
import defaultTheme from "../../constants";
import { Theme } from '../../utils/provider'

type Variant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "dark";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
  variant?: Variant;
  // will probably remove background color once variant functionality is fleshed out
  backgroundColor?: string;
  disabled?: boolean;
  theme: unknown;
}

const buttonSizes = {
  small: {
    height: "40px",
    width: "140px",
  },
};

const setBackgroundColor = (props: Props): string => {
  const { backgroundColor, theme, variant } = props;

  // TODO: refactor this to follow linting rules and probably honestly start this component over from scratch
  if (backgroundColor) {
    return backgroundColor;
  } if (theme[variant]) {
    return theme[variant];
  } if (variant) {
    return defaultTheme[variant];
  }
    return defaultTheme.primary;

};

export const Button = styled.button.attrs<Props>((props) => ({
  size: props.size,
  variant: props.variant,
  // backgroundColor: props.backgroundColor,
}))<Props>`
  border-color: #1f5e29;
  color: white;
  background-color: ${(props) => setBackgroundColor(props)};
  height: ${({ size }) =>
    size ? buttonSizes[size].height : buttonSizes.small.height};
  width: ${({ size }) =>
    size ? buttonSizes[size].width : buttonSizes.small.width};
  font-size: 0.8rem;
  border: none;
  border-radius: 5px;
  &:disabled {
    background-color: grey;
  }
`;

export default Button;
