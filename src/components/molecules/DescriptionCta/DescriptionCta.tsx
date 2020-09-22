import * as React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  useMediaQuery,
  Grid,
  Typography,
  GridProps,
  TypographyProps,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

type justifyGrid = "center" | "flex-end" | "flex-start";

interface IDescriptionCtaProps {
  /**
   * External classes
   */
  className?: string;
  /**
   * Title of the list
   */
  title: string;
  /**
   * Subtitle of the list
   */
  subtitle?: string;
  /**
   * Primary CTA of the list
   */
  primaryCta?: React.ReactNode;
  /**
   * Secondary CTA of the list
   */
  secondaryCta?: React.ReactNode;
  /**
   * Alignment
   */
  align?: "left" | "right" | "center";
  /**
   * Additional properties to pass to the wrapper Grid item components
   */
  wrapperProps?: GridProps;
  /**
   * Additional properties to pass to the title Typography components
   */
  titleProps?: TypographyProps;
  /**
   * Additional properties to pass to the subtitle Typography components
   */
  subtitleProps?: TypographyProps;
  /**
   * Additional properties to pass to the button group div container
   */
  buttonGroupProps?: GridProps;
  /**
   * Additional properties to pass to the primary button wrapper div container
   */
  primaryButtonWrapperProps?: GridProps;
  /**
   * Additional properties to pass to the secondary button wrapper div container
   */
  secondaryButtonWrapperProps?: GridProps;
}

const DescriptionCta: React.FunctionComponent<IDescriptionCtaProps> = (
  props
) => {
  const {
    title,
    subtitle,
    primaryCta,
    secondaryCta,
    align,
    className,
    wrapperProps,
    titleProps,
    subtitleProps,
    buttonGroupProps,
    primaryButtonWrapperProps,
    secondaryButtonWrapperProps,
    ...rest
  } = props;

  const classes = useStyles();

  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up("sm"), {
    defaultMatches: true,
  });

  let justifyGrid: justifyGrid = "center";
  if (align === "left") {
    justifyGrid = isSm ? "flex-end" : "flex-start";
  } else if (align === "right") {
    justifyGrid = isSm ? "flex-start" : "flex-end";
  }

  return (
    <Grid
      container
      spacing={2}
      justify="space-between"
      alignItems="center"
      className={clsx("description-cta", classes.root, className)}
      {...rest}
    >
      <Grid item className="description-cta__wrapper" {...wrapperProps}>
        <Typography
          variant="h5"
          align={align}
          gutterBottom
          className="description-cta__title"
          {...titleProps}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant="subtitle1"
            align={align}
            color="textSecondary"
            className="description-cta__subtitle"
            {...subtitleProps}
          >
            {subtitle}
          </Typography>
        )}
      </Grid>
      <Grid item>
        <Grid
          container
          justify={justifyGrid}
          spacing={1}
          className="description-cta__button-group"
          {...buttonGroupProps}
        >
          <Grid
            item
            className="description-cta__primary-button-wrapper"
            {...primaryButtonWrapperProps}
          >
            {primaryCta}
          </Grid>
          {secondaryCta && (
            <Grid
              item
              className={clsx("description-cta__secondary-button-wrapper")}
              {...secondaryButtonWrapperProps}
            >
              {secondaryCta}
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

DescriptionCta.defaultProps = {
  align: "center",
  wrapperProps: {},
  titleProps: {},
  subtitleProps: {},
  buttonGroupProps: {},
  primaryButtonWrapperProps: {},
  secondaryButtonWrapperProps: {},
};

export default DescriptionCta;
