import * as React from "react";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  IconButton,
  IconButtonProps,
  TypographyProps,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-flex",
    alignItems: "center",
    textDecoration: "none",
  },
  title: {
    fontWeight: "bold",
  },
  icon: {
    padding: 0,
    marginLeft: theme.spacing(1),
    "&:hover": {
      background: "transparent",
    },
  },
}));

export interface ILearnMoreLinkProps {
  /**
   * External classes
   */
  className?: string;
  /**
   * The component to load as a main DOM
   */
  component?: "Link" | "a";
  /**
   * Title of the link
   */
  title: string;
  /**
   * Variant of the link
   */
  variant?: "h6" | "subtitle1" | "subtitle2" | "body1" | "body2";
  /**
   * Href of the link
   */
  href?: string;
  /**
   * Color of the link
   */
  color?: "inherit" | "primary" | "secondary";
  /**
   * Additional properties to pass to the Icon component
   */
  iconProps?: IconButtonProps;
  /**
   * Additional properties to pass to the Typography component
   */
  typographyProps?: TypographyProps;
}

/**
 * Component to display the "Learn More" link
 *
 * @param {Object} props
 */
const LearnMoreLink: React.FunctionComponent<ILearnMoreLinkProps> = (props) => {
  const {
    color = "primary",
    component = "Link",
    variant = "subtitle1",
    title,
    href = "#",
    className,
    iconProps = {},
    typographyProps = {},
    ...rest
  } = props;

  const classes = useStyles();
  const children = (
    <>
      <Typography
        component="span"
        className={clsx("learn-more-link__typography", classes.title)}
        variant={variant}
        color={color}
        {...typographyProps}
      >
        {title}
      </Typography>
      <IconButton
        className={clsx("learn-more-link__icon-button", classes.icon)}
        color={color}
        {...iconProps}
      >
        <ArrowRightAltIcon className="learn-more-link__arrow" />
      </IconButton>
    </>
  );

  if (component === "Link") {
    return (
      <Link
        to={href}
        className={clsx("learn-more-link", classes.root, className)}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={clsx("learn-more-link", classes.root, className)}
      {...rest}
    >
      {children}
    </a>
  );
};

export default LearnMoreLink;
