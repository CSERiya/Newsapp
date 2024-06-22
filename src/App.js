import './App.css';
import React,{useState} from 'react'
import Navbar from './Components/Navbar';
import Newscontent from './Components/Newscontent';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

const App=()=> { 
  const [progress, setProgress] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
      setSearchQuery(query);
  };  
  const apikey=process.env.REACT_APP_NEWS_API
 
    return (
      <BrowserRouter>   
      <>
        <Navbar onSearch={handleSearch}/>
        <LoadingBar
        color='#f11946'
        height='3px'
        progress={progress} 
          
      />
        <Routes>
          <Route exact path="/" element={<Newscontent setProgress={setProgress}  searchQuery={searchQuery} apikey={apikey} key="general" category="general"/>}/>
          <Route exact path="/entertainment" element={<Newscontent setProgress={setProgress} searchQuery={searchQuery} apikey={apikey} key="entertainment" category="entertainment"/>}/>
          <Route exact path="/general" element={<Newscontent setProgress={setProgress} searchQuery={searchQuery} apikey={apikey} key="general" category="general"/>}/>
          <Route exact path="/health" element={<Newscontent setProgress={setProgress} searchQuery={searchQuery} apikey={apikey} key="health" category="health"/>}/>
          <Route exact path="/business" element={<Newscontent setProgress={setProgress} searchQuery={searchQuery} apikey={apikey} key="business" category="business"/>}/>
          <Route exact path="/science" element={<Newscontent setProgress={setProgress} searchQuery={searchQuery} apikey={apikey} key="science" category="science"/>}/>
          <Route exact path="/sports" element={<Newscontent setProgress={setProgress} searchQuery={searchQuery} apikey={apikey} key="sports" category="sports"/>}/>
          <Route exact path="/technology" element={<Newscontent setProgress={setProgress} searchQuery={searchQuery} apikey={apikey} key="technology" category="technology"/>}/>
        </Routes>
      </>
</BrowserRouter>      

    )
  }
export default App;