import * as React from "react";
import clsx from "clsx";
import Typed, { ReactTypedProps } from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import { ITypographyProps } from "../../../type";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {},
}));

interface ITypedTextProps extends ITypographyProps {
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
 * Content component based on the API of the Typography material ui. 
 * Learn documentation more props https://material-ui.com/api/typography/.
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
