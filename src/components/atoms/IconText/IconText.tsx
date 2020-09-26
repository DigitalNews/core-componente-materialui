import * as React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, TypographyProps } from "@material-ui/core";
import Icon from "../Icon";
import theme from "../../../theme";

const useStyles = makeStyles(() => ({
  root: {
    display: "inline-flex",
    flexWrap: "nowrap",
    alignItems: "center",
    width: "100%",
  },
  title: {
    marginLeft: theme.spacing(1),
  },
}));

interface IIconTextProps {
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
  color?: string;
  /**
   * Title of the icon-text
   */
  title: string;
  /**
   * Additional properties to pass to the Icon component
   */
  iconProps?: object;
  /**
   * Additional properties to pass to the Typography component.
   * For more info visit https://material-ui.com/api/typography/
   */
  typographyProps?: TypographyProps;
}

/**
 * Component to display the icon text
 *
 * @param {Object} props
 */
const IconText: React.FunctionComponent<IIconTextProps> = (props) => {
  const {
    title,
    color,
    fontIconClass,
    className,
    iconProps,
    typographyProps,
    ...rest
  } = props;

  const classes = useStyles();

  return (
    <div className={clsx("icon-text", classes.root, className)} {...rest}>
      <Icon
        className="icon-text__icon"
        size="small"
        fontIconClass={fontIconClass}
        fontIconColor={color}
        {...iconProps}
      />
      <Typography
        noWrap
        variant="subtitle1"
        color="textPrimary"
        className={clsx("icon-text__typography", classes.title)}
        {...typographyProps}
      >
        {title}
      </Typography>
    </div>
  );
};

IconText.defaultProps = {
  iconProps: {},
  typographyProps: {},
};

export default IconText;
