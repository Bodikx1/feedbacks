import qr from './CreateNewQr.module.css'
import NavBar from "../NavBar";
import Footer from "../Footer";
import React, {useEffect, useState} from "react";
import {CssTextField} from "../InputStyle";
import CheckIcon from '@mui/icons-material/Check';
import QrCode from "qrcode";
import Logo from "../Logo";
export default function CreateNewQr({text}) {
    const [templateCommentText , setTemplateCommentText] = useState('Вiдскануйте та залиште свiй вiдгук. Нам це важливо!')
    const [templateCommentTextInput , setTemplateCommentTextInput] = useState('')
    const [templateCommentTextOn , setTemplateCommentTextOn] = useState(false)
    const [nameInput , setNameInput] = useState('')
    const [nameText , setNameText] = useState('Зал 1')
    const [templateText , setTemplateText] = useState('Як Вам наш сервic?')
    const [templateTextInput , setTemplateTextInput] = useState('Як Вам наш сервic?')
    const [nameOn , setNameOn] = useState(false)
    const [templateTextOn , setTemplateTextOn] = useState(false)
    const [size , setSize] = useState(0)
    const [file , setFile] = useState()
    const [imgSrc , setImgSrc] = useState()
    const [src, SetSrc] = useState('');
    useEffect(() => {
        QrCode.toDataURL(text).then((data) => {
            SetSrc(data)
        })
    }, []);

    function handleChange(e) {
        setSize(e.target.value)
    }
    function SaveComment(){
        setTemplateCommentTextOn(false)
        setTemplateCommentText(templateCommentTextInput)
        if(templateCommentTextInput.length === 0){
            setTemplateCommentText('Вiдскануйте та залиште свiй вiдгук. Нам це важливо!')
        }
    }
    function SaveName(){
        setNameOn(false)
        setNameText(nameInput)
        if(nameInput.length === 0){
            setNameText('Зал 1')
        }
    }
    function SaveTemplateText(){
        setTemplateTextOn(false)
        setTemplateText(templateTextInput)
        if(templateText.length === 0){
            setTemplateTextOn('Як Вам наш сервic?')
        }
    }
    function readFile(e) {
        let file = e.target.files[0];

        let reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = function() {
            setImgSrc(reader.result)
        };

    }
    const style = {width: '200px', border: '1px solid lightgrey', borderRadius: '6px', margin:'0px'}
    return(
        <div className={qr.Page}>
            <NavBar/>
            <div className={qr.body}>
                <h1>Создать новый QR</h1>
                <div className={qr.QrSize}>
                    <h2>Размеры QR:</h2>
                    <select name="size" className={qr.SizeSelect} onChange={e=>handleChange(e)}>
                        <option value="50">50х100мм</option>
                        <option value="100">100х100мм</option>
                        <option value="150">100х150мм</option>
                    </select>
                </div>
                <hr style={{margin:'10px'}}/>
                <div className={qr.QrName}>
                    <h2>Название QR:</h2>
                    {
                        !nameOn && (
                            <h2 style={{cursor:'pointer'}} onClick={()=> setNameOn(true)}>{nameText}</h2>
                        )
                    }
                    {
                        nameOn && (
                            <CssTextField
                                onChange={(e)=>setNameInput(e.target.value)}
                                size='small'
                                style={style}
                                name="name"
                                type='text'
                                placeholder="Название Qr"
                                margin='normal'
                                inputProps={{
                                    maxLength: '30',
                                }}
                                InputProps={{
                                    endAdornment:
                                            <CheckIcon style={{cursor: 'pointer' , color:'green'}} onClick={SaveName}/>
                            }}
                            />
                        )
                    }
                </div>
                <hr style={{margin:'10px'}}/>
                <div className={qr.QrFile}>
                    <h2>Выберите лого:</h2>
                    <div className={qr.loadFile}>
                        <input className={qr.file}  type="file" onChange={(e)=>readFile(e)}/>
                        {file?.name}
                    </div>
                </div>
                <div className={qr.template}>
                    <h2>Название шаблона : {nameText}</h2>
                    {
                        !imgSrc && (<h2 style={{color:'#fd7373'}}>Выберите логотип</h2>)
                    }
                    {
                        imgSrc && (<img src={imgSrc} alt="Logo" style={{maxWidth:'200px'}}/>)
                    }
                    <div style={{display:'flex' , alignItems:'center' , flexDirection:'column'}}>
                        {
                            !templateTextOn && (
                                <h3 style={{cursor:'pointer'}} onClick={()=> setTemplateTextOn(true)}>{templateText}</h3>
                            )
                        }
                        {
                            templateTextOn && (
                                <CssTextField
                                    onChange={(e)=>setTemplateTextInput(e.target.value)}
                                    size='small'
                                    style={style}
                                    name="name"
                                    type='text'
                                    placeholder="Свой текст"
                                    margin='normal'
                                    inputProps={{
                                        maxLength: '30',
                                    }}
                                    InputProps={{
                                        endAdornment:
                                            <CheckIcon style={{cursor: 'pointer' , color:'green'}} onClick={SaveTemplateText}/>
                                    }}
                                />
                            )
                        }
                        <img src={src} alt="QrCode" style={{mixBlendMode: 'multiply' , width:'250px' , height:'250px'}}/>
                        <div>
                            {
                                !templateCommentTextOn && (
                                    <h3 style={{cursor:'pointer' , textAlign:'center'}} onClick={()=> setTemplateCommentTextOn(true)}>{templateCommentText}</h3>
                                )
                            }
                            {
                                templateCommentTextOn && (
                                    <CssTextField
                                        onChange={(e)=>setTemplateCommentTextInput(e.target.value)}
                                        size='small'
                                        style={style}
                                        name="name"
                                        type='text'
                                        placeholder="Свой текст"
                                        margin='normal'
                                        inputProps={{
                                            maxLength: '30',
                                        }}
                                        InputProps={{
                                            endAdornment:
                                                <CheckIcon style={{cursor: 'pointer' , color:'green'}} onClick={SaveComment}/>
                                        }}
                                    />
                                )
                            }
                        </div>
                    </div>
                    <Logo/>
                    <button className={qr.templateButton}>Сохранить</button>
                </div>

            </div>
            <Footer/>
        </div>
    )
}