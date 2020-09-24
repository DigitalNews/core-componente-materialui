import * as React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.light,
  },
  inner: {
    maxWidth: 1100,
    width: "100%",
    margin: "0 auto",
    padding: theme.spacing(6, 2),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(12, 2),
    },
  },
  innerNarrowed: {
    maxWidth: 800,
  },
}));

interface ISectionAlternateProps {
  /**
   * External classes
   */
  className?: string;
  /**
   * Children to placed inside the section
   */
  children?: React.ReactNode;
  /**
   * Should show narrow sections
   */
  innerNarrowed?: boolean;
}

/**
 * Component to display the alternative sections
 *
 * @param {Object} props
 */
const SectionAlternate: React.FunctionComponent<ISectionAlternateProps> = (
  props
) => {
  const { children, innerNarrowed, className, ...rest } = props;

  const classes = useStyles();

  return (
    <section
      className={clsx("section-alternate", classes.root, className)}
      {...rest}
    >
      <div
        className={clsx(
          "section-alternate__content",
          classes.inner,
          innerNarrowed ? classes.innerNarrowed : {}
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionAlternate;
