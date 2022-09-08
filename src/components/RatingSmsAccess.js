import access from '../CssModules/SmsAccess.module.css'
import {Button, TextField} from "@mui/material";
import {Link} from "react-router-dom";
import React, {useState} from "react";

export default function RatingSmsAccess() {
    const [sms, setSms] = useState('')
    return (
        <div style={{display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
            <div className={access.body}>
                <h2>Код из СМС</h2>
                <TextField
                    onChange={e => setSms(e.target.value)}
                    inputProps={{
                        maxLength: '3',
                    }}
                    style={{width: '30%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                    type='password'
                />
                <Link to='/Gratitude'>
                    <Button
                        sx={{
                            color: 'rgb(3, 114, 183)',
                            backgroundColor: 'rgb(189, 207, 253)',
                            '&:hover': {
                                backgroundColor: 'rgb(123,148,211)'
                            }
                        }} variant="contained">Отправить</Button>
                </Link>
            </div>
        </div>
    )
}