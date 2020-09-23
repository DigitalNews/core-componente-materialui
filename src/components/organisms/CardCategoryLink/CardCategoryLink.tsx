import * as React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  IconButton,
  TypographyProps,
} from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import IconAlternate, {
  IIconAlternateProps,
} from "../../molecules/IconAlternate";
import CardBase, { ICardBaseProps } from "../../organisms/CardBase";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
  },
  fontWeight700: {
    fontWeight: 700,
  },
  categoryIconButton: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
  },
}));

type justifyGrid = "center" | "flex-end" | "flex-start";

type OmitColor = Omit<ICardBaseProps, "color">;

export interface ICardCategoryLinkProps extends OmitColor {
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
  href: string;
  /**
   * Promo font icon class name to show inside the card
   */
  fontIconClass?: string;
  /**
   * Promo icon color to show inside the card
   */
  color?: {
    [x: string]: string;
    [x: number]: string;
  };
  /**
   * The content alignment
   */
  align?: "left" | "right" | "center";
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
}

/**
 * Component to display the category link card
 *
 * @param {Object} props
 */
const CardCategoryLink: React.FunctionComponent<ICardCategoryLinkProps> = (
  props
) => {
  const {
    fontIconClass,
    color,
    title,
    subtitle,
    href,
    align,
    className,
    iconAlternateProps,
    titleProps,
    subtitleProps,
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
      className={clsx("card-category-link", classes.root, className)}
      {...rest}
    >
      <Grid container spacing={2} className="card-category-link__wrapper">
        <Grid item container justify={justifyGrid} xs={12}>
          <IconAlternate
            fontIconClass={fontIconClass}
            color={color}
            size="medium"
            {...iconAlternateProps}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            align={align}
            className={classes.fontWeight700}
            {...titleProps}
          >
            {title}
          </Typography>
        </Grid>
        {subtitle && (
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              align={align}
              color="textSecondary"
              {...subtitleProps}
            >
              {subtitle}
            </Typography>
          </Grid>
        )}
      </Grid>
      <Link
        to={href}
        className={clsx("card-category-link__item", classes.categoryIconButton)}
      >
        <IconButton className="card-category-link__icon-button">
          <ArrowRightAltIcon
            className="card-category-link__icon"
            style={{ color: color[500] }}
          />
        </IconButton>
      </Link>
    </CardBase>
  );
};

CardCategoryLink.defaultProps = {
  align: "left",
  href: "#",
  titleProps: {},
  subtitleProps: {},
};

export default CardCategoryLink;
