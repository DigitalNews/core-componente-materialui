import * as React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {},
  extraSmall: {
    fontSize: 10,
  },
  small: {
    fontSize: 20,
  },
  medium: {
    fontSize: 30,
  },
  large: {
    fontSize: 40,
  },
}));

interface IAppProps {
  /**
   * External classes
   */
  className?: string;
  /**
   * The classes of the font icon
   */
  fontIconClass: string;
  /**
   * Source set for the responsive images
   */
  size?: "extraSmall" | "small" | "medium" | "large";
  /**
   * Color of the icon
   */
  fontIconColor?: string;
}

/**
 * Component to display the icon
 *
 * @param {Object} props
 */
const Icon: React.FunctionComponent<IAppProps> = (props) => {
  const {
    fontIconClass,
    size = "small",
    fontIconColor,
    className,
    ...rest
  } = props;

  const classes = useStyles();

  return (
    <i
      className={clsx(
        "icon",
        classes.root,
        fontIconClass,
        classes[size],
        className
      )}
      style={{ color: fontIconColor }}
      {...rest}
    />
  );
};

export default Icon;
