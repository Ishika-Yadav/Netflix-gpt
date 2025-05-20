//  this is the body of the App.js
// body is the only comp rendered in app.js and other comp will be render here


import Login from './login'
import Browse from './Browse'

const Body = () => {

  return (
    <div>
        <Login/>
        <Browse/>
    </div>
        
  );

}

export default Body