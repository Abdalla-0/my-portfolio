import styles from "./styles.module.css";
import { memo } from "react";
const { heading } = styles;
const Heading = memo(
  ({ title, classExtra }: { title: string; classExtra?: string }) => {
    return <h2 className={`${heading} ${classExtra || ''}`}>{title}</h2>;
  }
);

export default Heading;
