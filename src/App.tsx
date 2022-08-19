import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthenticationPage, DashboardPage } from "./pages";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*">
          <Route path="auth" element={<AuthenticationPage />} />
          <Route index element={<DashboardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
