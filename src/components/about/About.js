import { Container, Col, Row } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import { useTheme } from '../../context/ThemeContext';
import { SocialMedia } from '../socialMedia/SocialMedia';
import { bio } from '../../data/constants';
import ProfilePic from '../../images/ProfilePic.jpeg'

export const About = () => {
    const { theme } = useTheme()
    return (
        <div id="about" className={theme}>
            <Container className='large mt-5'>
                <Row className='pt-5'>
                    <Col className='d-flex flex-column justify-content-center'>
                        <h1 className='fw-bolder'>HELLO, I'M</h1>
                        <h1 className='fw-bolder fst-italic highlight'>
                            <Typewriter
                                options={{
                                    loop: true,
                                    autoStart: true,
                                    strings: bio.roles,
                                }}
                            />
                        </h1>
                        <p className='mt-3 fs-4 text'>{bio.about}</p>
                        <SocialMedia />
                    </Col>
                    <Col className='d-flex flex-column justify-content-center align-items-center'>
                        <img src={ProfilePic} alt="profile" className="rounded-lg rounded-circle w-75 h-75" />
                    </Col>
                </Row>
            </Container>
            <Container className='small'>
                <Row className='mt-5'>
                    <Col className='d-flex flex-column justify-content-center align-items-center'>
                        <img src={ProfilePic} alt="profile" className="rounded-lg rounded-circle w-75 h-75" />
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex flex-column justify-content-center align-items-center'>
                        <h1 className='fw-bolder'>HELLO, I'M</h1>
                        <h1 className='fw-bolder fst-italic highlight'>
                            <Typewriter
                                options={{
                                    loop: true,
                                    autoStart: true,
                                    strings: bio.roles,
                                }}
                            />
                        </h1>
                        <p className='my-3 fs-5 text-center text'>{bio.about}</p>
                        <SocialMedia />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
