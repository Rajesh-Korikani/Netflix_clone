import React, { useEffect, useState } from 'react'
import News from './News';
import '../App.css'

const Home = () => {
  const[data,setData]=useState([]);
  const[searchTerm,setSearchTerm]=useState("");
  const[search,setSearch]=useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState({ status: false, msg: "" });
  const fetchurl=async(apiurl)=>{
    setLoading(true);
    setIsError({ status: false, msg: "" });
    try{
    const response=await fetch(apiurl);
    const {articles}=await response.json();
    setData(articles)
    setLoading(false);
    setIsError({ status: false, msg: "" });
    if (!articles) {
      throw new Error("data not found");
    }
  } catch (error) {
    setLoading(false);
    setIsError({
      status: true,
      msg: error.message || "something went wrong...",
    });
  }


  }
  const clickHandle=(e)=>{
    e.preventDefault();
    setSearch(searchTerm);
  }
  
  useEffect(()=>{
    const url1="https://newsapi.org/v2/everything?q=";
    const url2="&apiKey=2cca05cdb1e1497ba7d3276a0755d07b";
    const URL=`${url1}${search}${url2}`
    fetchurl(URL)
  },[search])


  return (
    <div>
      <form onSubmit={clickHandle} >
       <center> <input type="text" name='search' id='search' placeholder='search for something' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
        <button type='submit' id='button'>Search</button></center>
      </form>
      <hr id='line'/>
      {loading &&<h1>Loading...</h1>}
      {isError?.status&&search&&(<h1>{isError.msg}</h1>)}
     {data?( <div className='container my-5' >
     <div className='row text-center'>
    {data.map((obj)=>{
    const{title,url,urlToImage,description}=obj;
    return(
        <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src={urlToImage} alt="Sorry there is no image" />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
  </div>
    )
   })}
</div>
</div>):(<News URL="https://newsapi.org/v2/top-headlines?country=in&apiKey=2cca05cdb1e1497ba7d3276a0755d07b"/>)}
      
    </div>
  )
}

export default Home
