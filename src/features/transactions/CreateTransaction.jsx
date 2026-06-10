import { useNavigate } from "react-router-dom";
import TransactionForm from "../../components/organisms/TransactionForm";
import { createTransaction } from "../services/transactionService";
import DashboardLayouts from "../../templates/DashboardLayouts";


const CreateTransaction = () => {
  const navigate = useNavigate();

  const handleCreate = async (data) => {
    try {
      await createTransaction(data);
      navigate("/transactions");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DashboardLayouts>
      <div className="p-5">
        <h1 className="text-2xl font-semibold mb-5">Tambah Transaction</h1>
        <TransactionForm onSubmit={handleCreate} />
      </div>
    </DashboardLayouts>
  );
};

export default CreateTransaction;
