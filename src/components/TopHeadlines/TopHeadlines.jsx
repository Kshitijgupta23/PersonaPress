import React from 'react'
import "./topHeadlines.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import women_gym from "../../assets/sven-mieke-optBC2FxCfc-unsplash.jpg";
import icehockey from "../../assets/markus-spiske-AeUZfT1uzpo-unsplash.jpg";
import football from "../../assets/jeffrey-f-lin-QV47mIeSm64-unsplash.jpg";
import { IoEye } from "react-icons/io5";

const TopHeadlines = () => {
  return (
    <div className='headlines_news'>
      <div className='headlines_news_header'>
            <h1 style={{display: "flex",alignItems: "center"}}>Top Headlines<MdKeyboardArrowRight style={{color: "#3e7320", fontSize: "60px", fontWeight: "600", marginLeft: "10px"}}/></h1>
      </div>
      <div className='headlines_news_container'>
        <div className='headlines_news_card'>
          <div className='headlines_news_top'>
            <img src={women_gym} alt="" />
          </div>
          <div className='headlines_news_bottom'>
            <h2>DeBrusk Hopes to Re-sign with Bruins, Eyes 30-Goal Mark This Season</h2>
            <p>A year away from hitting unrestricted free agency next summer, Boston Bruins winger Jake DeBrusk said Tuesday he is hoping to sign an extension to stay.</p>
              <div className='headlines_news_info'>
                <p>Hockey | 21/04/2024</p>
                <p><IoEye style={{marginRight:"5px"}}/>2371</p>
              </div>
          </div>
        </div>
        <div className='headlines_news_card'>
          <div className='headlines_news_top'>
            <img src={football} alt="" />
          </div>
          <div className='headlines_news_bottom'>
            <h2>DeBrusk Hopes to Re-sign with Bruins, Eyes 30-Goal Mark This Season</h2>
            <p>A year away from hitting unrestricted free agency next summer, Boston Bruins winger Jake DeBrusk said Tuesday he is hoping to sign an extension to stay.</p>
              <div className='headlines_news_info'>
                <p>Hockey | 21/04/2024</p>
                <p><IoEye style={{marginRight:"5px"}}/>2371</p>
              </div>
          </div>
        </div>
        <div className='headlines_news_card'>
          <div className='headlines_news_top'>
            <img src={icehockey} alt="" />
          </div>
          <div className='headlines_news_bottom'>
            <h2>DeBrusk Hopes to Re-sign with Bruins, Eyes 30-Goal Mark This Season</h2>
            <p>A year away from hitting unrestricted free agency next summer, Boston Bruins winger Jake DeBrusk said Tuesday he is hoping to sign an extension to stay.</p>
              <div className='headlines_news_info'>
                <p>Hockey | 21/04/2024</p>
                <p><IoEye style={{marginRight:"5px"}}/>2371</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopHeadlines