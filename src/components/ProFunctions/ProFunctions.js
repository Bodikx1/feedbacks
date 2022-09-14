import pro from './ProFucntions.module.css'
import NavBar from "../NavBar";
import Footer from "../Footer";
export default function ProFunctions(){
    return(
        <div className={pro.Page}>
            <NavBar focusedPage={'/ProFunctions'}/>
            <div className={pro.body}>
                <h2>Функции Pro</h2>
            </div>
            <Footer/>
        </div>

    )
}