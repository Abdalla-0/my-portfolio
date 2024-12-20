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
          <Col key={item.id} md={3}>
            <div className={project}>
              <a href={item.link} className={imgBox}>
                <img src={item.img} alt="" />
              </a>
              <div className={imgBox}>
                <img src={item.img} alt="" />
              </div>
              <div className={text}>
                <a href={item.link} className={`${title}`}>{item.title}</a>
                <p className={tale} title={tale}>{item.description}</p>
              </div>
            </div>
          </Col>
        )}
      ></GridList>
    </Row>
  );
};

export default Project;
