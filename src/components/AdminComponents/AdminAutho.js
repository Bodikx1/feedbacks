import React, {useState} from "react";
import Logo from "../Logo";
import admin from './AdminAutho.module.css'
import {FaceBook} from "../Buttons/FaceBookButton";
import {Google} from "../Buttons/GoogleButton";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";
import {CssTextField} from "../InputStyle";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import TermsMessage from "../MessageComponent/TermsMessage";


export default function AdminAutho() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordVis, setPassVis] = useState('password')
    const [messageOn, setMessageOn] = useState(false)
    const [emptyPass, setEmptyPass] = useState('')
    const [emptyInput, setEmptyInput] = useState('')
    const handleClose = () => setMessageOn(false);
    const Check = () => {
        if (!email) {
            setEmptyInput(' Email некорректный')
        }
        if (!password) {
            setEmptyPass('Пароль некорректный')
        }

    }
    const style = {width: '300px', border: '1px solid lightgrey', borderRadius: '6px'}
    return (
            <div className={admin.body}>
                <Logo/>
                <h2 className={admin.title}>Здравствуйте,</h2>
                <h2 className={admin.title}>войти с помощью:</h2>
                <div className={admin.social}>
                    <FaceBook/>
                    <Google/>
                </div>
                <div className={admin.hr}>
                    <hr/>
                    <span>Или</span>
                    <hr/>
                </div>
                <CssTextField
                    style={style}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    type="email"
                    placeholder="someemail@email.com"
                    label="Email"
                    defaultValue="someemail@email.com"
                    inputProps={{
                        maxLength: '30',
                    }}
                    InputProps={{
                        width:'300px'
                    }}

                />
                <h5 style={{width: '300px', color: "red"}}>{emptyInput}</h5>
                <CssTextField
                    onChange={e => setPassword(e.target.value)}
                    style={style}
                    name="password"
                    type={passwordVis}
                    placeholder="Пароль"
                    defaultValue='123456'
                    label="Пароль"
                    margin='normal'
                    inputProps={{
                        maxLength: '30',
                    }}
                    InputProps={{
                        endAdornment:
                            passwordVis === 'password'
                                ?
                                <RemoveRedEyeIcon style={{cursor: 'pointer'}} onClick={() => setPassVis('text')}/>
                                :
                                <VisibilityOffIcon style={{cursor: 'pointer'}} onClick={() => setPassVis('password')}/>
                    }}
                />
                <h5 style={{margin: '0', width: '300px', color: "red"}}>{emptyPass}</h5>
                <Link to='/ForgotPassword'>
                    Забыли пароль?
                </Link>
                {email === '' || password === '' ?

                        <button
                            onClick={Check}
                            style={{
                                width:'100px',
                                height :'40px',
                                margin: '10px',
                                fontSize:'15px',
                                borderRadius: '4px',
                                border:'1px solid lightgrey',
                                backgroundColor:'white',
                                color: 'rgb(0,0,0)'
                            }}><Link to='#' style={{textDecoration:'none' , color:'black'}}>Войти</Link></button>

                    :

                        <button style={{
                            width:'100px',
                            height :'40px',
                            margin: '10px',
                            fontSize:'15px',
                            borderRadius: '4px',
                            border:'none',
                            backgroundColor: 'rgb(0,0,0)',

                        }}><Link to='/AdminPanel'style={{textDecoration:'none', color:'white',}}>Войти</Link></button>

                }
                <Link to='/AdminRegister'>
                    Зарегистрироваться?
                </Link>
                <h4 className={admin.info} onClick={() => {
                    setMessageOn(!messageOn)
                }}>Условия использования</h4>
                {
                    messageOn && (
                        <TermsMessage handleClose={handleClose}/>
                    )
                }
            </div>
    )
}