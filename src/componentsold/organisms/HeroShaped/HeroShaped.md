```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import image from "../../../images/photos/coworking/place1.jpg";
import { SectionHeader, Image, theme } from "core-component-ui";

<ThemeProvider theme={theme}>
  <HeroShaped
    leftSide={
      <SectionHeader
        title="Coworking made easy"
        subtitle="For entrepreneurs, startups and freelancers. Discover coworking spaces designed to inspire and to connect you to a community of motivated people."
        ctaGroup={[
          <Button variant="contained" color="primary">
            Book
          </Button>,
          <Button variant="outlined" color="primary">
            Browse
          </Button>,
        ]}
        align="left"
      />
    }
    rightSide={<Image src={image} alt="..." style={{ objectFit: "cover" }} />}
  />
</ThemeProvider>;
```
