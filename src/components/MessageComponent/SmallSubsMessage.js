import bar from "../../CssModules/NavBar.module.css";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";
import React from "react";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

export default function SmallSubsMessage() {
    return (
        <div className={bar.SubscriptionFullInfo}>
            <div className={bar.SubscriptionContent}>
                <div className={bar.triangle}></div>
                <div className={bar.SubscriptionHeader}>
                    <RocketLaunchIcon sx={{marginRight:'10px' , marginLeft:'10px' , backgroundColor:'lightblue', padding:'10px' , height:'30px' , width:'30px' , borderRadius:'25px'}}/>
                    <div>
                        <h4>Тариф “Free”</h4>
                        <h5 style={{color:'gray'}}>возможности тарифа</h5>
                        <h5 style={{color:'blue'}}>до 20.07.2023</h5>
                    </div>
                    <Link to='/Subscription'>
                        <button className={bar.MessageButton} style={{
                            cursor:'pointer',
                            color:'black',
                            borderRadius:'6px',
                            border:'1px solid black',
                            textTransform:'none',
                        }}>Продлить</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}