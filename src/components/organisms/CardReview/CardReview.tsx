import * as React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  TypographyProps,
  ListItemText,
} from "@material-ui/core";
import CardBase, { ICardBaseProps } from "../CardBase";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
  },
}));

type justifyGrid = "center" | "flex-end" | "flex-start";

interface ICardReviewProps extends ICardBaseProps {
  /**
   * External classes
   */
  className?: string;
  /**
   * Icon to show inside the review card
   */
  icon: React.ReactNode;
  /**
   * Review text to show inside the review card
   */
  text: string;
  /**
   * Reviewer photo to show inside the review card.Should be an object with src and srcSet properties
   */
  authorPhoto: { src: string, srcSet: string };
  /**
   * Reviewer name to show inside the review card
   */
  authorName: string;
  /**
   * Reviewer title to show inside the review card
   */
  authorTitle?: string;
  /**
   * Alignment of the content
   */
  align: "left" | "right" | "center";
  /**
   * Review text variant
   */
  textVariant?:
    | "inherit"
    | "button"
    | "overline"
    | "caption"
    | "h6"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "srOnly";
  /**
   * Additional props to pass to the text Typography component
   */
  textProps?: TypographyProps;
  /**
   * Additional props to pass to the list item primary text Typography component
   */
  listItemPrimaryTypographyProps?: object;
  /**
   * Additional props to pass to the list item secondary text Typography component
   */
  listItemSecondaryTypographyProps?: object;
}

/**
 * Component to display the review card
 *
 * @param {Object} props
 */
const CardReview: React.FunctionComponent<ICardReviewProps> = (props) => {
  const {
    icon,
    text,
    authorPhoto,
    authorName,
    authorTitle,
    align,
    textVariant,
    className,
    textProps,
    listItemPrimaryTypographyProps,
    listItemSecondaryTypographyProps,
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
    <CardBase
      className={clsx("card-review", classes.root, className)}
      {...rest}
    >
      <Grid container spacing={2} className="card-review__wrapper">
        <Grid
          item
          container
          justify={justifyGrid}
          xs={12}
          className="card-review__icon-wrapper"
        >
          {icon}
        </Grid>
        <Grid item xs={12} className="card-review__text-wrapper">
          <Typography
            variant={textVariant}
            align={align}
            component="p"
            {...(textProps as any)}
          >
            {text}
          </Typography>
        </Grid>
        <Grid item xs={12} className="card-review__lits-container">
          <Grid
            container
            justify={justifyGrid}
            className="card-review__list-wrapper"
          >
            <List disablePadding className="card-review__list">
              <ListItem className="card-review__list-item">
                <ListItemAvatar className="card-review__list-item-avatar">
                  <Avatar
                    {...authorPhoto}
                    alt={authorName}
                    className="card-review__avatar"
                  />
                </ListItemAvatar>
                <ListItemText
                  className="card-review__list-item-text"
                  primary={authorName}
                  secondary={authorTitle}
                  primaryTypographyProps={{
                    ...listItemPrimaryTypographyProps,
                  }}
                  secondaryTypographyProps={{
                    ...listItemSecondaryTypographyProps,
                  }}
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Grid>
    </CardBase>
  );
};

CardReview.defaultProps = {
  align: "center",
  textVariant: "h6",
  textProps: {},
  listItemPrimaryTypographyProps: {},
  listItemSecondaryTypographyProps: {},
};

export default CardReview;
