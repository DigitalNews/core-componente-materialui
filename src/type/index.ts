import {
  TypographyTypeMap,
  StyledComponentProps,
  GridTypeMap,
} from "@material-ui/core";

type TypographyProps = TypographyTypeMap["props"];
type GridProps = GridTypeMap["props"];

export interface ITypographyProps extends TypographyProps {
  /**
   * Override or extend the styles applied to the component.
   * See CSS API below for more details.
   */
  classes?: StyledComponentProps<TypographyTypeMap["classKey"]>["classes"];
  /**
   * The component used for the root node. Either a string to use a HTML element
   * or a component. Overrides the behavior of the variantMapping prop.
   */
  component?: React.ElementType;
}

export interface IGridProps extends GridProps {
  /**
   * Override or extend the styles applied to the component.
   * See CSS API below for more details.
   */
  classes?: StyledComponentProps<GridTypeMap["classKey"]>["classes"];
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: React.ElementType;
}
