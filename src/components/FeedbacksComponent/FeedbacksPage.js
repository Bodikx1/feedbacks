import feed from './FeedbacksPage.module.css'
import NavBar from "../NavBar";
import React, {useState} from "react";
import FeedbacksPageHeader from "./FeedbacksPageHeader";
import {feedbacks} from "./Feedback'sData.js"
import FeedbacksList from "./FeedbacksList";
import admin from "../AdminComponents/AdminPanel.module.css";
import Footer from "../Footer";

export default function FeedbacksPage() {
    const [filter, setFilter] = React.useState('status');
    const [search, setSearch] = React.useState('');
    const [sort, setSort] = useState('status')
    const filterChange = (e) => {
        setFilter(e.target.value);
    };

    const sortChange = (e) => {
        setSort(e.target.value);
        if (e.target.value === 'status') feedbacks.sort((a, b) => a.status === b.status ? 1 : -1)
        if (e.target.value === 'rating') feedbacks.sort((a, b) => a.rate > b.rate ? 1 : -1)
        if (e.target.value === 'date') feedbacks.sort((a, b) => a.date > b.date ? 1 : -1)
    };
    let SearchFeedback = feedbacks.filter(feedback => {
        return feedback.UserName.toLowerCase(0).includes(search.toLowerCase())
    })
    return (
        <div className={feed.Page}>
            <NavBar/>
            <div className={feed.body}>
                <FeedbacksPageHeader
                    setSearch={setSearch}
                    sort={sort}
                    sortChange={sortChange}
                    filterChange={filterChange}
                    filter={filter}
                />
                <div className={admin.feedbacksListContent}>
                    <FeedbacksList comment={true} feedbacks={SearchFeedback}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}