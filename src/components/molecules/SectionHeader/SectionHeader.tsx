import * as React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, TypographyProps } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      marginBottom: theme.spacing(4),
    },
  },
  disableGutter: {
    marginBottom: 0,
  },
  title: {
    fontWeight: "bold",
  },
  cta: {
    marginLeft: theme.spacing(1),
    "&:first-child": {
      marginLeft: theme.spacing(0),
    },
  },
}));

type justifyGrid = "center" | "flex-end" | "flex-start";

interface ISectionHeaderProps {
  /**
   * External classes
   */
  className?: string;
  /**
   * Title of the section header
   */
  title: string | React.ReactNode;
  /**
   * Subtitle of the section header
   */
  subtitle?: string | React.ReactNode;
  /**
   * Label title of the section header
   */
  label?: string;
  /**
   * The overline component in the section header
   */
  overline?: React.ReactNode;
  /**
   * Array of the CTAs
   */
  ctaGroup?: Array<React.ReactNode>;
  /**
   * Whether to fade up on scroll
   */
  fadeUp?: boolean;
  /**
   * Header content (title, subtitle, CTAs) alignment
   */
  align?: "right" | "left" | "center";
  /**
   * Whether to disable bottom margin of the section
   */
  disableGutter?: boolean;
  /**
   * Styles classes to be attached to the title from the parent component
   */
  titleClasses?: string;
  /**
   * Title variant
   */
  titleVariant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  /**
   * SubTitle variant
   */
  subtitleVariant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2";

  /**
   * SubTitle color
   */
  subtitleColor?: "textPrimary" | "textSecondary" | "primary" | "secondary";

  /**
   * Additional properties to pass to the label Typography component.
   * For more info visit https://material-ui.com/api/typography/
   */
  labelProps?: TypographyProps;
  /**
   * Additional properties to pass to the title Typography component.
   * For more info visit https://material-ui.com/api/typography/
   */
  titleProps?: TypographyProps;
  /**
   * Additional properties to pass to the subtitle Typography component.
   * For more info visit https://material-ui.com/api/typography/
   */
  subtitleProps?: TypographyProps;
}

/**
 * Component to display the section headers
 *
 * @param {Object} props
 */
const SectionHeader: React.FunctionComponent<ISectionHeaderProps> = (props) => {
  const {
    title,
    titleVariant,
    subtitleVariant,
    subtitle,
    subtitleColor,
    label,
    overline,
    fadeUp,
    align,
    ctaGroup,
    disableGutter,
    titleClasses,
    className,
    labelProps,
    titleProps,
    subtitleProps,
    ...rest
  } = props;

  const classes = useStyles();
  let justifyGrid: justifyGrid = "center";
  if (align === "left") {
    justifyGrid = "flex-start";
  } else if (align === "right") {
    justifyGrid = "flex-end";
  }

  return (
    <Grid
      container
      spacing={2}
      data-aos={fadeUp ? "fade-up" : ""}
      className={clsx(
        "section-header",
        classes.root,
        disableGutter ? classes.disableGutter : {},
        className
      )}
      {...rest}
    >
      {overline && (
        <Grid
          item
          container
          justify={justifyGrid}
          xs={12}
          className="section-header__overline-wrapper"
        >
          {overline}
        </Grid>
      )}
      {label && (
        <Grid item xs={12} className="section-header__label-wrapper">
          <Typography
            variant="overline"
            color="primary"
            component="p"
            // component="p"
            align={align || "center"}
            {...(labelProps as any)}
          >
            {label}
          </Typography>
        </Grid>
      )}
      <Grid item xs={12} className="section-header__title-wrapper">
        <Typography
          variant={titleVariant}
          align={align || "center"}
          className={clsx(
            "section-header__title",
            classes.title,
            titleClasses ? titleClasses : {}
          )}
          color="textPrimary"
          {...titleProps}
        >
          {title}
        </Typography>
      </Grid>
      {subtitle && (
        <Grid item xs={12} className="section-header__subtitle-wrapper">
          <Typography
            variant={subtitleVariant || "h6"}
            align={align || "center"}
            color={subtitleColor || "textSecondary"}
            className="section-header__subtitle"
            {...subtitleProps}
          >
            {subtitle}
          </Typography>
        </Grid>
      )}
      {ctaGroup && ctaGroup.length && (
        <Grid item xs={12} className="section-header__cta-wrapper">
          <Grid
            container
            justify={justifyGrid}
            alignItems="center"
            wrap="nowrap"
            className="section-header__cta-container"
          >
            {ctaGroup.map((item, index) => (
              <div
                key={index}
                className={clsx(
                  "section-header__cta-item-wrapper",
                  classes.cta
                )}
              >
                {item}
              </div>
            ))}
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

SectionHeader.defaultProps = {
  titleVariant: "h4",
  labelProps: {},
  titleProps: {},
  subtitleProps: {},
};

export default SectionHeader;
