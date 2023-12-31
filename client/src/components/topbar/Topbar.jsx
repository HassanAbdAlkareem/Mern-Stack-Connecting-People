import "./topbar.css";
import { Search, Chat } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
  const { user, setSearchUser } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  };
  //
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Connecting People</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend (username)"
            className="searchInput"
            onChange={(e) => setSearchUser(e.target.value)}
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink" onClick={handleClick}>
            Logout
          </span>
        </div>
        <div className="topbarIcons">
          <Link to={"/messenger"} style={{ color: "inherit" }}>
            <div className="topbarIconItem">
              <Chat />
              <span className="topbarIconBadge"></span>
            </div>
          </Link>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img src={PF + "/employee.png"} alt="" className="topbarImg" />
        </Link>
      </div>
    </div>
  );
}
