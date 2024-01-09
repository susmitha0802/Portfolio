import { Card, Col, Row } from "react-bootstrap"
import { skills } from "../../data/constants"
import './Skills.css'
import 'animate.css/animate.css';

export const Skills = () => {
    return (
        <div id="skills">
            <h1 className="text-center">Skills</h1>
            <p className="text-center fs-3 text">I love to learn new things and experiment with new technologies.</p>
            <Row xs={1} lg={2} className="m-0">
                {
                    skills.map((skill, index) => {
                        return <Col key={index}>
                            <Card className="my-3" style={{ border: "0.1px solid #854ce6", borderRadius: "16px", boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px" }}>
                                <Card.Body className="bg">
                                    <Card.Title className="text-center mt-2 mb-4"><h2>{skill.title}</h2></Card.Title>
                                    <hr />
                                    <div className="d-flex flex-row justify-content-around flex-wrap ">
                                        {skill.list.map((item, idx) => {
                                            return <div key={idx} className="skill-item animate__animated">
                                                <div className="icon">
                                                    {item.icon}
                                                </div>
                                                <div className="name">
                                                    {item.name}
                                                </div>
                                            </div>
                                        })}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    })
                }
            </Row>
        </div>
    )
}