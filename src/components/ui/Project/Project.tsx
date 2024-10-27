import { useAppDispatch, useAppSelector } from "@store/hook";
import styles from "./styles.module.css";
import { useEffect } from "react";
import { actGetProjects } from "@store/projects/projectsSlice";

const { project, imgBox, title } = styles;
const Project = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.projects);
  useEffect(() => {
    dispatch(actGetProjects());
  }, [dispatch]);

  return (
    data &&
    data.map((item) => (
      <div key={item.id} className={project}>
        <div className={imgBox}>
          <img src={item.img} alt="" />
        </div>
        <h3 className={title}>{item.title}</h3>
        <h3 className={title}>{item.description}</h3>
      </div>
    ))
  );
};

export default Project;
