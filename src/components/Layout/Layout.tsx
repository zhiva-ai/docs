import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Navigator from "./Navigator";
import Header from "./Header";
import { ReactElement, useEffect } from "react";
import theme from "../../theme";
import { OpenAPI } from "../../services/OpenAPI";
import { NavigationContextProvider } from "./NavigationContext";
import DocHead from "./DocHead";
import { OpenAPIContextProvider } from "./OpenAPIContext";
import "./global.css";
import "katex/dist/katex.min.css";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://zhiva.org/">
        zhiva.org
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

const drawerWidth = 256;

interface Props {
  children: ReactElement;
  openApiStore: OpenAPI;
  selectedVersion?: string;
  selectedTagGroup?: string;
  selectedSchema?: string;
  selectedPage?: string;
}

export default function Layout({
  children,
  selectedVersion,
  selectedTagGroup,
  selectedPage,
  selectedSchema,
  openApiStore,
}: Props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <OpenAPIContextProvider openApi={openApiStore}>
        <NavigationContextProvider
          initialState={{
            selectedVersion: selectedVersion,
            selectedVersionSlug: selectedVersion,
            selectedTagGroup: selectedTagGroup,
            selectedPage: selectedPage,
            selectedSchema: selectedSchema,
            visibleElements: [],
          }}
        >
          <Box sx={{ display: "flex", minHeight: "100vh" }}>
            <DocHead />
            <CssBaseline />
            <Box
              component="nav"
              sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            >
              {isSmUp ? null : (
                <Navigator
                  PaperProps={{ style: { width: drawerWidth } }}
                  variant="temporary"
                  open={mobileOpen}
                  openApiItems={openApiStore.menuItems}
                  onClose={handleDrawerToggle}
                />
              )}
              <Navigator
                openApiItems={openApiStore.menuItems}
                PaperProps={{ style: { width: drawerWidth } }}
                sx={{ display: { sm: "block", xs: "none" } }}
              />
            </Box>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                width: { sm: `calc(100% - ${drawerWidth}px)`, xs: "100%" },
              }}
            >
              <Header onDrawerToggle={handleDrawerToggle} />
              <Box
                component="main"
                style={{ scrollBehavior: "smooth" }}
                sx={{ flex: 1, py: 0, px: 0, bgcolor: "#eaeff1" }}
              >
                {children}
              </Box>
              <Box component="footer" sx={{ p: 2, bgcolor: "#eaeff1" }}>
                <Copyright />
              </Box>
            </Box>
          </Box>
        </NavigationContextProvider>
      </OpenAPIContextProvider>
    </ThemeProvider>
  );
}
