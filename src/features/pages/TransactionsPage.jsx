import TransactionsTable from "../transactions/TransactionsTable";
import DashboardLayouts from "../../templates/DashboardLayouts";
import { useEffect, useState } from "react";
import {
  deleteTransaction,
  getAllTransactions,
  // updateTransaction,
} from "../services/transactionService";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTransactions = async () => {
    try {
      const response = await getAllTransactions();

      setTransactions(response.data || response);
    } catch (error) {
      console.log("ERROR:", error);
    } finally {
      setLoading(false);
    }
  };

  const navigate = useNavigate();
  const handleEdit = async (item) => {
    navigate(`/editTransaction/${item.id}`);
  };

  const handleDelete = async (item) => {
    const confirmDelete = window.confirm("Yakin ingin mengapus data ?");

    if (!confirmDelete) return;

    try {
      await deleteTransaction(item.id);
      fetchTransactions();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []); // ← JANGAN LUPA KURUNG KOSONG

  return (
    <DashboardLayouts>
      <div className="p-5">
        <h1 className="text-2xl font-bold mb-5">Transactions</h1>

        {/* SUMMARY CARD AREA (kalau ada nanti) */}
        <div className="mb-5">
          <p className="text-gray-600">Data Transaction</p>
        </div>

        {/* CATEGORY TABLE */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-3">Data Transaction</h2>

          {loading ? (
            <p>Loading data...</p>
          ) : (
            <TransactionsTable
              transactions={transactions}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          )}
        </div>
      </div>
    </DashboardLayouts>
  );
};

export default DashboardPage;