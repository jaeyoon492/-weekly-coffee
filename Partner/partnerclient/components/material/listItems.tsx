import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Link from "next/link";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import StoreIcon from "@mui/icons-material/Store";
import styles from "./list.module.css";
import HomeIcon from "@mui/icons-material/Home";

export const mainListItems = (
  <div className={styles.div}>
    <ListItem button>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <Link href="/">
        <a>메인으로</a>
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PointOfSaleIcon />
      </ListItemIcon>
      <Link href="/product/edit/create">
        <a>제품등록</a>
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FormatListNumberedIcon />
      </ListItemIcon>
      <Link href="/product">
        <a>제품목록</a>
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <StoreIcon />
      </ListItemIcon>
      <Link href="/subscribe">
        <a>주문관리</a>
      </Link>
    </ListItem>
  </div>
);

export const notPartnerListItems = (
  <div className={styles.div}>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <Link href="/registration">
        <a>입점신청</a>
      </Link>
    </ListItem>
  </div>
);
