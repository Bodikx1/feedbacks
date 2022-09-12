import React, {useState} from "react";
import {Button, Checkbox, TextField} from "@mui/material";
import autho from '../CssModules/RatingAutho.module.css'
import {Link} from "react-router-dom";
import HelpIcon from '@mui/icons-material/Help';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logo from "./Logo";
import useMask from "react-mask-hook";
import ukr from "../img/ukraine.png";
import ger from "../img/germany.jpg";
import bel from "../img/belarus.png";
import restaurant from "../CssModules/RestaurantRegister.module.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {CssTextField} from "./InputStyle";

export default function RatingAutho() {
    const [countryNumber, setCountryNumber] = useState('(380)-###-####-##')
    const [countryFlag, setCountryFlag] = useState(`${ukr}`)
    const [countryTypeOn, setCountryTypeOn] = useState(false)
    const [userName , setUserName] = useState('')
    const [emptyUserName , setEmptyUserName] = useState('')
    const [emptyPhoneNumber , setEmptyPhoneNumber] = useState('')
    const [value, setValue] = useState('');

    const CountryChange = (country) => {
        if (country === 'Ukraine') {
            setCountryNumber('(380)-###-####-##');
            setCountryFlag(`${ukr}`)
        }
        if (country === 'Germany') {
            setCountryNumber('49####-#######');
            setCountryFlag(`${ger}`)
        }
        if (country === 'Belarus') {
            setCountryNumber('(375)-###-####-##');
            setCountryFlag(`${bel}`)
        }
        setCountryTypeOn(false)
    }
    const maskProps = useMask({
        value,
        onChange: setValue,
        mask: `+${countryNumber}`,
        placeholder: '_',
    })
    const style = {width: '300px', border: '1px solid lightgrey', borderRadius: '6px', marginTop: '10px'}
    function UserNameChange(e){
        setUserName(e.target.value)
        setEmptyUserName('')
    }
    function Check(){
        if(userName.length === 0 ) setEmptyUserName(<h6 style={{color:'red' , maxWidth:'210px', marginTop:'10px'}}>Вы не ввели имя, поле не может быть незаполненным.</h6>)
        if(value.length === 0 ) setEmptyPhoneNumber(<h6 style={{color:'red' ,  maxWidth:'210px',marginTop:'10px'}}>Вы не ввели номер телефона, поле не может быть незаполненным.</h6>)
    }

    return (
        <div style={{display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
            <div className={autho.RatingAutho}>
                <Logo/>
                <CssTextField
                    onChange={e=> UserNameChange(e)}
                    style={{marginTop: '20px',width: '300px' , borderRadius: '6px',  border:'1px solid lightgray',  backgroundColor: "#FFF", color: '#000000', fontWeight: 'bold'}}
                    id="demo-helper-text-misaligned-no-helper"
                    placeholder='Имя'
                />
                {emptyUserName}

                <CssTextField
                    style={style}
                    name="telephone"
                    placeholder='Номер телефона'
                    type="tel"
                    {...maskProps}
                    inputProps={{
                        maxLength: '30',
                        style: {marginLeft: '10px'}
                    }}
                    InputProps={{
                        style: {padding: '0'},
                        startAdornment: <div className={restaurant.SelectCountry}>
                            <img src={countryFlag} alt="Ukr"/><ArrowDropDownIcon style={{cursor: 'pointer'}}
                                                                                 onClick={() => setCountryTypeOn(!countryTypeOn)}/>
                            {
                                countryTypeOn && (
                                    <div className={restaurant.CountryTypeMenu}>
                                        <div className={restaurant.CountryTypeMenuItem}
                                             onClick={() => CountryChange('Ukraine')}>
                                            <img src={ukr} alt="Ukraine"/>
                                            <span>Ukraine</span>
                                            <span>(+380)</span>
                                        </div>
                                        <div className={restaurant.CountryTypeMenuItem}
                                             onClick={() => CountryChange('Germany')}>
                                            <img src={ger} alt="Germany"/>
                                            <span>Germany</span>
                                            <span>(+49)</span>
                                        </div>
                                        <div className={restaurant.CountryTypeMenuItem}
                                             onClick={() => CountryChange('Belarus')}>
                                            <img src={bel} alt="Belarus"/>
                                            <span>Belarus</span>
                                            <span>(+375)</span>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    }}
                />
                {value.length >= 1 ? '' :emptyPhoneNumber}
                <div style={{marginTop: '15px'}}>
                    {userName === '' || value === ''?
                        <Button variant="outlined" onClick={Check} style={{ borderRadius: '5px' , color:'black' , border:'1px solid black'}}>Отправить</Button>
                        :
                        <Link to='/SmsAccess'>
                            <Button variant="contained" style={{ borderRadius: '5px' , color:'white' , backgroundColor:'black' }}>Отправить</Button>
                        </Link>
                    }
                </div>
                <div className={autho.anonymous}>
                    <Checkbox style={{color:'black'}}/>
                    <span>Остаться анонимным</span>
                    <Tooltip title="Любой текст" placement='top' sx={{color:'black'}}>
                        <IconButton>
                            <HelpIcon />
                        </IconButton>
                    </Tooltip>
                </div>
                <div>
                    <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fparse.com" target="_blank"
                       rel="noopener">
                        <h4 className={autho.fbIcon}>Поделиться отзывом в соц. сетях</h4>
                    </a>
                </div>
            </div>
        </div>

    )
}