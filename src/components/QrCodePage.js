import QrCode from 'qrcode';
import qr from '../CssModules/QrCodePage.module.css'
import React, {useState, useEffect} from "react";
import {Button} from "@mui/material";
import ReplyIcon from '@mui/icons-material/Reply';
import PrintIcon from '@mui/icons-material/Print';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import SubscriptionMessage from "./MessageComponent/SubscriptionMessage";
import {AspectRatio} from "@mui/joy";
import {Link} from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function QrCodePage({text}) {
    const [src, SetSrc] = useState('');
    const [messageOn, setMessageOn] = useState(false);
    const handleOpen = () => {
        setMessageOn(true)
    }
    const handleClose = () => {
        setMessageOn(false)
    }
    useEffect(() => {
        QrCode.toDataURL(text).then((data) => {
            SetSrc(data)
        })
    }, []);

    return (
        <div className={qr.Page}>
            <NavBar/>
            <div className={qr.body}>
                <h2>QR сгенерирован</h2>
                <div className={qr.QrCode}>
                    <img src={src} alt="QrCode" style={{mixBlendMode: 'multiply' , width:'250px' , height:'250px'}}/>
                </div>

                <div>

                    <Button
                        variant="contained"
                        style={{
                            margin: '10px',
                            borderRadius: '4px',
                            color: 'rgb(0,0,0)',
                            backgroundColor:'white',
                            boxShadow:'none',
                            border:'1px solid grey',
                        }}
                        onClick={() => handleOpen()}
                    ><PrintIcon/>
                    </Button>

                    <Button variant="contained" style={{
                        margin: '10px',
                        borderRadius: '4px',
                        color: 'rgb(0,0,0)',
                        backgroundColor:'white',
                        boxShadow:'none',
                        border:'1px solid grey',
                    }}><ReplyIcon/>
                    </Button>

                    <Button variant="contained" style={{
                        margin: '10px',
                        borderRadius: '4px',
                        color: 'rgb(0,0,0)',
                        backgroundColor:'white',
                        border:'1px solid grey',
                        boxShadow:'none',
                    }}><SaveAltIcon/>
                    </Button>

                </div>
                <h2>Как пользоваться:</h2>
                <div className={qr.Video} style={{width: '100%'}}>
                    <iframe
                        style={{borderRadius: '12px'}}
                        width="90%" height="400px" src="https://www.youtube.com/embed/D7SlK16o82o"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                <Link to='/OrderStyleQr'>
                    <Button
                        sx={() => ({
                            margin: '20px 0px 10px 0px',
                            borderRadius: '4px',
                            background: `rgb(0,0,0)`,
                            color: 'rgb(255,255,255)',
                            fontWeight: 'bold',
                            '&:hover': {
                                background: `rgb(0,0,0)`,
                            },
                        })}
                        variant="contained"
                    >Заказать стилизацию под бизнес
                    </Button>
                </Link>
                <Button
                    onClick={handleOpen}
                    sx={() => ({
                        margin: '10px 0px 30px 0px',
                        borderRadius: '4px',
                        backgroundColor: 'rgb(255,255,255)',
                        border:'1px solid grey',
                        color: 'rgb(0,0,0)',
                        fontWeight: 'bold',
                        '&:hover': {
                            background: `rgb(255,255,255)`,
                        },
                    })}
                    variant="contained"
                >Активировать на 14 дней
                </Button>

                {
                    messageOn && (
                        <SubscriptionMessage handleClose={handleClose}/>
                    )
                }
            </div>
            <Footer/>
        </div>

    )
}