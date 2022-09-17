import css from './Analytics.module.css'
import NavBar from "../NavBar";
import Footer from "../Footer";
import {Rating} from "@mui/material";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import TagFacesIcon from '@mui/icons-material/TagFaces';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import MoodBadIcon from '@mui/icons-material/MoodBad';
import {feedbacks} from "../FeedbacksComponent/Feedback'sData";
export default function Analytics() {
    const [period , setPeriod] = useState('день')
    let rating = 4.7
    function handleChange(e){
        setPeriod(e.target.value)
    }
    const niceRate = feedbacks.filter(feedback => feedback.status === 'Позитивный')
    const badRate = feedbacks.filter(feedback => feedback.status === 'Негативный')
    const inProccess = feedbacks.filter(feedback => feedback.status === 'Не решенный')

    return(
        <div className={css.Page}>
            <NavBar/>
            <div className={css.body}>
                <h1>Аналитика</h1>
                <div className={css.rating}>
                    <Rating name="half-rating-read" defaultValue={rating} precision={0.1} readOnly  style={{width:'170px'}} size="large"/>
                    <h2>{rating}</h2>
                </div>
                <div className={css.periods}>
                    <h3>Изменения за период:</h3>
                    <select name="analytics" className={css.Period} onChange={e=>handleChange(e)}>
                        <option value="день">День</option>
                        <option value="неделя">Неделя</option>
                        <option value="месяц">Месяц</option>
                    </select>
                </div>
                <div style={{display:'flex', justifyContent:'center' , alignItems:'center' , padding:'15px' , border:'1px solid black' , borderRadius:'4px' , margin:'15px' }}>
                    <h3 style={{color: 'green'}}>Было: 4.3, стало: 4.7 - так держать чемпион!</h3>
                    <TagFacesIcon/>
                </div>
                <div style={{display:'flex', justifyContent:'center' , alignItems:'center' , padding:'15px' , border:'1px solid black' , borderRadius:'4px'  , margin:'15px'}}>
                    <h3 style={{color: 'orange'}}>Было: 4.3, стало: 4.3 - хорошо, продолжай...</h3>
                    <SentimentSatisfiedAltIcon/>
                </div>
                <div style={{display:'flex', justifyContent:'center' , alignItems:'center' , padding:'15px' , border:'1px solid black' , borderRadius:'4px' , margin:'15px' }}>
                    <h3 style={{color: 'red'}}>Было: 4.3, стало: 3.5 - ой-ой, нужно исправлять!</h3>
                    <MoodBadIcon/>
                </div>
                <Link to='/Feedbacks' style={{color:'red', fontSize:'16px'}}>Не решенные отзывы за этот период: {period}: {inProccess.length}</Link>
                <Link to='/Feedbacks' style={{color:'red' ,marginTop:'20px' , fontSize:'16px'}}>Негативные отзывы за этот период: {period}: {badRate.length}</Link>
                <Link to='/Feedbacks' style={{color:'green' , marginTop:'20px', fontSize:'16px'}}>Позитивные отзывы за этот период: {period} : {niceRate.length}</Link>
                <h3 style={{marginTop:'30px'}}>Статистика по тегам</h3>
                <Link to='/Feedbacks' style={{color:'green', fontSize:'16px',marginTop:'20px' , fontWeight:'bold'}}>Персонал 4.4</Link>
                <Link to='/Feedbacks' style={{color:'red', fontSize:'16px',marginTop:'20px', fontWeight:'bold'}}>Заведение 3.2</Link>

            </div>
            <Footer/>
        </div>
    )
}