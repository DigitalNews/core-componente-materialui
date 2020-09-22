interface Shape {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
}

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
