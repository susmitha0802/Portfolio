import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { projects } from "../../data/constants"
import "../skills/Skills.css"
import { useTheme } from '../../context/ThemeContext';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

export const Projects = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    const { theme } = useTheme()


    return (
        <div id="projects" className={theme}>
            <h1 className="text-center mt-5">Projects</h1>
            <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                variant={theme === "dark" ? "light" : "dark"}
                className='carousel large'
            >
                {
                    projects.map((project, index) => {
                        return <Carousel.Item key={index}>
                            <Card className="carousel-card bg" style={{ border: "0.1px solid #854ce6", borderRadius: "16px", boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px" }}>
                                <Card.Body>
                                    <Row>
                                        <Col className='d-flex flex-column justify-content-center'>
                                            <Card.Img variant="top" src={project.img} />
                                        </Col>
                                        <Col className='d-flex flex-column justify-content-center'>
                                            <Card.Title className="text-center mt-2"><h2>{project.title}</h2></Card.Title>
                                            <div className="d-flex flex-row justify-content-around flex-wrap">
                                                {project.skills.map((item, idx) => {
                                                    return <div key={idx} className="skill-item highlight">
                                                        {item.name}
                                                    </div>
                                                })}
                                            </div>
                                            <hr />
                                            <p className='fs-4 px-4 text-center text'>{project.description}</p>
                                            <div className='d-flex justify-content-around'>
                                                <Button variant="outline-dark" style={{ color: "#854ce6", border: "0.1px solid #854ce6", boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px" }} href={project.github} target="blank">Github Link</Button>
                                                {project.demo && <Button variant="outline-dark" style={{ color: "#854ce6", border: "0.1px solid #854ce6", boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px" }} href={project.demo} target="blank">Live Demo</Button>}
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>
                    })
                }
            </Carousel>
            <Container className='small pb-3'>
                {
                    projects.map((project, index) => {
                        return <Card className="carousel-card bg" key={index}
                            style={{ border: "0.1px solid #854ce6", borderRadius: "16px", boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px" }}>
                            <Card.Body>
                                <Row>
                                    <Col className='d-flex flex-column justify-content-center'>
                                        <Card.Img variant="top" src={project.img} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='d-flex flex-column justify-content-center'>
                                        <Card.Title className="text-center mt-3"><h2>{project.title}</h2></Card.Title>
                                        <div className="d-flex flex-row justify-content-around flex-wrap">
                                            {project.skills.map((item, idx) => {
                                                return <div key={idx} className="project-skill highlight">
                                                    {item.name}
                                                </div>
                                            })}
                                        </div>
                                        <hr />
                                        <p className='fs-5 text-center text'>{project.description}</p>
                                        <div className='d-flex justify-content-around'>
                                            <Button variant="outline-dark" style={{ color: "#854ce6", border: "0.1px solid #854ce6", boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px" }} href={project.github} target="blank">Github Link</Button>
                                            {project.demo && <Button variant="outline-dark" style={{ color: "#854ce6", border: "0.1px solid #854ce6", boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px" }} href={project.demo} target="blank">Live Demo</Button>}
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    })}
            </Container>
        </div>
    );
}