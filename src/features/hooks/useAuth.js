import { useAuthContext } from "../context/Context";

const useAuth = () => {
  return useAuthContext();
};

export default useAuth;
