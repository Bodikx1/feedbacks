import NavBar from "../NavBar";
import Footer from "../Footer";
import qr from './QrTemplates.module.css'
import QrSlider from "./QrSlider";
import {Link} from "react-router-dom";

export default function QrTemplates(){
    return(
        <div className={qr.Page}>
            <NavBar/>
            <div className={qr.body}>
                <h1 style={{marginBottom:'20px'}}>Список шаблонов QR</h1>
                <h2 style={{margin:'10px 30px 30px 30px'}}>Выберите шаблон:</h2>
                <div className={qr.templates}>
                        <QrSlider/>
                    <Link to='/CreateNewQr' style={{ width:'50%',display:'flex' , alignItems:'center' , justifyContent:'center' , flexDirection:'column'}}>
                            <h3>Описание</h3>
                            <p>композиционная форма, которую используют в литературоведении и лингвистике для подробной характеристики предметов или явлений.

                                Эту композиционную форму разделяют на описание предметов, описание процессов, описание пережитого или описание жизни и характеристик человека.

                            </p>
                    </Link>

                </div>
                <div className={qr.templates}>
                    <QrSlider/>
                    <Link to='/CreateNewQr' style={{ width:'50%',display:'flex' , alignItems:'center' , justifyContent:'center' , flexDirection:'column'}}>
                        <h3>Описание</h3>
                        <p>композиционная форма, которую используют в литературоведении и лингвистике для подробной характеристики предметов или явлений.

                            Эту композиционную форму разделяют на описание предметов, описание процессов, описание пережитого или описание жизни и характеристик человека.

                        </p>
                    </Link>
                </div>
            </div>
            <Footer/>
        </div>
    )
}