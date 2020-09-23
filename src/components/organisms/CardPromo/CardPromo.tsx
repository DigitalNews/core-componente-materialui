import * as React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, TypographyProps } from "@material-ui/core";
import IconAlternate, {
  IIconAlternateProps,
} from "../../molecules/IconAlternate";
import CardBase, { ICardBaseProps } from "../CardBase";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
  },
  fontWeight700: {
    fontWeight: 700,
  },
}));

type justifyGrid = "center" | "flex-end" | "flex-start";

interface ICardPromoProps extends Omit<ICardBaseProps, "color"> {
  /**
   * External classes
   */
  className?: string;
  /**
   * Promo title to show inside the card
   */
  title: string;
  /**
   * Promo subtitle to show inside the card
   */
  subtitle?: string;
  /**
   * Promo description to show inside the card
   */
  description?: string;
  /**
   * Promo font icon class name to show inside the card
   */
  fontIconClass?: string;
  /**
   * Promo icon color to show inside the card
   */
  color: { [key: string]: string; [key: number]: string };
  /**
   * The content alignment
   */
  align?: "left" | "right" | "center";
  /**
   * Title color
   */
  titleColor?:
    | "inherit"
    | "initial"
    | "textPrimary"
    | "primary"
    | "secondary"
    | "textSecondary"
    | "error";
  /**
   * Additional props to pass to the IconAlternate component
   */
  iconAlternateProps?: IIconAlternateProps;
  /**
   * Additional props to pass to the title Typography component
   */
  titleProps?: TypographyProps;
  /**
   * Additional props to pass to the subtitle Typography component
   */
  subtitleProps?: TypographyProps;
  /**
   * Additional props to pass to the desciption Typography component
   */
  descriptionProps?: TypographyProps;
}

/**
 * Component to display the promo card
 *
 * @param {Object} props
 */

const CardPromo: React.FunctionComponent<ICardPromoProps> = (props) => {
  const {
    titleColor,
    fontIconClass,
    color,
    title,
    subtitle,
    description,
    align,
    className,
    iconAlternateProps,
    titleProps,
    subtitleProps,
    descriptionProps,
    ...rest
  } = props;

  const classes = useStyles();

  let justifyGrid: justifyGrid = "flex-start";
  if (align === "center") {
    justifyGrid = "center";
  } else if (align === "right") {
    justifyGrid = "flex-end";
  }
  return (
    <CardBase
      className={clsx("card__promo", classes.root, className)}
      {...rest}
    >
      <Grid container spacing={2} className="card-promo__wrapper">
        <Grid
          item
          container
          justify={justifyGrid}
          xs={12}
          className="card-promo__icon-wrapper"
        >
          <IconAlternate
            fontIconClass={fontIconClass}
            color={color}
            size="medium"
            className="card-promo__icon"
            {...iconAlternateProps}
          />
        </Grid>
        <Grid item xs={12} className="card-promo__title-wrapper">
          <Typography
            variant="h4"
            align={align}
            className={clsx("card-promo__title", classes.fontWeight700)}
            color={titleColor || "textPrimary"}
            {...titleProps}
          >
            {title}
          </Typography>
        </Grid>
        {subtitle && (
          <Grid item xs={12} className="card-promo__subtitle-wrapper">
            <Typography
              variant="h6"
              align={align}
              className={clsx("card-promo__subtitle", classes.fontWeight700)}
              {...subtitleProps}
            >
              {subtitle}
            </Typography>
          </Grid>
        )}
        {description && (
          <Grid item xs={12} className="card-promo__description-wrapper">
            <Typography
              variant="subtitle1"
              color="textSecondary"
              align={align}
              className="card-promo__description"
              {...descriptionProps}
            >
              {description}
            </Typography>
          </Grid>
        )}
      </Grid>
    </CardBase>
  );
};

CardPromo.defaultProps = {
  align: "left",
  titleProps: {},
  subtitleProps: {},
  descriptionProps: {},
};
export default CardPromo;
