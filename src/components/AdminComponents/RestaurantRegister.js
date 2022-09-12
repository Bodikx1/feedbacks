import restaurant from "../../CssModules/RestaurantRegister.module.css";
import Logo from "../Logo";
import React, {useState} from "react";
import {CssTextField} from "../InputStyle";
import useMask from "react-mask-hook";
import {Button, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select} from "@mui/material";
import {Link} from "react-router-dom";
import admin from "./AdminAutho.module.css";
import TermsMessage from "../MessageComponent/TermsMessage";
import ukr from '../../img/ukraine.png'
import ger from '../../img/germany.jpg'
import bel from '../../img/belarus.png'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


export default function RestaurantRegister() {
    const [value, setValue] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [countryNumber, setCountryNumber] = useState('(380)-###-####-##')
    const [countryFlag, setCountryFlag] = useState(`${ukr}`)
    const [countryTypeOn, setCountryTypeOn] = useState(false)
    const [restaurantType, setRestaurantType] = useState('Restaurant');
    const [restaurantName, setRestaurantName] = useState('');
    const [restaurantNumber, setRestaurantNumber] = useState(0);
    const [address, setAddress] = useState('');
    const [other, setOther] = useState('');
    const [job, setJob] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(true);
    const [emptyCity, setEmptyCity] = useState('')
    const [emptyOther, setEmptyOther] = useState('')
    const [emptyCountry, setEmptyCountry] = useState('')
    const [emptyTelNumber, setEmptyTelNumber] = useState('')
    const [emptyRestaurantName, setEmptyRestaurantName] = useState('')
    const [emptyRestaurantNumber, setEmptyRestaurantNumber] = useState('')
    const [emptyAddress, setEmptyAddress] = useState('')
    const [emptyJob, setEmptyJob] = useState('')
    const [messageOn, setMessageOn] = useState(false)
    const handleClose = () => setMessageOn(false);
    const errorStyle = {width: '300px', color: "red"}
    const Check = () => {

        if (!city) setEmptyCity(<h5 style={errorStyle}>Поле "Город" не может быть пустым</h5>)

        if (!value) setEmptyTelNumber(<h5 style={errorStyle}>Поле "Номер телефона" не может быть
            пустым</h5>)

        if (!address) setEmptyAddress(<h5 style={errorStyle}>Поле "Aдрес" не может быть пустым</h5>)

        if (!restaurantName) setEmptyRestaurantName(<h5 style={errorStyle}>Поле "Название заведения"
            не может быть пустым</h5>)

        if (!job) setEmptyJob(<h5 style={errorStyle}>Поле "Ваша должность" не может быть пустым</h5>)

        if (!country) setEmptyCountry(<h5 style={errorStyle}>Поле "Страна" не может быть пустым</h5>)

        if (!other) setEmptyOther(<h5 style={errorStyle}>Поле "Свой варинт" не может быть
            пустым</h5>)

        if (!restaurantNumber) setEmptyRestaurantNumber(<h5 style={errorStyle}>Поле "Свой варинт" не
            может быть пустым</h5>)

    }
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
    return (
        <div className={restaurant.body}>
            <Logo/>
            <h2 className={restaurant.title}>Регистрация:</h2>
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
            {emptyTelNumber}
            <CssTextField
                onChange={e => setCountry(e.target.value)}
                style={style}
                name="city"
                type="text"
                placeholder="Страна"
                inputProps={{
                    maxLength: '30',
                }}
                InputProps={{
                    style: {
                        border: 'none'
                    }
                }}
            />
            {emptyCountry}
            <CssTextField
                onChange={e => setCity(e.target.value)}
                style={style}
                name="city"
                type="text"
                placeholder="Город"
                inputProps={{
                    maxLength: '30',
                }}
                InputProps={{
                    style: {
                        border: 'none'
                    }
                }}
            />
            {emptyCity}
            <FormControl style={{width: '300px', marginTop: '15px'}}>
                <InputLabel id="demo-simple-select-label">Тип заведения</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    style={{width: "300px"}}
                    onChange={e => setRestaurantType(e.target.value)}
                    id="demo-simple-select"
                    label='Тип заведения'
                    value={restaurantType}
                    MenuProps={{
                        style: {width: '300px', marginRight: '30px'}
                    }}
                >
                    <MenuItem value="Restaurant" sx={{width: '300px'}}>Ресторан</MenuItem>
                    <MenuItem value='Cafe' sx={{width: '300px'}}>Кафе</MenuItem>
                    <MenuItem value='Beauty saloon' sx={{width: '300px'}}>Салон красоты</MenuItem>
                    <MenuItem value='Other' sx={{width: '300px'}}>Другое</MenuItem>
                </Select>
            </FormControl>
            {
                restaurantType === 'Other' ?
                    <CssTextField
                        onChange={e => setOther(e.target.value)}
                        style={style}
                        name="name"
                        type="text"
                        placeholder="Свой вариант"
                        inputProps={{
                            maxLength: '30',
                        }}
                    /> : ''
            }
            {emptyOther}
            <CssTextField
                onChange={e => setRestaurantName(e.target.value)}
                style={style}
                name="name"
                type="text"
                placeholder="Название заведения"
                inputProps={{
                    maxLength: '30',
                }}
            />
            {emptyRestaurantName}
            <CssTextField
                onChange={e => setRestaurantNumber(e.target.value)}
                style={style}
                name="name"
                type="number"
                placeholder="Количество заведений"
                inputProps={{
                    maxLength: '30',
                }}
            />
            {emptyRestaurantNumber}
            <CssTextField
                onChange={e => setAddress(e.target.value)}
                style={style}
                name="address"
                type="text"
                placeholder="Адрес заведения"
                inputProps={{
                    maxLength: '30',
                }}
            />
            {emptyAddress}
            <CssTextField
                onChange={e => setJob(e.target.value)}
                style={style}
                name="job"
                type="text"
                placeholder="Ваша должность"
                inputProps={{
                    maxLength: '30',
                }}
            />
            {emptyJob}
            <div className={restaurant.checkTerms}>
                <Checkbox onClick={() => setAgreeTerms(!agreeTerms)}
                          style={{color: 'rgb(0,0,0)', width: '20px', height: '20px'}}
                          defaultChecked/>
                <h4>Я согласен с условиями пользования</h4>
            </div>
            {city === '' || value === '' || restaurantName === '' || restaurantType === '' || agreeTerms !== true || address === '' || job === '' ?

                <button
                    onClick={Check}
                    style={{
                        color: 'black',
                        width: '200px',
                        height: '40px',
                        margin: '30px 10px 10px 10px',
                        fontSize: '15px',
                        borderRadius: '4px',
                        border: '1px solid lightgrey',
                        backgroundColor: 'rgb(255,255,255)',
                    }}><Link to='#' style={{textDecoration: "none", color: 'black'}}>Следующий шаг</Link></button>

                :

                <Button variant="contained" style={{
                    color: 'white',
                    width: '200px',
                    height: '40px',
                    margin: '30px 10px 10px 10px',
                    fontSize: '15px',
                    borderRadius: '4px',
                    backgroundColor: 'rgb(0,0,0)',
                }}><Link to='/AdminPanel' style={{textDecoration: "none", color: 'white'}}>Следующий шаг</Link></Button>

            }
            <hr className={restaurant.hr}/>
            <Link to='/'>Уже есть аккаунт?</Link>
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