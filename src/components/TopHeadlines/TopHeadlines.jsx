import React from 'react'
import "./topHeadlines.css";
import { MdKeyboardArrowRight } from "react-icons/md";

const TopHeadlines = () => {
  return (
    <div className='headlines_page'>
      <div className='headlines_news_header'>
            <h1 style={{display: "flex",alignItems: "center"}}>Top Headlines<MdKeyboardArrowRight style={{color: "#3e7320", fontSize: "60px", fontWeight: "600", marginLeft: "10px"}}/></h1>
        </div>
    </div>
  )
}

export default TopHeadlines