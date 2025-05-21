//  this is the body of the App.js
// body is the only comp rendered in app.js and other comp will be render here

import appRoutes from './appRoutes';
import { RouterProvider } from 'react-router-dom';

const Body = () => {

    

  return (
    <div> 
        <RouterProvider router={appRoutes }/>
    </div>
        
  );

}

export default Body;