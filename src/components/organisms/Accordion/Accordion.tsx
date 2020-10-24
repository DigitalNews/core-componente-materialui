/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import * as React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  TypographyProps,
  Grid,
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import LearnMoreLink, {
  ILearnMoreLinkProps,
} from "../../atoms/LearnMoreLink/LearnMoreLink";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  expandOpen: {
    transform: "rotate(180deg)",
    color: theme.palette.primary.dark,
  },
  listItem: {
    cursor: "pointer",
  },
}));

interface IAccordionProps {
  /**
   * Classname from the parent component
   */
  className?: string;
  /**
   * Items to show inside the accordion
   */
  items: Array<{
    id: string;
    text: string;
    link?: string;
    subtitle?: string;
    title: string;
  }>;
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
  /**
   * Additional properties to pass to the text Typography component.
   * For more info visit https://material-ui.com/api/typography/
   */
  textProps?: TypographyProps;
  /**
   * Additional properties to pass to the link component.
   * For more info visit https://material-ui.com/api/typography/
   */
  linkProps?: ILearnMoreLinkProps<any>;
}

/**
 * Component to display accordion view
 *
 * @param {*} props
 */
const Accordion: React.FunctionComponent<IAccordionProps> = (props) => {
  const {
    items,
    className,
    titleProps,
    subtitleProps,
    textProps,
    linkProps,
    ...rest
  } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx("accordion", classes.root, className)}>
      {items.map((item) => (
        <MuiAccordion
          className={clsx("accordion__item-wrapper", classes.listItem)}
          key={item.id}
        >
          <MuiAccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${item.id}-content`}
            id={item.id}
          >
            <Grid
              container
              spacing={0}
              className="accorion__item-text-container"
            >
              <Grid item xs={12} className="accorion__item-title-container">
                <Typography
                  variant="h6"
                  color="textPrimary"
                  className="accorion_item-title"
                  {...titleProps}
                >
                  {item.title}
                </Typography>
              </Grid>
              {item.subtitle && (
                <Grid item xs={12} className="accorion_item-subtitle-container">
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    className="accorion_item-subtitle"
                    {...subtitleProps}
                  >
                    {item.subtitle}
                  </Typography>
                </Grid>
              )}
            </Grid>
          </MuiAccordionSummary>
          <MuiAccordionDetails>
            <Grid
              container
              spacing={2}
              className="accordion__collapsable-text-container"
            >
              <Grid
                item
                xs={12}
                className="accordion__collapsable-text-wrapper"
              >
                <Typography
                  variant="body1"
                  color="textPrimary"
                  className="accordion__collapsable-text"
                  {...textProps}
                >
                  {item.text}
                </Typography>
              </Grid>
              {item.link && (
                <Grid
                  item
                  xs={12}
                  className="accordion__collapsable-link-wrapper"
                >
                  <LearnMoreLink
                    title={item.link}
                    variant="body1"
                    className="accordion__collapsable-link"
                    {...linkProps}
                  />
                </Grid>
              )}
            </Grid>
          </MuiAccordionDetails>
        </MuiAccordion>
      ))}
    </div>
  );
};

Accordion.defaultProps = {
  titleProps: {},
  subtitleProps: {},
  textProps: {},
};

export default Accordion;
