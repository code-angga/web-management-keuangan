import { useNavigate } from "react-router-dom";

const CategoryTable = ({ categories, onEdit, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Table */}
      <table className="w-full border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">Nama Category</th>
            <th className="p-2 text-left">Deskripsi</th>
            <th className="p-2 text-center">Aksi</th>
          </tr>
        </thead>

        <tbody>
          {categories?.length > 0 ? (
            categories.map((item) => (
              <tr key={item.id || item._id} className="border-t">
                <td className="p-2">{item.name}</td>

                <td className="p-2">{item.description || "-"}</td>

                <td className="p-2 text-center">
                  <button
                    onClick={() => onEdit(item)}
                    className="bg-yellow-700 hover:bg-yellow-600 text-white px-3 py-1 rounded mr-2 cursor-pointer"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(item)}
                    className="bg-red-700 hover:bg-red-600 text-white px-3 py-1 rounded cursor-pointer"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center p-4 text-gray-500">
                Data category belum tersedia.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryTable;
