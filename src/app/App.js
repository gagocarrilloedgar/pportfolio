import { ThemeProvider } from "@material-ui/styles";
import { theme } from "theme"
import { CssBaseline } from '@material-ui/core';
import { Switch, Route } from "react-router-dom";
import { Landing } from 'views';

export function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Switch>
            <Route path="/index" component={Landing} />
            <Route path="/" component={Landing} />
          </Switch>
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

