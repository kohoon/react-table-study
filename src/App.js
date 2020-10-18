import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';


const customers = [{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '고훈',
  'birthday' : '830326',
  'gender' : '남성',
  'job' : '대학생'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '홍길동',
  'birthday' : '820226',
  'gender' : '남성',
  'job' : '프로그래머'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '고은준',
  'birthday' : '161205',
  'gender' : '남성',
  'job' : '어린이'
}]

class App extends Component {
  render() {
    return (
      <div>
        { customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />)})}
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="gray-background">
//       <img src={logo} alt="logos" />
//       <h2>Let's develop management system</h2> 
//     </div>
//   );
// }

export default App;
