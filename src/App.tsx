import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AuthenticationPage,
  CategoriesPage,
  DashboardPage,
  ProfilePage,
  SettingsPage,
  TransactionsPage,
} from "./pages";
import Layout from "./pages/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth" element={<AuthenticationPage />} />
        <Route path='/' element={<Layout />}>
          <Route index element={<DashboardPage />}/>
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="transactions" element={<TransactionsPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
