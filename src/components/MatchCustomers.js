import React from 'react';
import { BookConsumer } from './context';

class MatchCustomers extends React.Component {        
  constructor(props) {
          super(props);
          this.state = {
             showfchr: false
          };
  }


 toggleChange = () => {
  this.setState({
    showfchr: !this.state.showfchr,
  });
}

render() {
  return (
 <BookConsumer>
   {({showAuthors})=> (showAuthors ? 'got it' : 'try again')}
 </BookConsumer>
  );
}
}

export default MatchCustomers;