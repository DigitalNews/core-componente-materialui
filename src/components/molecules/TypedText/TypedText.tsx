import * as React from "react";
import clsx from "clsx";
import Typed, { ReactTypedProps } from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, TypographyProps } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

interface ITypedTextProps extends TypographyProps {
  /**
   * External classes
   */
  className?: string;
  /**
   * react-typed properties. For more info visit https://www.npmjs.com/package/react-typed
   */
  typedProps: ReactTypedProps;
}
/**
 * Component to display the typed animated texts
 *
 * @param {Object} props
 */

const TypedText: React.FunctionComponent<ITypedTextProps> = (props) => {
  const { className, typedProps, ...rest } = props;

  const classes = useStyles();

  return (
    <Typography
      className={clsx("typed-text", classes.root, className)}
      {...rest}
    >
      <Typed className="typed-text__item" {...typedProps} />
    </Typography>
  );
};

export default TypedText;
