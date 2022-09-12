import rate from '../CssModules/Rate.module.css'
import React, {useState} from "react";
import {Button, Rating} from "@mui/material";
import {Link} from "react-router-dom";
import {Textarea} from "@mui/joy";
import Logo from "./Logo";

function RatingPage() {
    const [rating , setRating] = useState(null)
    const [feedback, setFeedBack] = useState('');
    const [emptyFeedBack , setEmptyFeedBack] = useState('')

    function FeedBackChange(e){
        setFeedBack(e.target.value)
        setEmptyFeedBack('')
    }
    function Check(){
        if(feedback.length === 0){
            setEmptyFeedBack(<h4 style={{color:"red", margin:'0px', textAlign:'center', maxWidth:'300px'}}>Вы не ввели отзыв, поле не может быть незаполненным.</h4>)
        }
        if(feedback.length > 1000){
            setEmptyFeedBack(<h4 style={{color:"red" , textAlign:'center', margin:'0px' , maxWidth:'300px'}}>Ваш отзыв слишком большой, более 1000 символов</h4>)
        }
    }
    return (
        <div>
            <div className={rate.body}>
                <Logo/>
                <h2>Оставьте Ваш отзыв:</h2>
                <Rating
                    name="simple-controlled"
                    value={rating}
                    onChange={(event, newValue) => {
                        setRating(newValue);
                    }}
                />
                <Textarea
                    sx={() => ({
                        margin: '15px 15px 0 15px',
                        borderRadius: '8px',
                        color: 'rgb(0,0,0)',
                        fontWeight: 'bold',
                        border:'1px solid black',
                        '&:hover': {
                            background: `rgb(255,255,255)`,
                        },
                    })}
                    minRows={3}
                    maxRows={4}
                    onChange={(e) => {
                        FeedBackChange(e)
                    }}
                    placeholder="Текст"
                    style={{marginTop: '20px', width: '100%', borderRadius: '10px'}}
                />
                {emptyFeedBack}
                {feedback === '' || feedback.length > 1000 ?
                        <Button variant="outlined" onClick={Check} style={{ borderRadius: '6px', color:'black' , border:'1px solid black'}}>Отправить</Button>
                    :
                    <Link to='/RatingAutho'>
                        <Button variant="contained" style={{ borderRadius: '6px' , color:'white' , backgroundColor:'black'}}>Отправить</Button>
                    </Link>
                }
            </div>
        </div>

    );
}

export default RatingPage;
