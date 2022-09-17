import NavBar from "../NavBar";
import Footer from "../Footer";
import qr from './PreparedQr.module.css'
import QrNewTemplatesItem from "./QrNewTemplatesItem";
import React, {useState} from "react";
import css from "../FeedbacksComponent/Feedback.module.css";
import {Pagination} from "@mui/material";
import bar from "../../CssModules/NavBar.module.css";

export default function PreparedQr(){
    const [templates , setTemplates] = useState([
        {
            id:Math.random(1000),
            number: 1,
        },
        {
            id:Math.random(1000),
            number: 2,

        },
        {
            id:Math.random(1000),
            number: 3,

        },
        {
            id:Math.random(1000),
            number: 4,

        },
        {
            id:Math.random(1000),
            number: 4,

        },        {
            id:Math.random(1000),
            number: 4,

        },        {
            id:Math.random(1000),
            number: 4,

        },        {
            id:Math.random(1000),
            number: 4,

        },        {
            id:Math.random(1000),
            number: 4,

        },        {
            id:Math.random(1000),
            number: 4,

        },        {
            id:Math.random(1000),
            number: 4,

        },
    ])
    const [currentPage , setCurrentPage] = useState(1)
    const [templatesPerPage , setTemplatePerPage ] = useState(5)
    const indexOfLastTemplate = currentPage*templatesPerPage
    const indexOfFirstTemplate = indexOfLastTemplate - templatesPerPage
    let currentFeedback = templates.slice(indexOfFirstTemplate , indexOfLastTemplate)
    const pageNumbers = []
    for(let i = 0 ;  i <= templates.length/ templatesPerPage ; i++){
        pageNumbers.push(i)
    }
    const paginate = pageNumber => setCurrentPage(pageNumber)
    function handleChange(e){
        setTemplatePerPage(e.target.value)
    }
    return(
        <div className={qr.Page}>
            <NavBar/>
            <div className={qr.body}>
                <h1>Список готовых QR</h1>
                <ul>
                    {
                        currentFeedback.map((template)=>
                        <QrNewTemplatesItem setTemplates={setTemplates} template={template} key={template.id} templates={templates}/>)
                    }
                </ul>
                <div className={qr.pagination}>
                    <Pagination count={pageNumbers.length} shape="rounded" onChange={(event , page)=> paginate(page)} />
                </div>
                <h4 style={{marginBottom:'10px'}}>Показать:</h4>
                <select name="pagin" className={qr.perPage} onChange={e=>handleChange(e)}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                </select>
            </div>
            <Footer/>
        </div>
    )
}