// src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import {Button, Title} from "@mantine/core"

const Dashboard = () => {
  return (
    <div>
      <Title>Dashboard</Title>
      <p className="text-lg mt-2" >Summary of key metrics or features here.</p>


      <div className="flex flex-row gap-2 mt-4" >

        <Button component={Link} to="/products">Products Management</Button>

        <Button component={Link} to="/orders">Orders Management</Button>
      </div>

    </div>
  );
}

export default Dashboard;
