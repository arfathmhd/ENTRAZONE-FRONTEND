import React from "react";
import Header from "../components/layout/Header";
import AuthGuard from "../components/AuthGuard";

function layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <AuthGuard requireProfileComplete requireCourseSelection>
      <Header />
      {children}
    </AuthGuard>
  );
}

export default layout;
