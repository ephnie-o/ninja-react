import NavBar from './NavBar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  // const title = 'Welcome to the new blog';
  // const likes = 50;
  // const link = 'http://www.google.com'

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path='/blogs/:id' element={<BlogDetails />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          {/* <h1>{ title }</h1>
          <p>Likes { likes } times</p>
          <p>{ 1+2 }</p>
          <a href={link}>Google Site</a> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
