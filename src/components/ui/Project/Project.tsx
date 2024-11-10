import { useAppDispatch, useAppSelector } from "@store/hook";
import styles from "./styles.module.css";
import { useEffect } from "react";
import { actGetProjects } from "@store/projects/projectsSlice";
import { Col, Row } from "react-bootstrap";

const { project, imgBox,text, title, tale } = styles;
const Project = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.projects);
  useEffect(() => {
    dispatch(actGetProjects());
  }, [dispatch]);

  return (
    <Row>
      {data &&
        data.map((item) => (
          <Col md={6}>
            <div key={item.id} className={project}>
              <div className={imgBox}>
                <img src={item.img} alt="" />
              </div>
              <div className={imgBox}>
                <img src={item.img} alt="" />
              </div>
              <div className={text}>
                <h3 className={`${title}`}>{item.title}</h3>
                <p className={tale}>{item.description}</p>
              </div>
            </div>
          </Col>
        ))}
    </Row>
  );
};

export default Project;
