import styles from "./App.module.scss";
import AllEmployeesPage from "./containers/allEmployeePage/AllEmployeesPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import EditEmployeePage from "./containers/EditEmployeePage/EditEmployeePage";
import { QueryClient, QueryClientProvider } from "react-query";
import NewEmployeePage from "./containers/NewEmployeePage/NewEmployeePage";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className={styles.App}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Navigate to="/employees" replace />} />
            <Route path="/employees" element={<AllEmployeesPage />} />
            <Route path="/employees/create" element={<NewEmployeePage />} />
            <Route path="/employees/:id" element={<EditEmployeePage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
