import * as React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  LazyLoadImage,
  LazyLoadImageProps,
} from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/opacity.css";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
  },
  dBlock: {
    display: "block",
  },
}));

interface IImageProps {
  /**
   * External classes
   */
  className?: string;
  /**
   * Source of the image
   */
  src: string;
  /**
   * Source set for the responsive images
   */
  srcSet?: string;
  /**
   * Image title
   */
  alt?: string;
  /**
   * Should lazy load the image
   */
  lazy?: boolean;
  /**
   * Additional properties to pass to the LazyLoadImage component
   */
  lazyProps?: LazyLoadImageProps;
}

/**
 * Component to display the images
 *
 * @param {Object} props
 */
const Image: React.FunctionComponent<IImageProps> = (props) => {
  const { src, srcSet, alt, lazy, lazyProps, className, ...rest } = props;

  const classes = useStyles();
  if (lazy) {
    return (
      <LazyLoadImage
        className={clsx("image", classes.root, classes.dBlock, className)}
        alt={alt}
        src={src}
        srcSet={srcSet}
        effect="opacity"
        {...lazyProps}
        {...rest}
      />
    );
  }

  return (
    <img
      className={clsx("image", classes.root, className)}
      alt={alt}
      src={src}
      srcSet={srcSet}
      {...rest}
    />
  );
};

Image.defaultProps = {
  alt: "...",
  lazy: true,
  lazyProps: {
    width: "auto",
    height: "auto",
  },
};

export default Image;
