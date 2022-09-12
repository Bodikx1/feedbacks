import feed from "./FeedbacksPage.module.css";
import {TextField} from "@mui/joy";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";


export default function FeedbacksPageHeader({filterChange, sortChange, setSearch, sort}) {
    return (
        <div className={feed.SubsTable}>
            <TextField
                sx={() => ({
                    margin: '15px',
                    borderRadius: '4px',
                    fontWeight: 'bold',
                })}
                startDecorator={<SearchIcon/>}
                id="outlined-size-small"
                placeholder="Поиск..."
                size="small"
                onChange={e => setSearch(e.target.value)}
            />
            <div style={{display: 'flex', alignItems: 'center'}}>
                <select className={feed.Sort} onChange={filterChange}>
                    <option hidden value="status">Фильтры:</option>
                    <option value="status">Статус</option>
                    <option value="date">Дата</option>
                    <option value="rating">Оценка</option>
                </select>
                <select value={sort} className={feed.Sort} onChange={sortChange}>
                    <option hidden value="status">Сортировка:</option>
                    <option value={"status"}>Статус</option>
                    <option value={"date"}>Дата</option>
                    <option value={"rating"}>Оценка</option>
                </select>
            </div>

        </div>)
}