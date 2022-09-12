import React, {useState} from 'react'
import admin from './AdminRegister.module.css'
import Logo from "../Logo";
import {CssTextField, NameTextField} from "../InputStyle";
import PasswordStrength from "../PasswordStrength";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {Link} from "react-router-dom";
import {Button} from "@mui/material";

export default function AdminRegister() {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [passwordVis, setPassVis] = useState('password')
    const [confirmPassVis, setConfirmPassVis] = useState('password')
    const [emptyPass, setEmptyPass] = useState('')
    const [emptyConfirmPass, setEmptyConfirmPass] = useState('')
    const [emptyInput, setEmptyInput] = useState('')
    const [emptyName, setEmptyName] = useState('')
    const [emptySurname, setEmptySurname] = useState(null)
    const Check = () => {
        if (!name) {
            setEmptyName(<h5 style={{width: '100%', color: "red"}}>Поле "Имя" не может быть пустым</h5>)
        }
        if (!surname) {
            setEmptySurname(<h5 style={{width: '100%', color: "red"}}>Поле "Фамилия" не может быть пустым</h5>)
        }
        if (!confirmPass || confirmPass !== password) {
            setEmptyConfirmPass('Поле "Повторить пароль" не совпадает')
        }
        if (!email) {
            setEmptyInput(' Email некорректный')
        }
        if (!password) {
            setEmptyPass('Password некорректный')
        }

    }
    function PasswordChange(e){
        setPassword(e.target.value)
        setEmptyPass('')
        setEmptyConfirmPass('')
    }
    function PasswordConfirmChange(e){
        setConfirmPass(e.target.value)
        setEmptyPass('')
        setEmptyConfirmPass('')
    }
    const style = {width: '350px', border: '1px solid lightgrey', borderRadius: '6px', margin:'0px' , marginBottom:'15px'}
    return (
            <div className={admin.body}>
                <Logo/>
                <h2 className={admin.title}>Регистрация:</h2>
                <div className={admin.name}>
                    <NameTextField
                        onChange={e => setName(e.target.value)}
                        style={{marginTop: '10px', marginRight: '3px' ,width:'172px'}}
                        id="demo-helper-text-misaligned-no-helper"
                        helperText={emptyName}
                        placeholder='Имя'
                        inputProps={{
                            maxLength: '30',
                        }}
                    />
                    <NameTextField
                        onChange={e => setSurname(e.target.value)}
                        style={{marginTop: '10px', marginLeft: '3px',width:'172px'}}
                        id="demo-helper-text-misaligned-no-helper"
                        helperText={emptySurname}
                        placeholder='Фамилия'
                        inputProps={{
                            maxLength: '30',
                        }}
                    />
                </div>
                <CssTextField
                    onChange={e => setEmail(e.target.value)}
                    style={style}
                    name="email"
                    type="email"
                    placeholder="Почта"
                    inputProps={{
                        maxLength: '30',
                    }}
                />
                <h5 style={{width: '350px', color: "red"}}>{emptyInput}</h5>
                <CssTextField
                    onChange={(e)=>PasswordChange(e)}
                    style={style}
                    name="password"
                    type={passwordVis}
                    placeholder="Пароль"
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
                <h5 style={{width: '350px', color: "red"}}>{emptyPass}</h5>
                <CssTextField
                    onChange={e => PasswordConfirmChange(e)}
                    style={style}
                    name="Confirm password"
                    type={confirmPassVis}
                    placeholder="Повторить пароль"
                    margin='normal'
                    inputProps={{
                        maxLength: '30',
                    }}
                    InputProps={{
                        endAdornment:
                            confirmPassVis === 'password'
                                ?
                                <RemoveRedEyeIcon style={{cursor: 'pointer'}}
                                                  onClick={() => setConfirmPassVis('text')}/>
                                :
                                <VisibilityOffIcon style={{cursor: 'pointer'}}
                                                   onClick={() => setConfirmPassVis('password')}/>
                    }}
                />
                <h5 style={{width: '350px', color: "red"}}>{emptyConfirmPass}</h5>
                <PasswordStrength password={password}/>

                {email === '' || password === '' || confirmPass !== password || name === '' || surname === '' ?

                        <button
                            onClick={Check}
                            style={{
                                color:'black',
                                width:'200px',
                                height :'40px',
                                margin: '30px 10px 10px 10px',
                                fontSize:'15px',
                                borderRadius: '4px',
                                border:'1px solid lightgrey',
                                backgroundColor: 'rgb(255,255,255)',
                            }}><Link to='#' style={{textDecoration:'none' , color:"black"}}>Следующий шаг</Link></button>

                    :

                        <button style={{
                            color:'white',
                            width:'200px',
                            height :'40px',
                            margin: '30px 10px 10px 10px',
                            fontSize:'15px',
                            borderRadius: '4px',
                            border:'none',
                            backgroundColor: 'rgb(0,0,0)',
                        }}><Link to='/RestaurantRegister' style={{textDecoration:'none' , color:"white"}}>Следующий шаг</Link></button>

                }
            </div>
    )
}