import type { NextPage } from "next";
import DashboardContent from "../components/material/Dashboard";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import styles from "./product/product.module.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../provider";
import { nanoid } from "@reduxjs/toolkit";
import {
  checkSubscribe,
  receiveSubscribeEvent,
  SubscribeMessage,
} from "../provider/modules/subscribe";
import { Alert } from "react-bootstrap";
import { useRouter } from "next/dist/client/router";

const Home: NextPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const subscribeMessage = useSelector(
    (state: RootState) => state.subscribe.message
  );
  const router = useRouter();

  useEffect(() => {
    let clientId = sessionStorage.getItem("event-client-id");
    if (!clientId) {
      clientId = nanoid();
      sessionStorage.setItem("event-client-id", clientId);
    }

    const eventUrl = `http://localhost:8082/event/${clientId}`;
    const eventSource = new EventSource(eventUrl);

    eventSource.onmessage = (event) => {
      console.log(event.data);
      console.log(new Date().getTime() + ": " + event.data);
      if (event.data !== "connect") {
        const data: SubscribeMessage = JSON.parse(event.data);
        console.log(data);
        dispatch(receiveSubscribeEvent(data));
      }
    };
  }, []);

  const handleCheck = (subscribeId: number) => {
    dispatch(checkSubscribe(subscribeId));
  };

  return (
    <>
      <DashboardContent>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={8}>
              <Typography
                component="h1"
                variant="h5"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                차트
              </Typography>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 280,
                }}
              ></Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={4}>
              <Typography
                component="h1"
                variant="h5"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                주문알리미
              </Typography>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 280,
                  overflow: "auto",
                }}
              >
                {subscribeMessage &&
                  subscribeMessage.map(
                    (item, index) =>
                      !item.orderCheck && (
                        <Alert
                          style={{ borderRadius: "15px" }}
                          key={`alert-${index}`}
                          // variant={item.variant}
                          onClose={() => {
                            handleCheck(item.subscribeId);
                          }}
                          dismissible
                        >
                          <div className="ms-2 mb-1 fs-3">주문이요!</div>
                          <div className="float-end fs-5">
                            {item.subscribeDate}
                          </div>
                          <button
                            className={`${styles.button} btn btn-primary ms-2 mt-0`}
                            onClick={() => {
                              router.push("/subscribe");
                              handleCheck(item.subscribeId);
                            }}
                          >
                            주문목록
                          </button>
                        </Alert>
                      )
                  )}
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Typography
                component="h1"
                variant="h5"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                최근등록 제품
              </Typography>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 300,
                }}
              ></Paper>
            </Grid>
          </Grid>
        </Container>
      </DashboardContent>
    </>
  );
};

export default Home;
