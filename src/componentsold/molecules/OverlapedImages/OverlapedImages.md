**Basic Example**

```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import galley1 from "../../../images/photos/expo-gallery/gallery1.jpg";
import gallery11 from "../../../images/photos/expo-gallery/gallery1@2x.jpg";
import galley2 from "../../../images/photos/expo-gallery/gallery2.jpg";
import gallery22 from "../../../images/photos/expo-gallery/gallery2@2x.jpg";
import galley3 from "../../../images/photos/expo-gallery/gallery3.jpg";
import gallery33 from "../../../images/photos/expo-gallery/gallery3@2x.jpg";
import { theme } from "core-component-ui";

<ThemeProvider theme={theme}>
  <OverlapedImages
    image1={{
      src: galley1,
      srcSet: gallery11 + " 2x",
      alt: "...",
    }}
    image2={{
      src: galley2,
      srcSet: gallery22 + " 2x",
      alt: "...",
    }}
    image3={{
      src: galley3,
      srcSet: gallery33 + " 2x",
      alt: "...",
    }}
  />
</ThemeProvider>;
```
