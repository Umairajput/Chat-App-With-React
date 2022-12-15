import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { collection, query, where, onSnapshot } from "firebase/firestore";
// import {db} from "../Screen/Signup";
import { db, auth } from '../Firebase/firebase';
import { onAuthStateChanged } from "firebase/auth";
import {
    ContainerOutlined,
    DesktopOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';

// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         // console.log(user)

//         // getData()
//         const uid = user.uid;
//         // ...
//     } else {
//         console.log("Signout")
//     }
// });

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const Sidebar = () => {
    const [curntUser, setCurntUser] = useState([])
    const [collapsed, setCollapsed] = useState(true);
    const [dataArray, setDataArray] = useState([])
    const [Name, setName] = useState()
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    useEffect(() => {
        AllData();
        getData();
    }, [])
    const state = useSelector((state) => state?.AllDataReducers?.loginInformation)
    // console.log("state", state)
    // console.log("data===>",data)
    const name = state?.AllDataReducers?.loginInformation?.name;
    const imgURL = state?.AllDataReducers?.loginInformation?.image

    function AllData() {
        // setDataArray([])
        // console.log("data",data,data.length)
        let data = []
        const q = query(collection(db, "users"), where("id", "!=", auth?.currentUser?.uid));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            querySnapshot?.forEach((doc) => {
                // console.log('doc.data()',doc?.data())
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
            // console.log("doc.data()")
            setCurntUser(user)
            // console.log("cuuuuuu===>",currentUser)
        });
    }
    console.log("All user ", dataArray);
    console.log("Current user ", curntUser);
    let currentID = auth.currentUser.uid
    function Chat(name, id) {
        setName(name)
        // if (id > currentID) {
        //     console.log(id + currentID)
        // } else {
        //     console.log(currentID + id)
        // }
        // console.log(id, currentID)
        // console.log("Name in function",Name)
    }
    // console.log("Name in out of function",Name)
    return (
        <div
            style={{
                width: 140,
            }}
            className='sidebar_div'
        >
            {/*   */}
            {/* <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                inlineCollapsed={collapsed}
                items={items}
            /> */}
            {/* <div>
                <h1>Profile</h1>
            </div> */}
            {curntUser == false ? null : <div>
                <div className='member_div'>
                    <img className='img' src={curntUser[0]?.image} />
                    <span>{curntUser[0]?.name}</span>
                </div>
            </div>}
            <br /><br /><br /><br />
            <div className='main_div'>
                <div className='members_main_div'>
                    {
                        dataArray.map((v, i) => {
                            return (
                                <div onClick={() => Chat(v.name, v.id)} key={i} className='member_div'>
                                    <img className='img' src={v?.image} />
                                    <span >{v?.name}</span>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <h1>{Name}</h1>
                </div>
            </div>
        </div>
    );
};
export default Sidebar;