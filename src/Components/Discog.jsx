import { Container, Row, Col, Card } from 'react-bootstrap'
import Records from '/Users/zacharyshaw/Desktop/little-heretic/src/discography.json'


const Discog = () => {
    return (
        <>
            <Container className="fluid d-flex align-items-center" style={{ minHeight: "10svh", textDecoration: 'none' }}>
                <h1>Discography</h1>
            </Container>
            <Container className="fluid d-flex justify-content-start align-items-start mb-5">
                <Row>
                    {Records.reverse().map((record) => (
                        <Col key={record.index}>
                            <Card style={{ width: '20rem', border: 'none' }} className="mb-4 me-2" id="card-custom">
                                <Card.Img variant="top" 
                                          src={record.art} 
                                          style={{boxShadow: '0 4px 8px rgba(84, 78, 72, 0.1)'}} />
                                <Card.Body id="card-body">
                                    <Card.Title id="card-title">{record.artist}, 
                                                <span id="album-title" style={{ fontStyle: 'italic' }}> {record.album}, </span>
                                                <span id='album-year'><br/>{record.year}</span>
                                    </Card.Title>
                                        <Card.Text id="card-text">{record.role}</Card.Text>
                                            <Card.Link id="card-link" href={record.link} target='_blank'>Listen</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default Discog;