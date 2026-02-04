import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Pagenotfound from './Error/Pagenotfound';
import Details from './pages/Details';
import Movies from './pages/Movies';


import { UserProvider } from './moviescontext/moviescontext';





function App() {


  return (
    <>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/Movies/" element={<Movies />} />
          <Route path="/*" element={<Pagenotfound />} />
        </Routes>
      </UserProvider>



    </>
  )
}

export default App;
