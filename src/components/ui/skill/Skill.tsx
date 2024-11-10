import { useAppDispatch, useAppSelector } from "@store/hook";
import styles from "./styles.module.css";
import { Col, Row } from "react-bootstrap";
import { useEffect } from "react";
import { actGetSkills } from "@store/skills/skillsSlice";

const { skill, imgBox, title } = styles;
const Skill = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.skills);
  useEffect(() => {
    dispatch(actGetSkills());
  }, [dispatch]);

  return (
    <Row>
      {data &&
        data.map((el) => (
          <Col xs={6} md={4} lg={3}>
            <div key={el.id} className={skill}>
              <div className={imgBox}>
                <img src={el.img} alt="" />
              </div>
              <h3 className={title}>{el.title}</h3>
            </div>
          </Col>
        ))}
    </Row>
  );
};

export default Skill;
