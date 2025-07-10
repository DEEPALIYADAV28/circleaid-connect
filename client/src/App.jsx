import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AdminHome from "./pages/AdminHome";
import Navbar from './components/Navbar';
import UsersTab from "./components/Admin/Tabs/UsersTab";
import NGOsTab from "./components/Admin/Tabs/NGOsTab";
import ReportsTab from "./components/Admin/Tabs/ReportsTab";
import RequestsTab from "./components/Admin/Tabs/RequestsTab";
const App=()=>{
  return(
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<AdminHome />} />
        <Route path="/admin/Users" element={<UsersTab />} />
        <Route path="/admin/NGOs" element={<NGOsTab />} />
        <Route path="/admin/Requests" element={<RequestsTab />} />
        <Route path="/admin/Reports" element={<ReportsTab />} />
        
      </Routes>
    </BrowserRouter>
  )
}
export default App