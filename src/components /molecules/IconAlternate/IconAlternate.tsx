import * as React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";
import { Icon } from "../../atoms";

const useStyles = makeStyles((theme) => ({
  root: {},
  extraSmall: {
    width: 20,
    height: 20,
  },
  small: {
    width: 50,
    height: 50,
  },
  medium: {
    width: 70,
    height: 70,
  },
  large: {
    width: 90,
    height: 90,
  },
  circle: {
    borderRadius: "100%",
  },
  square: {
    borderRadius: theme.spacing(2),
  },
}));

export interface IIconAlternateProps {
  /**
   * External classes
   */
  className?: string;
  /**
   * The classes of the font icon
   */
  fontIconClass: string;
  /**
   * Sizes of the icon
   */
  size?: "extraSmall" | "small" | "medium" | "large";
  /**
   * Color of the icon
   */
  color?: { [x: string]: string; [x: number]: string };
  /**
   * The shape of the alternate icon
   */
  shape?: "circle" | "square";
  /**
   * Additional properties to pass to the Icon component
   */
  iconProps?: object;
}

/**
 * Component to display the alternate icon
 *
 * @param {Object} props
 */
const IconAlternate: React.FunctionComponent<IIconAlternateProps> = (props) => {
  const {
    iconProps,
    fontIconClass,
    size,
    color,
    shape,
    className,
    ...rest
  } = props;

  const classes = useStyles();
  const useBackgroundStyles = makeStyles(() => ({
    background: {
      background: color![50],
    },
  }));

  const backgroundClasses = useBackgroundStyles();

  return (
    <Avatar
      className={clsx(
        "icon-alternate",
        classes.root,
        classes[size || "medium"],
        classes[shape || "square"],
        backgroundClasses.background,
        className
      )}
      {...rest}
    >
      <Icon
        size={size}
        fontIconClass={fontIconClass}
        fontIconColor={color![500]}
        className="icon-alternate__icon"
        {...iconProps}
      />
    </Avatar>
  );
};

IconAlternate.defaultProps = {
  size: "medium",
  shape: "square",
  iconProps: {},
};

export default IconAlternate;
