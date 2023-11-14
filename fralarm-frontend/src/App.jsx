// Importing required modules and components
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import ClientManagementPage from "./components/ClientManagement/ClientManagementPage";
// Other imports...

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
          {/* Header component */}


          {/* Routes for different pages */}
          <Routes>
            {/* Home Page */}


            {/* Client Management Page */}
              <Route path="/clients" element={<ClientManagementPage />} />

            {/* Other routes... */}
          </Routes>

        </div>
        {/* Footer component */}

      </Router>
  );
}

// Exporting App component
export default App;
