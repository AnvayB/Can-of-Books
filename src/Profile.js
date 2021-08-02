import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;

// import { withAuth0 } from '@auth0/auth0-react';
// import React from 'react';
// import { Card } from 'react-bootstrap';
// import axios from 'axios';


// class Profile extends React.Component {
//   componentDidMount() {
//     console.log(`Authentication Status: ${this.props.auth0.isAuthenticated}`);
//     if (this.props.auth0.isAuthenticated) {
//       this.props.auth0.getIdTokenClaims().then(res => {
//         console.log(res);
//         const jwt = res.__raw;

//         const config = {
//           method: 'get',
//           header: {'Authorization': `Bearer ${jwt}`},
//           baseURL: 'http://localhost:3000',
//           url: '/auth-test'
//         }

//         axios(config).then(results => 
//           console.log('From the /auth-test backend:', results)
//           ).catch(error =>
//             console.log(error)
//             );
//       });
//     }
//   }
  
  
  
  
  
  
//   render() {
//     //const {user} = this.props.auth0;
//     return (
//       <div>
//         <Card style={{ width: '18rem' }}>
//           <Card.Img variant="top" src={"holder.js/100px180"} />
//           {/* <Card.Img variant="top" src={user.picture} /> */}
//           <Card.Body>
//             <Card.Title>Hello!</Card.Title>
//             <Card.Text>
//               Hello user!
//               {/* Hello {user.name} */}
//             </Card.Text>
//             <Card.Text>
//               Email: ______
//               {/* Email: {user.email} */}
//             </Card.Text>
//           </Card.Body>
//         </Card>
//       </div>
//     )
//   }
// }

// export default withAuth0(Profile);