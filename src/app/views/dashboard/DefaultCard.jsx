import React from "react";
import { Card, Icon } from "@material-ui/core";

const DashboardCard = ({ title, subtitle, icon, backgroundClass }) => {
  return (
    <Card
      elevation={3}
      className={`dashboard-card h-100 ${
        backgroundClass ? backgroundClass : "bg-circle-primary"
      }`}
    >
      <div className="flex flex-middle flex-space-between">
        <div className="icon-container">
          <Icon className="icon">{icon}</Icon>
        </div>
      </div>
      <div className="title-container text-white">
        <p className="m-0 mb-8 title">{title}</p>
        <p className="m-0 subtitle">{subtitle}</p>
      </div>
    </Card>
  );
};

export default DashboardCard;