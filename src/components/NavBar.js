import React, {useState} from "react";
import bar from "../CssModules/NavBar.module.css";
import {Link} from "react-router-dom";
import Logo from "./Logo";
import InfoIcon from "@mui/icons-material/Info";
import SmallSubsMessage from "./MessageComponent/SmallSubsMessage";
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';

export default function NavBar({focusedPage}) {
    const [ menuOn , setMenuOn] = useState(false)
    const [lang, setLang] = React.useState('');

    const handleChange = (event) => {
        setLang(event.target.value);
    };
    return (
        <div>
            <div className={bar.NavBar}>
                <div className={bar.Logo}><Logo/></div>

                <div className={bar.Buttons}>
                    <div className={bar.dropdown}>
                        <div className={bar.Subscription}>
                            <h5>Тариф “Free”</h5>
                            <InfoIcon style={{height:'18px' , width:'18px'}}/>
                        </div>
                        <div className={bar.dropdownContent}>
                            <SmallSubsMessage/>
                        </div>
                    </div>

                        <button>
                            <Link to='/AboutUs' style={focusedPage === '/AboutUs'?{fontWeight:'bold' , textDecoration:'none'}: {}}>О нас</Link>
                        </button>

                        <button>
                            <Link to='/Subscription' style={focusedPage === '/Subscription'?{fontWeight:'bold' , textDecoration:'none'}: {}}>Тарифы</Link>
                        </button>

                        <button>
                            <Link to='/ProFunctions' style={focusedPage === '/ProFunctions'?{fontWeight:'bold' , textDecoration:'none'}: {}}>Функции Pro</Link>
                        </button>

                        <button>
                            <Link to='/Questions' style={focusedPage === '/Questions'?{fontWeight:'bold' , textDecoration:'none'}: {}}>FAQ</Link>
                        </button>

                        <button>
                            <Link to='/Settings' style={focusedPage === '/Settings'?{fontWeight:'bold' , textDecoration:'none'}: {}}>Настройки</Link>
                        </button>
                    <select name="lang" className={bar.Lang} onChange={e=>handleChange(e)}>
                        <option value="Ru">RU</option>
                        <option value="Ukr">UKR</option>
                    </select>
                </div>
                <div className={bar.MenuButton}>
                    <MenuIcon onClick={()=> setMenuOn(!menuOn)}/>
                </div>
            </div>
            {
                menuOn && (
                    <div className={bar.messageWrapper}>
                        <div className={bar.modal}>
                            <div className={bar.dropdown}>
                                <div className={bar.Subscription} style={{backgroundColor:'white' , color:'black'}}>
                                    <h5>Тариф “Free”</h5>
                                    <InfoIcon style={{height:'18px' , width:'18px'}}/>
                                </div>
                                <div className={bar.dropdownContent}>
                                    <SmallSubsMessage/>
                                </div>
                            </div>
                            <Link to='/AboutUs'>О нас</Link>
                            <Link to='/Subscription'>Тарифы</Link>
                            <Link to='/ProFunctions'>Функции Pro</Link>
                            <Link to='/Questions'>Вопросы/Ответы</Link>
                            <Link to='/Settings'>Настройки</Link>
                            <select name="lang" className={bar.Lang} onChange={e=>handleChange(e)}>
                                <option value="Ru">RU</option>
                                <option value="Ukr">UKR</option>
                            </select>
                            <CancelIcon style={{ marginTop: '70px' , height: '70px', width:'70px'}} onClick={()=>setMenuOn(false)}/>
                        </div>
                    </div>
                )
            }
        </div>

    )
}