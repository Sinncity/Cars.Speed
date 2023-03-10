import Array1 from "./Array1";
import Button from "./Button";
import "./styles.css";
import { motion } from "framer-motion";

export default function App(props) {
  return (
    <div className="App">
      <motion.h1 animate={{ scale: 1.5 }}> Cars I Like🔥🔥🔥</motion.h1>
      <Array1 />
      <motion.div
        whileTap={{
          rotate: 8
        }}
      >
        <Button />
      </motion.div>
    </div>
  );
}
