import * as React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CardBase from "../CardBase";
import DescriptionListIcon from "../DescriptionListIcon";
import { ICardBaseProps } from "../CardBase/CardBase";

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
    width: "100%",
  },
}));

export interface ICardCategoryProps extends Omit<ICardBaseProps, "children"> {
  /**
   * External classes
   */
  className?: string;
  /**
   * Icon to show inside the category card
   */
  icon: React.ReactNode;
  /**
   * Category title to show inside the category card
   */
  title: string;
  /**
   * The content alignment
   */
  align?: "left" | "right" | "center";
}

/**
 * Component to display the category card
 *
 * @param {Object} props
 */
const CardCategory: React.FunctionComponent<ICardCategoryProps> = (props) => {
  const { icon, title, align, className, ...rest } = props;

  const classes = useStyles();

  return (
    <CardBase className={clsx(classes.root, className)} {...rest}>
      <DescriptionListIcon icon={icon} title={title} align={align} />
    </CardBase>
  );
};

CardCategory.defaultProps = {
  align: "center",
};

export default CardCategory;
