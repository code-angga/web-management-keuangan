import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "../features/pages/LoginPage";
import RegisterPage from "../features/pages/RegisterPage";
import CategoryPage from "../features/pages/CategoryPage";
import CreateCategory from "../features/category/CreateCategory";
import EditCategory from "../features/category/EditCategory";
import Dashboard from "../features/pages/DashboardPage";
import UserPage from "../features/pages/UsersPage";

import TransactionsPage from "../features/pages/TransactionsPage";
import UpdateTransaction from "../features/transactions/UpdateTransactions";
import CreateTransaction from "../features/transactions/CreateTransaction";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/create" element={<CreateCategory />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/editCategory/:id" element={<EditCategory />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<UserPage />} />

        {/* transactions */}
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/updateTransaction/:id" element={<UpdateTransaction />} />
        <Route path="/createTransaction" element={<CreateTransaction />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
