**Basic Example**

```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import theme from "../../../theme";

const browserHistory = createBrowserHistory();

<ThemeProvider theme={theme}>
  <Router history={browserHistory}>
    <LearnMoreLink title="learn more" />
  </Router>
</ThemeProvider>;
```

**Link Example**

```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Router, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import { theme } from "core-component-ui";

const browserHistory = createBrowserHistory();

<ThemeProvider theme={theme}>
  <Router history={browserHistory}>
    <LearnMoreLink
      title="learn more"
      component={Link}
      componentProps={{ to: "#hola" }}
    />
  </Router>
</ThemeProvider>;
```
