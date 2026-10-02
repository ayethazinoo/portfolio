import React from "react";
import UpNav from './UpNav'
import Bottom from './Bottom'
import { Outlet } from 'react-router'

export default function Layout() {
  return (
    <div>
      <UpNav />
        <Outlet />
      <Bottom />
    </div>
  );
}
