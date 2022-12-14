import React from "react"
import { MoreOutlined, SearchOutlined } from "@ant-design/icons"
import Sidebar from "./drawer"
// import { useSelector,useDispatch } from 'react-redux'
function Main() {
    // const dispatch = useDispatch()
    // const state = useSelector((state) => state)
    const show = () => {
        var el = document.getElementById("box");
        el.classList.toggle("show");
    }
    // console.log("myReduxdata",state.AllDataReducers.loginInformation.name);
    return (
        <>
            <div className="nav_icon">
                <Sidebar />
                <h2 className="conver_nav">Conversations</h2>
                <div className="container">
                    <input type="text" id="box" placeholder="Search a friend" className="search__box " onClick={show} />
                    <SearchOutlined id="icon" className='search__icon' />
                </div>
                <MoreOutlined className="more" />
            </div>
        </>
    )
}
export default Main