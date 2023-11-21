
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WalletIcon from "@mui/icons-material/Wallet";
import MessageIcon from "@mui/icons-material/Message";
import HistoryIcon from "@mui/icons-material/History";
import HelpIcon from "@mui/icons-material/Help";

export const mainNavbarItems = [
  {
    id: 1,
    icon: <CalendarMonthIcon />,
    label: "Calendar",
    route: "/calendar",
  },
  {
    id: 2,
    icon: <WalletIcon />,
    label: "Wallet",
    route: "/wallet",
  },
  {
    id: 3,
    icon: <MessageIcon />,
    label: "Messaging",
    route: "/chat",
  },
  {
    id: 4,
    icon: <HelpIcon />,
    label: "Tech Support",
    route: "/tech-support",
  },
];
