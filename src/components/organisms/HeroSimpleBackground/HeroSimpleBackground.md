**Basic Example**

```jsx
import React from "react";
import { ThemeProvider, useTheme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import ima from "../../../images/shapes/banner-bg.svg";
import { SectionHeader, Section, theme } from "core-component-ui";
<ThemeProvider theme={theme}>
  <HeroSimpleBackground backgroundImage={ima}>
    <Section narrow>
      <SectionHeader
        title="Supercharge Your Web Product's UI/UX Design"
        titleVariant="h2"
        subtitle="Our mission is to help you to grow your design skills, meet and connect with professional dsigners who share your passions. We help you fulfill your best potential through an engaging lifestyle experience."
        ctaGroup={[
          <Button color="primary" variant="contained" size="large">
            Try for free
          </Button>,
          <Button color="primary" variant="outlined" size="large">
            See pricings
          </Button>,
        ]}
      />
    </Section>
  </HeroSimpleBackground>
</ThemeProvider>;
```
