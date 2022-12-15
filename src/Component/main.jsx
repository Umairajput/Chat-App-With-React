import React, { useEffect, useState } from 'react';
import { MoreOutlined, SearchOutlined } from "@ant-design/icons"
import { useSelector } from 'react-redux'
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db, auth } from '../Firebase/firebase';
function Main() {
    const [curntUser, setCurntUser] = useState([])
    const [dataArray, setDataArray] = useState([])
    const [Name, setName] = useState()
    const [img, setImg] = useState()
    const [msg, setMsg] = useState()
    const [inp,setInp] = useState()
    useEffect(() => {
        AllData();
        getData();
    }, [])
    const state = useSelector((state) => state?.AllDataReducers?.loginInformation)
    const name = state?.AllDataReducers?.loginInformation?.name;
    const imgURL = state?.AllDataReducers?.loginInformation?.image
    function AllData() {
        let data = []
        const q = query(collection(db, "users"), where("id", "!=", auth?.currentUser?.uid));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            querySnapshot?.forEach((doc) => {
                data.push(doc?.data())
            });
            setDataArray(data)
        });
    }
    function getData() {
        let user = [];
        const q = query(collection(db, "users"), where("id", "==", auth?.currentUser?.uid));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                user.push(doc.data());
            });
            setCurntUser(user)
        });
    }
    console.log("All user ", dataArray);
    console.log("Current user ", curntUser);
    let currentID = auth.currentUser.uid
    function Chat(name, id, image) {
        setName(name)
        setImg(image)
        // if (id > currentID) {
        //     console.log(id + currentID)
        // } else {
        //     console.log(currentID + id)
        // }
        // console.log(id, currentID)
        // console.log("Name in function",Name)
    }
    const show = () => {
        var el = document.getElementById("box");
        el.classList.toggle("show");
    }
    const Send = () => {
        setMsg(inp)
    }
    return (
        <>
            <div className="nav_icon">
            {curntUser == false ? null : <div>
                        <div className='member_div'>
                            <img className='img' src={curntUser[0]?.image} />
                            <span>{curntUser[0]?.name}</span>
                        </div>
                    </div>}
                <h2 className="conver_nav">Conversations</h2>
                <div className="container">
                    <input type="text" id="box" placeholder="Search a friend" className="search__box " onClick={show} />
                    <SearchOutlined id="icon" className='search__icon' />
                </div>
                <MoreOutlined className="more" />
            </div>
                <div>
                    <div className='main_div'>
                        <div className='members_main_div'>
                            {
                                dataArray.map((v, i) => {
                                    return (
                                        <div onClick={() => Chat(v.name, v.id, v.image)} key={i} className='member_div'>
                                            <img className='img' src={v?.image} />
                                            <span >{v?.name}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='chat_main_div'>
                            <div className='chat_navbar' style={{ display: 'flex' }}>
                                <img className='img' src={img} />
                                <h1>{Name}</h1>
                            </div>
                            <div className='chat_div'>
                                <span>{msg}</span>
                            </div>
                            <div>
                                <input className='inp' type="text" placeholder='Enter Message' value={inp} onChange={(e)=> {setInp(e.target.value)}} />
                                <button className='btn' onClick={Send}>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default Main