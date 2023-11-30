import { Container, Row, Col } from 'react-bootstrap'
import Audio from '/src/Components/Audio.jsx'
export default function Upcoming() {

  const MusicLink = 'https://littleheretic.bandcamp.com/album/the-silver-slips-of-daylight';

  return (
    <>
      <Container className="fluid d-flex justify-content-center mb-5 mt-5" id='upcoming-head'>
        <Row>
          <Col className='text-center'>
            <h1 style={{ textAlign: 'center' }}>The Silver Slips of Daylight</h1>
            <h3 style={{ textAlign: 'center' }}>A Little Heretic LP</h3>
            <p style={{ textAlign: 'center' }}>February 9th, 2024</p>
            <a href={MusicLink} target='_blank' rel='noreferrer' className='d-grid mb-3' id='card-link'>Pre-Order on Bandcamp</a>
            <img src='/assets/silverslipsofdaylight.png' className='mx-auto img-fluid' style={{maxWidth: '75%', height: 'auto'}} />
          </Col>
        </Row>
      </Container>

      <Container className="mb-5 mt-5">
        <h3 id='upcoming-body'> 
          Parking Lot
        </h3>
        <p id='upcoming-body'>New Single</p>
            <div id='audio-player'>
              <Audio />
            </div>
      </Container>
    </>
  )
}