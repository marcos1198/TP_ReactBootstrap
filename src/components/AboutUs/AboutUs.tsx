import { Row, Col, Card, CardGroup } from "react-bootstrap"

const AboutUs = () => {
  return (
    <>
      <CardGroup >
    <Row xs={1} md={3} className="g-3" style={{ margin:'4px' }}>
    
      <Col >
        <Card >
          <Card.Img style={{ height:'250px' }} className="img-fluid img-thumbnail" variant="top" src="src/assets/images/slide1.jpg" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col >
        <Card>
          <Card.Img style={{ height:'250px' }} className="img-fluid img-thumbnail" variant="top" src="src/assets/images/slide2.jpg" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col >
        <Card>
          <Card.Img style={{ height:'250px' }} className="img-fluid img-thumbnail" variant="top" src="src/assets/images/slide3.jpg" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
   
  </Row>
  </CardGroup>
    </>
  )
}

export default AboutUs