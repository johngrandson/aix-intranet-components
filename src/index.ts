import Footer from "./AdminFooter";
import AdminNavbar from "./AdminNavbar";
import Sidebar from "./Sidebar";
import Authorized from "./Authorized";
import UserHeader from "./UserHeader";
import './assets/scss/argon-dashboard-react.scss';
import AdminLayout from "./AdminLayout";
import Container from "./Container";
import Pagination, { PaginationEventOptions } from "./Pagination";
import Confirm from "./Confirm";


// services
export {
  hasRole,
  getUser
}
  from "./services/";

// components
export {
  Container,
  Footer,
  AdminNavbar,
  Sidebar,
  Authorized,
  UserHeader,
  AdminLayout,
  PaginationEventOptions,
  Pagination,
  Confirm
};
