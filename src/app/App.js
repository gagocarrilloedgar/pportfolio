import { ThemeProvider } from "@material-ui/styles";
import { theme } from "theme"
import { CssBaseline } from '@material-ui/core';
import { Switch, Route } from "react-router-dom";
import { Landing, UDashboard, BDashboard } from 'views';
import { CookiesPolicy } from "common";

export function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Switch>
            <Route path="/business" component={BDashboard} />
            <Route path="/app" component={UDashboard} />
            <Route path="/index" component={Landing} />
            <Route path="/" component={Landing} />
          </Switch>
        </CssBaseline>
        <CookiesPolicy />
      </ThemeProvider>
    </div>
  );
}

