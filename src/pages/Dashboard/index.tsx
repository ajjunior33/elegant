import { useState } from "react";
import { ToggleOn } from "../../components/Navbar/ToggleOn";
import { ToggleOff } from "../../components/Navbar/ToggleOff";
const Dashboard = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  return <>{toggleMenu === true ? <ToggleOn /> : <ToggleOff />}</>;
};

export { Dashboard };
