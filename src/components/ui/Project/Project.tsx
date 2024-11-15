import { useAppDispatch, useAppSelector } from "@store/hook";
import styles from "./styles.module.css";
import { useEffect } from "react";
import { actGetProjects } from "@store/projects/projectsSlice";
import { Col, Row } from "react-bootstrap";
import { GridList } from "@components/common";

const { project, imgBox, text, title, tale } = styles;
const Project = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.projects);
  useEffect(() => {
    dispatch(actGetProjects());
  }, [dispatch]);

  return (
    <Row>
      <GridList
        data={data}
        renderItem={(item) => (
          <Col key={item.id} md={6}>
            <div className={project}>
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
        )}
      ></GridList>
    </Row>
  );
};

export default Project;
