import React, { useEffect, useState } from 'react'
import '../App.css'



const News = (props) => {
    const{URL}=props
    const [data,setData]=useState([]);
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState({ status: false, msg: "" });
    const fetchData=async(apiurl)=>{
      setLoading(true);
      setIsError({status :false,msg:""})
    try{
        const response= await fetch(apiurl);
        console.log(response)
        const {articles}= await response.json();
        console.log(articles)
        setData(articles);
        setLoading(false);
      setIsError({ status: false, msg: "" });
      if(!articles){
        throw new Error("data not found");
      }
    }catch(error){
      setLoading(false);
      setIsError({status:true, msg: error.message || "something went wrong..."})
    }
      }
  
    
    useEffect(()=>{
      fetchData(URL)
  },[]);
if(loading){
  return(<h1>Loading....</h1>)
}
if(isError.status){
  return(<h1>{isError.msg}</h1>)
}
    
  return (
  <div className='container my-5' >

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
</div>

  )
}

export default News
