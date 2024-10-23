import { useAppSelector } from "@store/hook";
import styles from "./styles.module.css";
const { project, imgBox, title } = styles;
const Project = () => {
  const { data } = useAppSelector((state) => state.projects);
  return (
    <div className={project}>
      <div className={imgBox}>
        <img src="https://dummyimage.com/600x400/eee/000" alt="" />
      </div>
      <h3 className={title}>Ecommerce</h3>
    </div>
  );
};

export default Project;
