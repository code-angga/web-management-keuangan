const SummaryCard = ({ title, amount }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h3>{title}</h3>

      <p className="text-2xl font-semibold mt-2">
        Rp{amount.toLocaleString("id-ID")}
      </p>
    </div>
  );
};

export default SummaryCard;
