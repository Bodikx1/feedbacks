import questions from './Questions.module.css'
import NavBar from "../NavBar";
import Footer from "../Footer";
export default function Questions(){
    return(
        <div className={questions.Page}>
            <NavBar focusedPage={'/Questions'}/>
            <div className={questions.body}>
                <h2>Вопросы</h2>
            </div>
            <Footer/>
        </div>

    )
}