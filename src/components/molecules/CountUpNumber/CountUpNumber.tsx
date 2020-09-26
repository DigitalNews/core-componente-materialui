import * as React from "react";
import VisibilitySensor from "react-visibility-sensor";
import CountUp, { CountUpProps } from "react-countup";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, TypographyProps } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {},
}));

// iterface to VisibilitySensor
interface Shape {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
}

// iterface to VisibilitySensor
export interface VisibilitySensorProps {
  onChange?: (isVisible: boolean) => void;
  active?: boolean;
  partialVisibility?: boolean;
  offset?: Shape;
  minTopValue?: number;
  intervalCheck?: boolean;
  intervalDelay?: number;
  scrollCheck?: boolean;
  scrollDelay?: number;
  scrollThrottle?: number;
  resizeCheck?: boolean;
  resizeDelay?: number;
  resizeThrottle?: number;
  containment?: any;
  delayedCall?: boolean;
  children?:
    | React.ReactNode
    | ((args: {
        isVisible: boolean;
        visibilityRect?: Shape;
      }) => React.ReactNode);
}

interface ICountUpNumberProps {
  /**
   * External classes
   */
  className?: string;
  /**
   * The Suffix of the count up number
   */
  suffix?: string;
  /**
   * The Prefix of the count up number
   */
  prefix?: string;
  /**
   * Starting number
   */
  start?: number;
  /**
   * End number
   */
  end: number;
  /**
   * Label of the CountUpNumber
   */
  label: React.ReactNode;
  /**
   * Text color
   */
  textColor?:
    | "inherit"
    | "initial"
    | "textPrimary"
    | "primary"
    | "secondary"
    | "textSecondary"
    | "error";
  /**
   * Label color
   */
  labelColor?:
    | "inherit"
    | "initial"
    | "textPrimary"
    | "primary"
    | "secondary"
    | "textSecondary"
    | "error";
  /**
   * Additional properties to pass to the VisibilitySensor Component
   */
  visibilitySensorProps?: VisibilitySensorProps;
  /**
   * Additional properties to pass to the wrapper div
   */
  wrapperProps?: object;
  /**
   * Additional properties to pass to the count wrapper Typography component.
   * For more info visit https://material-ui.com/api/typography/
   */
  countWrapperProps?: TypographyProps;
  /**
   * Additional properties to pass to the CountUp React component
   */
  countNumberProps?: CountUpProps;
  /**
   * Additional properties to pass to the label Typography component.
   * For more info visit https://material-ui.com/api/typography/
   */
  labelProps?: TypographyProps;
}

/**
 * Component to display the Count Up Numbers
 *
 * @param {Object} props
 */
const CountUpNumber: React.FunctionComponent<ICountUpNumberProps> = (props) => {
  const {
    start,
    end,
    suffix,
    prefix,
    label,
    textColor,
    labelColor,
    className,
    visibilitySensorProps,
    wrapperProps,
    countWrapperProps,
    countNumberProps,
    labelProps,
    ...rest
  } = props;

  const classes = useStyles();

  const [viewPortEntered, setViewPortEntered] = React.useState(false);
  const setViewPortVisibility = (isVisible: boolean) => {
    if (viewPortEntered) {
      return;
    }

    setViewPortEntered(isVisible);
  };

  return (
    <div className={clsx("countup-number", classes.root, className)} {...rest}>
      <VisibilitySensor
        onChange={(isVisible) => setViewPortVisibility(isVisible)}
        delayedCall
        // className="countup-number__visibility-sensor"
        {...visibilitySensorProps}
      >
        <div className="countup-number__wrapper" {...wrapperProps}>
          <Typography
            variant="h4"
            gutterBottom
            align="center"
            color={textColor || "textPrimary"}
            className="countup-number__count-wrapper"
            {...countWrapperProps}
          >
            <CountUp
              delay={1}
              redraw={false}
              end={viewPortEntered ? end : start || 0}
              start={start}
              suffix={suffix || ""}
              prefix={prefix || ""}
              className="countup-number__count"
              {...countNumberProps}
            />
          </Typography>
          <Typography
            variant="subtitle1"
            color={labelColor || "textSecondary"}
            align="center"
            className="countup-number__label"
            {...labelProps}
          >
            {label}
          </Typography>
        </div>
      </VisibilitySensor>
    </div>
  );
};

CountUpNumber.defaultProps = {
  start: 0,
  visibilitySensorProps: {},
  wrapperProps: {},
  countWrapperProps: {},
  labelProps: {},
};

export default CountUpNumber;
