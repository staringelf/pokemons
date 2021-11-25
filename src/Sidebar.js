import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const sidebarRoot = document.getElementById('sidebar');

const Sidebar = ({ children, types }) => {
  const elRef = useRef(null);

  if (!elRef.current){
    elRef.current = document.createElement('div');
  }

  useEffect (() => {
    sidebarRoot.appendChild(elRef.current);
    return () => {sidebarRoot.removeChild(elref.current)}
  });

  return createPortal(<div>{children}</div>, sidebarRoot);

}

export default Sidebar;