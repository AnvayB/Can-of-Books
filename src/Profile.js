import { withAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Card } from 'react-bootstrap';


class Profile extends React.Component {
  render() {
    return (
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={"holder.js/100px180"} />
          <Card.Body>
            <Card.Title>Profile</Card.Title>
            <Card.Text>
              Hello user!
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default withAuth0(Profile);