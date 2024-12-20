import { useAppDispatch, useAppSelector } from "@store/hook";
import styles from "./styles.module.css";
import { Col, Row } from "react-bootstrap";
import { useEffect } from "react";
import { actGetSkills } from "@store/skills/skillsSlice";
import { GridList } from "@components/common";

const { skill, imgBox, title } = styles;
const Skill = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.skills);

  useEffect(() => {
    dispatch(actGetSkills());
  }, [dispatch]);

  return (
    <Row>
      <GridList
        data={data}
        renderItem={(item) => (
          <Col key={item.id} xs={6} md={4} lg={3}>
            <div className={skill}>
              <div className={imgBox}>
                <img src={item.img} alt="" />
              </div>
              <h3 className={title}>{item.title}</h3>
            </div>
          </Col>
        )}
      ></GridList>
    </Row>
  );
};

export default Skill;
