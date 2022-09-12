import React, {useState} from "react";
import css from './Feedback.module.css'
import FeedBackItem from "./FeedBackItem";
import {Button, Pagination} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";


export default function FeedbacksList({feedbacks, comment}) {
    const [messageOn ,setMessageOn] = useState(false)
    const [translateText ,setTranslateText] = useState(false)
    const [currentPage , setCurrentPage] = useState(1)
    const [feedbacksPerPage ] = useState(3)
    const indexOfLastFeedback = currentPage*feedbacksPerPage
    const indexOfFirstFeedback = indexOfLastFeedback - feedbacksPerPage
    let currentFeedback = feedbacks.slice(indexOfFirstFeedback , indexOfLastFeedback)
    const pageNumbers = []
    if(!comment) currentFeedback = feedbacks
    for(let i = 0 ;  i <= feedbacks.length/ feedbacksPerPage ; i++){
        pageNumbers.push(i)
    }
    const paginate = pageNumber => setCurrentPage(pageNumber)
    function OpenTranslateWindow( messageOn , text ){
        setTranslateText(text)
        setMessageOn(messageOn)
    }
    return (
        <div className={css.body}>
                <ul>
                    {
                        currentFeedback.map((feedback) =>
                            <FeedBackItem OpenTranslateWindow={OpenTranslateWindow} setMessageOn={setMessageOn} comment={comment} feedback={feedback} key={feedback.id}/>
                        )
                    }
                </ul>
            {
                comment && (
                    <div className={css.pagination}>
                        <Pagination count={pageNumbers.length} shape="rounded" onChange={(event , page)=> paginate(page)} />
                    </div>

                )
            }
            {
                messageOn && (
                    <div className={css.messageWrapper}>
                        <div className={css.modal}>
                            <div className={css.button}>
                                <Button
                                    onClick={() => setMessageOn(false)}
                                    variant="contained"
                                    style={{
                                        height: ' 30px ',
                                        width: ' 20px ',
                                        borderRadius: '4px',
                                        color:'white',
                                        backgroundColor: 'rgb(0,0,0)',
                                    }}
                                ><CloseIcon/>
                                </Button>
                            </div>
                            <div className={css.title}>
                                <div style={{ width:'90%' , height:'85%' }}>
                                    <p>{translateText}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                )
            }
        </div>
    )

}