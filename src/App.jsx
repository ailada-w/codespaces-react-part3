import './App.css';
import Home from './Home';
import About from './About';
import Posts from './Posts';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/posts?fname=Ailada&lname=Wanmoontree">Posts Greeting</Link></li>
          <li><Link to="/posts/1"> Post id 1 </Link></li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<Posts />} />
      </Routes>
    </BrowserRouter>);
}
 
export default App;
// import './App.css';
// import Home from './Home';
// import About from './About';
// import Posts from './Posts';
// import { BrowserRouter, Router, Route, Routes, Link } from 'react-router-dom';

// function App() {
//   return (
//     <BrowserRouter>
//       <div>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/post">1</Link></li>
//           <li><Link to="/post/1">2</Link></li>
//         </ul>
//       </div>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/" element={<About />} />
//         <Route path="/" element={<Posts />} />
//       </Routes>


//     </BrowserRouter>
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src="Octocat.png" className="App-logo" alt="logo" />
//     //     <p>
//     //       GitHub Codespaces <span className="heart">♥️</span> React
//     //     </p>
//     //     <p className="small">
//     //       Edit <code>src/App.jsx</code> and save to reload.
//     //     </p>
//     //     <p>
//     //       <a
//     //         className="App-link"
//     //         href="https://reactjs.org"
//     //         target="_blank"
//     //         rel="noopener noreferrer"
//     //       >
//     //         Learn React
//     //       </a>
//     //     </p>
//     //   </header>
//     // </div>
//   );
// }
// import { formatPostcssSourceMap } from 'vite';

// export default App;
