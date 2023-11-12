import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WalletIcon from "@mui/icons-material/Wallet";
import MessageIcon from "@mui/icons-material/Message";
import CallIcon from "@mui/icons-material/Call";
import HistoryIcon from "@mui/icons-material/History";
import HelpIcon from "@mui/icons-material/Help";

export const mainNavbarItems = [
  {
    id: 2,
    icon: <DashboardIcon />,
    label: "Overview",
    route: "overview",
  },
  {
    id: 3,
    icon: <CalendarMonthIcon />,
    label: "Calendar",
    route: "calendar",
  },
  {
    id: 4,
    icon: <WalletIcon />,
    label: "Wallet",
    route: "wallet",
  },
  {
    id: 5,
    icon: <MessageIcon />,
    label: "Messaging",
    route: "chat",
  },
  {
    id: 6,
    icon: <CallIcon />,
    label: "Audio/Visual Call",
    route: "audio-visual",
  },
  {
    id: 7,
    icon: <HistoryIcon />,
    label: "History",
    route: "history",
  },
  {
    id: 8,
    icon: <HelpIcon />,
    label: "Tech Support",
    route: "tech-support",
  },
];
