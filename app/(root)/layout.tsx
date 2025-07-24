import React from "react";
import Header from "../components/layout/Header";
import AuthGuard from "../components/AuthGuard";

function layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default layout;
