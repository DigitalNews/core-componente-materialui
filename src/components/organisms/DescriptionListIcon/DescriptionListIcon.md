**Example with Normal Icon**

```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { colors } from "@material-ui/core";
import { Icon, theme } from "core-component-ui";

<ThemeProvider theme={theme}>
  <DescriptionListIcon
    title="Coworking communities"
    subtitle="Connect in spaces designed to bring incredible people together. Learn with them and take your project to new heights."
    icon={
      <Icon
        fontIconClass="far fa-address-book"
        size="large"
        fontIconColor={colors.purple[500]}
      />
    }
  />
</ThemeProvider>;
```

**Example with Alternate Icon**

```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { colors } from "@material-ui/core";
import { IconAlternate, theme } from "core-component-ui";

<ThemeProvider theme={theme}>
  <DescriptionListIcon
    title="Coworking communities"
    subtitle="Connect in spaces designed to bring incredible people together. Learn with them and take your project to new heights."
    icon={
      <IconAlternate
        fontIconClass="far fa-address-book"
        size="medium"
        color={colors.purple}
      />
    }
  />
</ThemeProvider>;
```

**Aligned Left**

```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { colors } from "@material-ui/core";
import { IconAlternate, theme } from "core-component-ui";

<ThemeProvider theme={theme}>
  <DescriptionListIcon
    title="Coworking communities"
    subtitle="Connect in spaces designed to bring incredible people together. Learn with them and take your project to new heights."
    icon={
      <IconAlternate
        fontIconClass="far fa-address-book"
        size="medium"
        color={colors.blue}
      />
    }
    align="left"
  />
</ThemeProvider>;
```

**Aligned Right**

```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { colors } from "@material-ui/core";
import { IconAlternate, theme } from "core-component-ui";

<ThemeProvider theme={theme}>
  <DescriptionListIcon
    title="Coworking communities"
    subtitle="Connect in spaces designed to bring incredible people together. Learn with them and take your project to new heights."
    icon={
      <IconAlternate
        fontIconClass="far fa-address-book"
        size="medium"
        color={colors.blue}
      />
    }
    align="right"
  />
</ThemeProvider>;
```
