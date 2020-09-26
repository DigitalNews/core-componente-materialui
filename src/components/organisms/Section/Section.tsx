import * as React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 1100,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(6, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(12, 2),
    },
  },
  fullWidth: {
    maxWidth: '100%',
  },
  disablePadding: {
    padding: 0,
  },
  narrow: {
    maxWidth: 800,
  },
}));



interface ISectionProps {
   /**
   * External classes
   */
  className?: string,
  /**
   * Children to placed inside the section
   */
  children?: React.ReactNode,
  /**
   * Should show narrow sections
   */
  narrow?: boolean,
  /**
   * Should the section be full width
   */
  fullWidth?: boolean,
  /**
   * Should the section render with no padding
   */
  disablePadding?: boolean,
}

/**
 * Component to display the sections
 *
 * @param {Object} props
 */

const Section: React.FunctionComponent<ISectionProps> = (props) => {
  const {
    children,
    fullWidth,
    narrow,
    disablePadding,
    //alternate,
    className,
    ...rest
  } = props;

  const classes = useStyles();

  return (
    <section
      className={clsx(
        'section',
        classes.root,
        fullWidth ? classes.fullWidth : {},
        narrow ? classes.narrow : {},
        disablePadding ? classes.disablePadding : {},
        //alternate ? classes.alternate : {},
        className,
      )}
      {...rest}
    >
      {children}
    </section>
  );
};

export default Section;
