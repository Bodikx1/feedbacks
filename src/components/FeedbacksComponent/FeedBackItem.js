import css from "./Feedback.module.css";
import {Rating} from "@mui/material";
import React, {useState} from "react";
import CommentItem from "./CommentItem";

export default function FeedBackItem({feedback, comment , OpenTranslateWindow}) {
    const [buttonMore , setButtonMore] = useState('Еще')
    const [style , setStyle] = useState({display:'inline'})
    const [mainText , setMainText] = useState(feedback.text.slice(0,100))
    function ReadMore(){
        if(buttonMore === 'Еще'){
            setButtonMore('Показать меньше')
            setStyle({display: 'none'})
            setMainText(feedback.text)
        }
        if(buttonMore === 'Показать меньше'){
            setButtonMore('Еще')
            setStyle({display: 'inline'})
            setMainText(feedback.text.slice(0,100))
        }

    }
    const commentItem = {
        id: Math.random(1000)
    }
    const [comments, setComments] = useState([commentItem])
    const [commentOn, setCommentOn] = useState(false)

    function openCloseComments() {
        setCommentOn(!commentOn)
    }

    function addComment() {
        setComments([...comments, commentItem])
    }

    return (
        <li className={css.item} key={feedback.id}>
            <div>
                <div className={css.status}
                     style={
                         feedback.status == 'Активный' ? {
                                 color: 'rgb(4, 41, 122)'
                             }
                             : feedback.status == 'В обработке' ?
                                 {color:'orange'} : feedback.status == 'Не решено' ? {
                                         color: 'rgb(183, 33, 54)'
                                     } :
                                     {
                                         color: 'rgb(34, 154, 22)'
                                     }}
                >
                    <span style={{width:'90px' , marginTop:'20px' , marginRight:'10px'}}>{feedback.status}</span>
                </div>
                    <div className={css.ratingStatus}>
                        <h2>{feedback.UserName}</h2>
                        <Rating
                            readOnly={true}
                            name="simple-controlled"
                            value={feedback.rate}
                        />
                </div>
                <button className={css.googleTransl} onClick={()=>OpenTranslateWindow(true , feedback.text)}>Переводчик Google</button>
                <h3 className={css.mainText}>
                    {mainText}
                    {
                        feedback.text.length > 150 ?(<span><span style={style}>...</span><span onClick={ReadMore}> {buttonMore}</span></span>) : ''
                    }


                </h3>
                <h3 className={css.date}>{feedback.date}</h3>
                {
                    comment && (<h3 className={css.commentButton} onClick={openCloseComments}>Подробнее</h3>)
                }
            </div>
            {
                commentOn && (
                    comments.map((commentItem, index) =>
                        <CommentItem feedback={feedback} key={commentItem.id} comments={comments} index={index}
                                     addComment={addComment}/>
                    )

                )
            }
            <hr/>
        </li>
    )
}