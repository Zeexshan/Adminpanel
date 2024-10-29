import React from "react";
import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import { AccountCircle, Logout } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="top">
        <span className="logo">Zeeshan</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="Icon" />
            <span>DashBoard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <PersonOutlineIcon className="Icon" /> <span>Users</span>
          </li>
          <li>
            <StoreIcon className="Icon" />
            <span>Financial Profiles</span>
          </li>
          <li>
            <LocalGroceryStoreIcon className="Icon" />
            <span>Applications</span>
          </li>

          <li>
            <LocalShippingIcon className="Icon" />
            <span>Disbursements</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <EqualizerIcon className="Icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className="Icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICES</p>

          <li>
            <MonitorHeartIcon className="Icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon className="Icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="Icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>

          <li>
            <AccountCircle className="Icon" />
            <span>Profile</span>
          </li>
          <li>
            <Logout className="Icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      {/* <div className="bottom">
        <div className="colorOpt"></div>
        <div className="colorOpt"></div>
      </div> */}
    </div>
  );
};

export default Sidebar;
