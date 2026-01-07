import React, { useEffect, useState } from "react";
import dashboardService from "../services/dashboardService";

export default function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    dashboardService.getStats().then(setStats);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      {stats && (
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="shadow p-4">Users: {stats.users}</div>
          <div className="shadow p-4">Orders: {stats.orders}</div>
          <div className="shadow p-4">Revenue: {stats.revenue}</div>
        </div>
      )}
    </div>
  );
}