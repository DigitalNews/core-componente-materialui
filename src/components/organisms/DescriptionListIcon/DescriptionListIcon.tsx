import * as React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, TypographyProps } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  title: {
    fontWeight: 700,
  },
}));

type variant =
  | "inherit"
  | "button"
  | "overline"
  | "caption"
  | "h6"
  | "body1"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "subtitle1"
  | "subtitle2"
  | "body2"
  | "srOnly";

type justifyGrid = "center" | "flex-end" | "flex-start";

export interface IDescriptionListIconProps {
  /**
   * External classes
   */
  className?: string;
  /**
   * The title
   */
  title: string;
  /**
   * the subtitle
   */
  subtitle?: string;
  /**
   * Whether should show the alternate icon
   */
  icon: React.ReactNode;
  /**
   * The alignment of the items
   */
  align?: "left" | "right" | "center";
  /**
   * Title variant
   */
  titleVariant?: variant;
  /**
   * Subtitle variant
   */
  subtitleVariant?: variant;
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
 * Component to display the description list with icon
 *
 * @param {Object} props
 */
const DescriptionListIcon: React.FunctionComponent<IDescriptionListIconProps> = (
  props
) => {
  const {
    title,
    subtitle,
    icon,
    align,
    titleVariant,
    subtitleVariant,
    className,
    titleProps,
    subtitleProps,
    ...rest
  } = props;

  const classes = useStyles();

  let gridJustify: justifyGrid = "center";

  if (align === "left") {
    gridJustify = "flex-start";
  } else if (align === "right") {
    gridJustify = "flex-end";
  }

  return (
    <Grid
      container
      spacing={2}
      {...rest}
      className={clsx("description-list-icon", classes.root, className)}
    >
      <Grid
        item
        container
        justify={gridJustify}
        xs={12}
        className="description-list-icon__icon-wrapper"
      >
        {icon}
      </Grid>
      <Grid item xs={12} className="description-list-icon__title-wrapper">
        <Typography
          variant={titleVariant}
          color="textPrimary"
          align={align}
          className={clsx(classes.title, "description-list-icon__title")}
          {...titleProps}
        >
          {title}
        </Typography>
      </Grid>
      {subtitle && (
        <Grid item xs={12} className="description-list-icon__subtitle-wrapper">
          <Typography
            variant={subtitleVariant}
            color="textSecondary"
            align={align}
            className="description-list-icon__subtitle"
            {...subtitleProps}
          >
            {subtitle}
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

DescriptionListIcon.defaultProps = {
  align: "center",
  titleVariant: "h6",
  subtitleVariant: "body1",
  titleProps: {},
  subtitleProps: {},
};

export default DescriptionListIcon;
