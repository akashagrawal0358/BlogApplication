import { useState } from 'react';

import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';

//components
import DataProvider from './context/DataProvider';
// import Header from './components/header/Header';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import DetailView from './components/DetailView';
import Update from './components/Update';
import About from './components/About';
// import Contact from './components/contact/Contact';
import Login from './components/Login';
import Header from './components/Header';





//  ----------------  Refresh the Page ---->  makes isAuthenticated value False 
// then we directs to login Page again 


// PrivateRoute checks that user is authenticated or not 

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  const token = sessionStorage.getItem('accessToken');
  return isAuthenticated && token ?
    <>

      {/* Only shows header when user is Authenticated  */}
      <Header />
      {/*  Outlet is the respected component */}
      <Outlet />
    </> : <Navigate replace to='/login' />
};





function App() {

  const [isAuthenticated, isUserAuthenticated] = useState(false);

  return (
    <DataProvider>
      <BrowserRouter>
        <Box style={{ marginTop: 64 }}>

          <Routes>
            {/* User can access ---> login because it is not private route  */}
            <Route path='/login' element={<Login isUserAuthenticated={isUserAuthenticated} />} />

            {/* PrivateRoute checks that user is authenticated or not  
                if authenticated then show respected component 
                if not then show login component
            */}
            <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/' element={<Home />} />
            </Route>
          <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
            <Route path='/create' element={<CreatePost />} />
          </Route>
          <Route path='/details/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
            <Route path='/details/:id' element={<DetailView />} />
          </Route>
          <Route path='/update/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
            <Route path='/update/:id' element={<Update />} />
          </Route>
          <Route path='/about' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
            <Route path='/about' element={<About />} />
          </Route>

          </Routes>



          {/* <Routes>
          





            <Route path='/contact' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/contact' element={<Contact />} />
            </Route>
          </Routes> */}


        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;