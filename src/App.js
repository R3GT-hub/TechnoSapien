import NewsCard from "./NewsCard";
import './App.css';
import searchIcon from "./search.svg";

import { useEffect, useState } from 'react';

const API_URL="http://hn.algolia.com/api/v1/search?";
const App=()=>{
  const [news,setNews] =useState([]);
  const [search,setSearch]=useState("");

  useEffect(()=>{
    searchNews("");
  },[search]);
  const searchNews=async(query)=>{
    const response=await fetch(`${API_URL}query=${query}`);
    const data=await response.json();
    setNews(data.hits)
  } ;
return(
  <div className="app">
    <h1>
      TechnoSapien
    </h1>
    <div className="search">
      <input placeholder='Search here' value={search} onChange={(e)=>setSearch(e.target.value)}/>
      <img src={searchIcon} alt="search" onClick={() => searchNews(search)} />
    </div>
    {news?.length>0?(
      <div className="container">
        {news.map((newnews)=>(
          <NewsCard newnews={newnews}/>
        ))}
      </div>
    ):(
      <div className="empty">
        <h2>OOPS !! No newsfound related to this topic!!</h2>
      </div>
    )
}
  </div>
);
};

export default App;
