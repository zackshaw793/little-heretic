import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faBandcamp, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

export default function SocialMedia() {
    return (
            <Container className='d-flex justify-content-center'>
                <Row>
                    <Col className='text-center'>
                        <a href='https://www.instagram.com/zackshaw/' target='_blank' rel="noreferrer">
                            <FontAwesomeIcon icon={faInstagram} size='3x' className='social-media-icon' />
                        </a>
                        <a href='https://littleheretic.bandcamp.com/' target='_blank' rel="noreferrer">
                            <FontAwesomeIcon icon={faBandcamp} size='3x' className='social-media-icon' />
                        </a>
                        <a href='https://github.com/zackshaw793' target='_blank' rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} size='3x' className='social-media-icon' />
                        </a>
                    </Col>
                </Row>
            </Container>
    )
}