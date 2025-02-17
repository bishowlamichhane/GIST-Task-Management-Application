import { Outlet } from "react-router-dom";
import useStore from "./store/store";
import { useEffect } from "react";
import { motion } from "framer-motion";
const App = () => {
  const initialAuth = useStore((state) => state.initialAuth);
  useEffect(() => {
    initialAuth();
  }, [initialAuth]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.7 }}
    >
      <Outlet />
    </motion.div>
  );
};

export default App;
