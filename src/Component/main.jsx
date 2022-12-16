import React, { useEffect, useState } from 'react';
import { MoreOutlined, SearchOutlined, SendOutlined } from "@ant-design/icons"
import { useSelector } from 'react-redux'
import { collection, query, where, onSnapshot, addDoc, Timestamp } from "firebase/firestore";
import { db, auth } from '../Firebase/firebase';
import { onAuthStateChanged } from "firebase/auth";

import { async } from '@firebase/util';
function Main() {
    const [curntUser, setCurntUser] = useState([])
    const [dataArray, setDataArray] = useState([])
    const [Name, setName] = useState()
    const [img, setImg] = useState()
    const [msg, setMsg] = useState()
    const [messag,setMessag] = useState([])
    // const [ids,setIds] = useState("")
    useEffect(() => {
        AllData();
        getData();
    }, [])
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // getMessages()
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
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
    // console.log("All user ", dataArray);
    // console.log("Current user ", curntUser);
    let currentID = auth?.currentUser?.uid
    function Chat(name, id, image) {
        setName(name)
        setImg(image)
        if (id > currentID) {
            localStorage.setItem("ids", id + currentID)
            // console.log(getIds)
        } else {
            localStorage.setItem("ids", currentID + id)
            // console.log(getIds)
        }
        // console.log(id, currentID)
    }
    const show = () => {
        var el = document.getElementById("box");
        el.classList.toggle("show");
    }
    const Send = async () => {
        let bothId = localStorage.getItem("ids")
        console.log(bothId)
        setMsg("")
        // console.log(ids)
        // Add a new document with a generated id.
        const docRef = await addDoc(collection(db, "messages"), {
            date: Timestamp.fromDate(new Date()),
            message: msg,
            myUid: currentID,
            // bothUid: bothId,
            messageType: "text",
            messageStatus: "unread"
        });
        // console.log(msg)
        // console.log("successFul")
        // console.log("Document written with ID: ", docRef.id);
    }
    // console.log("ids",ids)
    // function getMessages() {
    //     const q = query(collection(db, "messages"), where("bothUid", "==", bothId))
    //     let messages = [];
    //     const unsubscribe = onSnapshot(q, (querySnapshot) => {
    //         querySnapshot.forEach((doc) => {
    //             messages.push(doc.data());
    //         });
    //         // console.log("message", messages);
    //     });
    //     setMessag(messages)
    // }
    return (
        <div className='body'>
            <div className="nav_icon">
                {curntUser == false ? null : <div>
                    <div className='member_div test'>
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
                            <img className='img nav_img' src={img} />
                            <h2 className='h2'>{Name}</h2>
                        </div>
                        <div className='chat_div'>
                            {messag.map((v,i)=>{
                                // console.log("msg====>",v.message)
                                return(
                                <h4>{v?.message}</h4>
                                )
                            })
                        }
                        </div>
                        <div>
                            <input className='inp' type="text" placeholder='Enter Message' value={msg} onChange={(e) => { setMsg(e.target.value) }} />
                            <button className='btn' onClick={Send}><SendOutlined className='send'/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main