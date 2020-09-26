**Basic Example**

```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import { theme } from "core-component-ui";

<ThemeProvider theme={theme}>
  <CountUpNumber end={458} suffix="K" label="Placement" />
</ThemeProvider>;
```
