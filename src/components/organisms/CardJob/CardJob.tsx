import * as React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";
import CardBase, { ICardBaseProps } from "../CardBase";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
  },
  dot: {
    display: "inline-block",
    width: theme.spacing(1),
    height: theme.spacing(1),
    background: theme.palette.text.primary,
    borderRadius: "100%",
    marginRight: theme.spacing(1),
  },
  dotBig: {
    width: theme.spacing(2),
    height: theme.spacing(2),
  },
  dotSmall: {
    width: theme.spacing(1 / 2),
    height: theme.spacing(1 / 2),
  },
  jobTitle: {
    fontWeight: 700,
  },
  dotMargin: {
    margin: theme.spacing(0, 1),
  },
}));

export interface ICardJobProps extends ICardBaseProps {
  /**
   * External classes
   */
  className?: string;
  /**
   * Badge color of the job card
   */
  badgeColor: string;
  /**
   * Badge title of the job card
   */
  badgeTitle: string;
  /**
   * Job title of the card
   */
  jobTitle: string;
  /**
   * Job location of the card
   */
  jobLocation: string;
  /**
   * Job type of the card
   */
  jobType: string;
  /**
   * Job location of the card
   */
  jobDate: string;
  /**
   * Company logo of the card
   */
  companyLogo: string;
  /**
   * Company name of the card
   */
  companyName: string;
}

/**
 * Component to display the job card
 *
 * @param {Object} props
 */
const CardJob: React.FunctionComponent<ICardJobProps> = (props) => {
  const {
    badgeColor,
    badgeTitle,
    jobTitle,
    jobLocation,
    jobType,
    jobDate,
    companyLogo,
    companyName,
    className,
    ...rest
  } = props;

  const classes = useStyles();

  return (
    <CardBase
      className={clsx("card-job", classes.root, className)}
      align="left"
      {...rest}
    >
      <Grid container spacing={2}>
        <Grid item container alignItems="center" xs={12}>
          <span
            className={clsx(classes.dot, classes.dotBig)}
            style={{ background: badgeColor }}
          />
          <Typography component="span" variant="body2" color="textPrimary">
            {badgeTitle}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.jobTitle}>
            {jobTitle}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item container alignItems="center" xs={12}>
          <Typography
            component="span"
            variant="subtitle1"
            color="textSecondary"
          >
            {jobLocation}
          </Typography>
          <span
            className={clsx(classes.dot, classes.dotSmall, classes.dotMargin)}
          />
          <Typography
            component="span"
            variant="subtitle1"
            color="textSecondary"
          >
            {jobType}
          </Typography>
        </Grid>
      </Grid>
      <ListItem disableGutters>
        <ListItemAvatar>
          <Avatar src={companyLogo} alt={companyName} />
        </ListItemAvatar>
        <ListItemText primary={companyName} secondary={jobDate} />
      </ListItem>
    </CardBase>
  );
};

export default CardJob;