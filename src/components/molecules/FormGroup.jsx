const FormGroup = ({ label, children }) => {
  return (
    <div className="mb-4">
      <label className="block mb-1">{label}</label>
      {children}
    </div>
  );
};

export default FormGroup;
