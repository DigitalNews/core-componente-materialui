import * as React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Section from "../Section";

const useStyles = makeStyles(() => ({
  root: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

interface IHeroSimpleBackgroundProps {
  /**
   * External classes
   */
  className?: string;
  /**
   * The background image of the hero
   */
  backgroundImage: string;
  /**
   * The background size of the hero
   */
  backgroundSize?: string;
  /**
   * The background position of the hero
   */
  backgroundPosition?: string;
}

/**
 * Component to display the side image hero background
 *
 * @param {Object} props
 */
const HeroSimpleBackground: React.FunctionComponent<IHeroSimpleBackgroundProps> = (
  props
) => {
  const {
    children,
    backgroundSize,
    backgroundImage,
    backgroundPosition,
    className,
    ...rest
  } = props;
  const classes = useStyles();

  const useBackground = makeStyles(() => ({
    backgroundImage: {
      backgroundImage: `url(${backgroundImage})`,
    },
    backgroundSize: {
      backgroundSize: backgroundSize,
    },
    backgroundPosition: {
      backgroundPosition: backgroundPosition,
    },
  }));
  const backgroundClasses = useBackground();

  return (
    <div
      className={clsx(
        "hero-simple-background",
        classes.root,
        className,
        backgroundClasses.backgroundImage,
        backgroundClasses.backgroundSize,
        backgroundClasses.backgroundPosition
      )}
      {...rest}
    >
      <Section className="hero-simple-background__section">{children}</Section>
    </div>
  );
};

HeroSimpleBackground.defaultProps = {
  backgroundSize: "cover",
  backgroundPosition: "center",
};

export default HeroSimpleBackground;
