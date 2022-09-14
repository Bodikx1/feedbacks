import subs from './SubscriptionPage.module.css';
import React from "react";
import NavBar from "../NavBar";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Tooltip from "@mui/material/Tooltip";
import Footer from "../Footer";

export default function SubscriptionPage() {
    const style = {width: '14px', height: '14px', color: 'gray', marginRight: '5px'}
    return (
        <div className={subs.Page}>
            <NavBar focusedPage={'/Subscription'}/>
            <div className={subs.body}>
                <div className={subs.subsPlanItem}>
                    <h3 className={subs.subtitle}>Базовый</h3>
                    <h1 className={subs.title}>Free</h1>
                    <button className={subs.buttons}>Купить сейчас</button>
                    <div className={subs.advantages}>
                        <span className={subs.advantage}>
                            <Tooltip title="Любой текст" placement='top' sx={{color:'black'}}>
                                    <TaskAltIcon style={style}/>
                            </Tooltip> <span
                            className={subs.advantagesText}>Конструктор QR-кодов</span></span>
                        <span className={subs.advantage}>
                            <Tooltip title="Любой текст" placement='top' sx={{color:'black'}}>
                                    <TaskAltIcon style={style}/>
                            </Tooltip>
                                <span className={subs.advantagesText}>Количество отзывов в месяц:
                                <p style={{fontSize: '14px', fontWeight: 'normal', marginLeft: '12px'}}>5 отзывов</p>
                                </span>
                        </span>
                    </div>
                </div>
                <div className={subs.subsPlanItem}>
                    <h3 className={subs.subtitle}>Профессиональный</h3>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <h1 className={subs.title}>Pro</h1>
                        <h1 className={subs.title}>$25/месяц</h1>
                    </div>

                    <button className={subs.buttons}>Купить сейчас</button>
                    <div className={subs.advantages}>
                        <span className={subs.advantage}>
                            <Tooltip title="Любой текст" placement='top' sx={{color:'black'}}>
                                    <TaskAltIcon style={style}/>
                            </Tooltip>
                            <span
                            className={subs.advantagesText}>Конструктор QR-кодов</span></span>
                        <span className={subs.advantage}>
                            <Tooltip title="Любой текст" placement='top' sx={{color:'black'}}>
                                    <TaskAltIcon style={style}/>
                            </Tooltip>
                                <span className={subs.advantagesText}>Количество отзывов в месяц:
                                <p style={{
                                    fontSize: '14px',
                                    fontWeight: 'normal',
                                    marginLeft: '12px'
                                }}>Без ограничений</p>
                                </span>
                        </span>
                        <span className={subs.advantage}>
                            <Tooltip title="Любой текст" placement='top' sx={{color:'black'}}>
                                    <TaskAltIcon style={style}/>
                            </Tooltip>
                            <span className={subs.advantagesText}>Уведомления в Telegram</span>
                        </span>

                    </div>
                </div>
                <div className={subs.subsPlanItem}>
                    <h3 className={subs.subtitle}>Бизнес</h3>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <h1 className={subs.title}>Business</h1>
                        <h1 className={subs.title}>$39/месяц</h1>
                    </div>
                    <button className={subs.buttons}>Купить сейчас</button>
                    <div className={subs.advantages}>

                        <span className={subs.advantage}>
                            <Tooltip title="Любой текст" placement='top' sx={{color:'black'}}>
                                    <TaskAltIcon style={style}/>
                            </Tooltip>
                            <span className={subs.advantagesText}>Конструктор QR-кодов</span>
                        </span>
                        <span className={subs.advantage}>
                            <Tooltip title="Любой текст" placement='top' sx={{color:'black'}}>
                                    <TaskAltIcon style={style}/>
                            </Tooltip>
                                <span className={subs.advantagesText}>Количество отзывов в месяц:
                                <p style={{
                                    fontSize: '14px',
                                    fontWeight: 'normal',
                                    marginLeft: '12px'
                                }}>Без ограничений</p>
                                </span>
                        </span>

                        <span className={subs.advantage}>
                            <Tooltip title="Любой текст" placement='top' sx={{color:'black'}}>
                                    <TaskAltIcon style={style}/>
                            </Tooltip>
                            <span className={subs.advantagesText}>Уведомления в Telegram</span>
                        </span>

                        <span className={subs.advantage}>
                            <Tooltip title="Любой текст" placement='top' sx={{color: 'black'}}>
                                    <TaskAltIcon style={style}/>
                            </Tooltip>
                            <span className={subs.advantagesText}>Несколько QR-кодов для заведений</span>
                        </span>

                        <span className={subs.advantage}>
                            <Tooltip title="Любой текст" placement='top' sx={{color: 'black'}}>
                                    <TaskAltIcon style={style}/>
                            </Tooltip>
                            <span className={subs.advantagesText}>Видео обращение после отзыва</span>
                        </span>

                        <span className={subs.advantage}>
                            <Tooltip title="Любой текст" placement='top' sx={{color: 'black'}}>
                                    <TaskAltIcon style={style}/>
                            </Tooltip>
                            <span className={subs.advantagesText}>Аналитика NPS</span>
                        </span>

                        <span className={subs.advantage}>
                            <Tooltip title="Любой текст" placement='top' sx={{color: 'black'}}>
                                    <TaskAltIcon style={style}/>
                            </Tooltip>
                            <span className={subs.advantagesText}>Более 3 сотрудников в доступе</span>
                        </span>

                        <span className={subs.advantage}>
                            <Tooltip title="Любой текст" placement='top' sx={{color: 'black'}}>
                                    <TaskAltIcon style={style}/>
                            </Tooltip>
                            <span className={subs.advantagesText}>Переводчик отзывов Google</span>
                        </span>

                        <span className={subs.advantage}>
                            <Tooltip title="Любой текст" placement='top' sx={{color:'black'}}>
                                    <TaskAltIcon style={style}/>
                            </Tooltip>
                            <span className={subs.advantagesText}>Возможность добавлять несколько вопросов в опрос</span>
                        </span>

                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}