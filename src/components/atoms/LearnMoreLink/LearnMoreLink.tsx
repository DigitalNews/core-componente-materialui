import * as React from "react";
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

export interface ILearnMoreLinkProps<T> {
  /**
   * External classes
   */
  className?: string;
  /**
   * The component to load as a main DOM
   */
  component?: React.ComponentType<any>;
  /**
   * Additional properties to component
   */
  componentProps?: T;
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
   * Additional properties to pass to the Icon component.
   * For more info visit https://material-ui.com/api/icon-button/
   */
  iconProps?: IconButtonProps;
  /**
   * Additional properties to pass to the Typography component.
   * For more info visit https://material-ui.com/api/typography/
   */
  typographyProps?: TypographyProps;
  /**
   * next ssr link active, default false.
   */
  isNext: boolean;
}

/**
 * Component to display the "Learn More" link
 *
 * @param {Object} props
 */
const LearnMoreLink = <T,>(props: ILearnMoreLinkProps<T>) => {
  const {
    color,
    component: Component,
    componentProps,
    variant,
    title,
    href,
    className,
    iconProps,
    typographyProps,
    isNext,
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

  if (Component)
    return (
      <Component
        className={
          !isNext ? clsx("learn-more-link", classes.root, className) : undefined
        }
        {...componentProps}
      >
        {isNext ? (
          <a className={clsx("learn-more-link", classes.root, className)}>
            {children}
          </a>
        ) : (
          children
        )}
      </Component>
    );

  // if (component === "Link") {
  //   return (
  //     <Link
  //       to={href}
  //       className={clsx("learn-more-link", classes.root, className)}
  //       {...rest}
  //     >
  //       {children}
  //     </Link>
  //   );
  // }

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

LearnMoreLink.defaultProps = {
  variant: "subtitle1",
  href: "#",
  typographyProps: {},
  isNext: false,
  color: "primary",
  iconProps: {},
};

export default LearnMoreLink;
