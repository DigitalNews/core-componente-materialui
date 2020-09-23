import * as React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { colors, Typography, TypographyProps } from "@material-ui/core";
import { Icon } from "../../atoms";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: `solid 1px rgba(43, 41, 45, 0.2)`,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2),
    background: "transparent",
    cursor: "pointer",
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(3),
    },
    "&:hover": {
      background: theme.palette.primary.main,
      boxShadow:
        "0 11px 55px 10px rgba(0, 0, 0, 0.07), 0 13px 18px -8px rgba(0, 0, 0, 0.15)",
      "& .card-job-minimal__title, & .card-job-minimal__location, & .card-job-minimal__arrow": {
        color: "white !important",
      },
    },
  },
  cardJobMinimalBody: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      marginRight: theme.spacing(8),
    },
  },
  title: {
    fontWeight: "bold",
  },
}));

interface ICardJobMinimalProps {
  /**
   * External classes
   */
  className?: string;
  /**
   * Job title of the card
   */
  title: string;
  /**
   * Job subtitle of the card
   */
  subtitle: string;
  /**
   * Should show arrow or not
   */
  showArrow?: boolean;
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
 * Component to display the job card company
 *
 * @param {Object} props
 */
const CardJobMinimal: React.FunctionComponent<ICardJobMinimalProps> = (
  props
) => {
  const {
    title,
    subtitle,
    showArrow,
    titleProps,
    subtitleProps,
    className,
    ...rest
  } = props;

  const classes = useStyles();

  return (
    <div className={clsx(classes.root, "card-job-minimal")} {...rest}>
      <div
        className={clsx(classes.cardJobMinimalBody, "card-job-minimal__body")}
        style={!showArrow ? { marginRight: 0 } : {}}
      >
        <div
          className={clsx(
            // classes.cardJobMinimalTitleContainer,
            "card-job-minimal__title-container"
          )}
        >
          <Typography
            variant="subtitle1"
            className={clsx(classes.title, "card-job-minimal__title")}
            {...titleProps}
          >
            {title}
          </Typography>
        </div>
        <div
          className={clsx(
            // classes.cardJobMinimalTitleContainer,
            "card-job-minimal__location-conatiner"
          )}
        >
          <Typography
            variant="body2"
            color="textSecondary"
            className="card-job-minimal__location"
            //className={clsx(classes.location, 'card-job-minimal__location')}
            {...subtitleProps}
          >
            {subtitle}
          </Typography>
        </div>
      </div>
      {showArrow ? (
        <div
          className={clsx(
            // classes.cardJobMinimalTitleContainer,
            "card-job-minimal__arrow-container"
          )}
        >
          <Icon
            fontIconClass="fas fa-angle-right"
            fontIconColor={colors.grey[700]}
            className="card-job-minimal__arrow"
            // className={clsx(classes.arrow, 'card-job-minimal__arrow')}
          />
        </div>
      ) : null}
    </div>
  );
};

CardJobMinimal.defaultProps = {
  showArrow: false,
  titleProps: {},
  subtitleProps: {},
};

export default CardJobMinimal;
