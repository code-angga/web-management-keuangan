import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DashboardLayouts from "../../templates/DashboardLayouts";
import TransactionForm from "../../components/organisms/TransactionForm";
import {
  getTransactionById,
  updateTransaction,
} from "../services/transactionService";

const UpdateTransaction = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [transaction, setTransaction] = useState(null);

  useEffect(() => {
    fetchTransactionById();
  }, []);

  const fetchTransactionById = async () => {
    try {
      const response = await getTransactionById(id);

      setTransaction(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdate = async (data) => {
    console.log(id);
    try {
      await updateTransaction(id, data);
      alert("Transaction berhasil di Update");
      navigate("/transactions");
    } catch (error) {
      console.log(error);
    }
  };

  if (!transaction) return <p className="p-5">Loading</p>;

  return (
    <DashboardLayouts>
      <div className="p-5">
        <h1 className="text-2xl font-semibold mb-5">Edit Transaction</h1>

        <TransactionForm initialData={transaction} onSubmit={handleUpdate} />
      </div>
    </DashboardLayouts>
  );
};

export default UpdateTransaction;
