import React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { mainListItems, notPartnerListItems } from "./listItems";
import styles from "./main.module.css";
import Progress from "../progress";
import AlertStack from "../alert/alertStack";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../provider";
import style from "./list.module.css";
import {
  requestFetchMember,
  requestRefreshFetchAll,
} from "../../middleware/modules/member";
import { useEffect } from "react";
import { requestFetchPartner } from "../../middleware/modules/partner";
import AppBarSign from "../appbar";

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link href="https://www.notion.so/JUGAN-COFFEE-HOME-11c388513ab74fd4bda5e6478c22abc8">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme({
  palette: {
    primary: {
      main: "#403726",
      contrastText: "#fff",
    },
    secondary: {
      main: "#f44336",
      contrastText: "#000",
    },
  },
});

interface DashboardProps {
  children: React.ReactNode;
}

export default function DashboardContent({ children }: DashboardProps) {
  const dispatch = useDispatch<AppDispatch>();
  const member = useSelector((state: RootState) => state.member);

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const isPartner = useSelector(
    (state: RootState) => state.member.data.partnerState
  );

  useEffect(() => {
    if (member.isFetched === false) {
      dispatch(requestFetchMember(1));
    }
  }, [member.isFetched]);

  return (
    <ThemeProvider theme={mdTheme}>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              component="h1"
              variant="h5"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              <Link href="/">
                <span className={style.span}>파트너 서비스</span>
              </Link>
            </Typography>
            {/* <AppBarSign /> */}
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
              backgroundColor: "#403726ce",
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon fontSize="large" htmlColor="#fff" />
            </IconButton>
          </Toolbar>
          {isPartner && (
            <>
              <Divider />
              <List>{mainListItems}</List>
              <Divider />
            </>
          )}
          {!isPartner && (
            <>
              <Divider />
              <List>{notPartnerListItems}</List>
              <Divider />
            </>
          )}
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Paper
              sx={{
                p: 8,
                display: "flex",
              }}
            >
              <main className={styles.main}>
                {children}
                <Progress />
                <AlertStack />
              </main>
            </Paper>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
