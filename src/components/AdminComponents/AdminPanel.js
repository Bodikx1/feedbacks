import React from "react";
import admin from './AdminPanel.module.css'
import {Button} from "@mui/material";
import {Link} from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FeedbacksList from "../FeedbacksComponent/FeedbacksList";
import NavBar from "../NavBar";
import {feedbacks} from "../FeedbacksComponent/Feedback'sData.js"
import Footer from "../Footer";


export default function AdminPanel() {
    return (
        <div className={admin.Page}>
            <NavBar/>
            <div className={admin.body}>
                <div className={admin.content}>
                    <div className={admin.title}>
                        <h2>Как пользоваться:</h2>
                    </div>
                    <div className={admin.Video}>
                        <iframe
                            width="1050px"
                            height="450px"
                            style={{borderRadius: '12px'}}
                            src="https://www.youtube.com/embed/RK1K2bCg4J8"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>
                        <Button variant="contained" style={{
                            margin: '25px 10px 10px 10px',
                            fontSize:'13px',
                            fontWeight:'bold',
                            width: '170px',
                            borderRadius: '6px',
                            backgroundColor: 'rgb(255,255,255)',
                            border:'1px solid black',
                            boxShadow:'none'
                        }}><Link to='/QrPage' style={{textDecoration:'none'}}>Сгенерировать QR</Link></Button>

                    <div className={admin.feedbacksList}>
                        <h3 style={{margin: '20px'}}>Отзывы:</h3>
                        <hr/>
                            <FeedbacksList comment={false} feedbacks={feedbacks.slice(0, 5)}/>
                        <div className={admin.feedbacksListFooter}>
                            <Link to='/Feedbacks' style={{width:'150px' , display:'flex' , alignItems:'center' ,textDecoration:'none'}}>
                                <h4>Посмотреть все <ArrowForwardIosIcon style={{width: '10px', height: '10px'}}/></h4>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}