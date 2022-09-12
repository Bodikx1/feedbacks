import css from "./Feedback.module.css";
import {Button, TextareaAutosize} from "@mui/material";
import React, {useState} from "react";

export default function CommentItem({comments, index, addComment, feedback}) {
    const [adminComment, setAdminComment] = useState('')
    return (
        <div className={css.comment} style={comments[comments.length - 1] === comments[index] ? {
            borderBottomLeftRadius: '6px',
            borderBottomRightRadius: '6px'
        } : {borderRadius: '0px'}}>
            <div style={{width: '100%'}}>
                <h3 className={css.CommentText}>
                    <TextareaAutosize
                        value={adminComment}
                        onChange={(e) => setAdminComment(e.target.value)}
                        aria-label="empty textarea"
                        placeholder=" Коментарий админа"
                        style={{width: '98%', padding: '5px', height: '70px', borderRadius: '10px'}}
                    /></h3>
            </div>
            <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>

                <div style={{width: '100%'}}>
                    <div>
                        {
                            comments[comments.length - 1] === comments[index] ? (<Button
                                sx={() => ({
                                    float:'right',
                                    margin: '15px 0 15px 15px',
                                    background: 'none',
                                    color: 'rgb(0,0,0)',
                                    height: '20px',
                                    width: "165px",
                                    fontWeight: 'bold',
                                    fontSize: '12px',
                                    textTransform: 'none',
                                    boxShadow:'none',
                                    '&:hover': {
                                        background: 'none',
                                        boxShadow:'none',

                                    },
                                })}
                                variant="contained"
                                onClick={addComment}
                            >Добавить коментарий
                            </Button>) : ''
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}