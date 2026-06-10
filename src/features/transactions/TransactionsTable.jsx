const TransactionsTable = ({ transactions, onEdit, onDelete }) => {
  return (
    <table className="w-full border">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-2 text-left">Nama</th>
          <th className="p-2">Aksi</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(
          (item) => (
            (
              <tr key={item.id}>
                <td className="p-2">{item.name}</td>
                <td className="p-2 text-center">
                  <button
                    onClick={() => onEdit(item)}
                    className="bg-yellow-800 text-white px-2 py-1 rounded mr-2 cursor-pointer"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(item)}
                    className="bg-red-800 text-white px-2 py-1 rounded cursor-pointer"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            )
          ),
        )}
      </tbody>
    </table>
  );
};

export default TransactionsTable;
