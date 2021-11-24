import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const sidebarRoot = document.getElementById('sidebar');

const Sidebar = ({ children, types }) => {
  const elRef = useRef(null);

  const relatedTypes = types.map(typeData => typeData.type.name);

  if (!elRef.current){
    elRef.current = document.createElement('div');
  }

  useEffect (() => {
    sidebarRoot.appendChild(elRef.current);
    return () => {modalRoot.removeChild(elref.current)}
  });

  return createPortal(<div>{children}</div>, sidebarRoot);

}

export default Sidebar;