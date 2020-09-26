**Basic Example**

```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import "swiper/swiper-bundle.css";
// import "swiper/css/swiper.min.css";
import { theme } from "core-component-ui";
import pace from "../../../images/photos/coworking/place2.jpg";
import place11 from "../../../images/photos/coworking/place3.jpg";

<ThemeProvider theme={theme}>
  <SwiperImage
    style={{
      width: 500,
      height: 300,
    }}
    items={[
      {
        src: pace,
        srcset: pace + " 2x",
        alt: "...",
      },
      {
        src: place11,
        srcset: place11 + " 2x",
        alt: "...",
      },
    ]}
  />
</ThemeProvider>;
```
