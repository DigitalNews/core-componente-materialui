import * as React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardContentProps } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
  },
  withShadow: {
    boxShadow: "0 2px 10px 0 rgba(23,70,161,.11)",
  },
  noShadow: {
    boxShadow: "none",
  },
  noBorder: {
    border: 0,
  },
  noBg: {
    background: "transparent",
  },
  liftUp: {
    transition:
      "box-shadow .25s ease,transform .25s ease,-webkit-transform .25s ease",
    "&:hover": {
      boxShadow:
        "0 1.5rem 2.5rem rgba(22,28,45,.1),0 .3rem 0.5rem -.50rem rgba(22,28,45,.05) !important",
      transform: "translate3d(0,-5px,0)",
    },
  },
  content: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(4, 2),
    "&:last-child": {
      padding: theme.spacing(4, 2),
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6, 3),
      "&:last-child": {
        padding: theme.spacing(6, 3),
      },
    },
  },
  left: {
    alignItems: "flex-start",
  },
  right: {
    alignItems: "flex-end",
  },
  center: {
    alignItems: "center",
  },
}));

export interface ICardBaseProps {
  /**
   * External classes
   */
  className?: string;
  /**
   * The children content of the basic card
   */
  children?: React.ReactNode;
  /**
   * Whether to show custom shadow
   */
  withShadow?: boolean;
  /**
   * Whether to render the card without shadow
   */
  noShadow?: boolean;
  /**
   * Whether to hide the card borders
   */
  noBorder?: boolean;
  /**
   * Whether to show transparent background
   */
  noBg?: boolean;
  /**
   * Whether to lift up on hover
   */
  liftUp?: boolean;
  /**
   * The content alignment
   */
  align?: "left" | "right" | "center";
  /**
   * Additional props to pass to the CardContent component
   * For more info visit https://material-ui.com/api/card-content/
   */
  cardContentProps?: CardContentProps;
}

/**
 * Component to display the basic card
 *
 * @param {Object} props
 */

const CardBase: React.FunctionComponent<ICardBaseProps> = (props) => {
  const {
    withShadow,
    noShadow,
    noBorder,
    noBg,
    liftUp,
    children,
    align,
    className,
    cardContentProps,
    ...rest
  } = props;

  const classes = useStyles();

  return (
    <Card
      className={clsx(
        "card-base",
        classes.root,
        withShadow ? classes.withShadow : {},
        noShadow ? classes.noShadow : {},
        noBorder ? classes.noBorder : {},
        noBg ? classes.noBg : {},
        liftUp ? classes.liftUp : {},
        className
      )}
      {...rest}
    >
      <CardContent
        style={{ position: "relative" }}
        className={clsx(
          "card-base__content",
          classes.content,
          classes[align || "center"]
        )}
        {...cardContentProps}
      >
        {children}
      </CardContent>
    </Card>
  );
};

CardBase.defaultProps = {
  align: "center",
  cardContentProps: {},
};

export default CardBase;
