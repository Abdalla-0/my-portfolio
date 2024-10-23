import styles from "./styles.module.css";
import { memo } from "react";
const { heading } = styles;
const Heading = memo(({ title }: { title: string }) => {
  return <h2 className={heading}>{title}</h2>;
});

export default Heading;
