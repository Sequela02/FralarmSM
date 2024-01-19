// Importing required modules and components
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Main Page/Header';
import { Toaster, toast } from 'sonner';
import HomePage from './components/Main Page/HomePage';
import ClientManagementPage from "./components/ClientManagement/ClientManagementPage";
import ProjectManagementPage from "./components/ProjectManagementPage/ProjectDashboard";
import InventoryManagementPage from "./components/InventoryManagement/InventoryDashboard";
import CompanyManagementPage from "./components/CompanyManagement/CompanyDashboard";


/**
 * App Component
 *
 * This is the main component that wraps all the routes and global components like Header and Footer.
 *
 * @returns JSX.Element
 */
function App() {
  return (
      // Router component for handling routes
      <Router>
        {/* Main App container */}
        <div className="App">
            <Toaster />
          {/* Header component */}
            <Header />

          {/* Routes for different pages */}
          <Routes>
            {/* Home Page */}
              <Route path="/" element={<HomePage />} />

            {/* Client Management Page */}
              <Route path="/clients" element={<ClientManagementPage />} />
              <Route path="/projects" element={<ProjectManagementPage />} />
              <Route path="/inventory" element={<InventoryManagementPage />} />
              <Route path="/companies" element={<CompanyManagementPage />} />
            {/* Other routes... */}
          </Routes>

        </div>
        {/* Footer component */}

      </Router>
  );
}

// Exporting App component
export default App;
