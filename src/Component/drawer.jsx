import React, { useState } from 'react';
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

const getData = () => {
    const q = query(collection(db, "users"), where("id", "==", auth.currentUser.uid));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const cities = [];
        querySnapshot.forEach((doc) => {
            cities.push(doc.data());
        });
        console.log("Current user ", cities);
    });
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log(user)
        getData()
      const uid = user.uid;
      // ...
    } else {
        console.log("Signout")
    }
  });
  
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
    const [collapsed, setCollapsed] = useState(true);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    const state = useSelector((state) => state?.AllDataReducers?.loginInformation)
    // console.log("state", state)
    // console.log("data===>",data)
    const name = state?.AllDataReducers?.loginInformation?.name;
    const imgURL = state?.AllDataReducers?.loginInformation?.image
    // const items = [
    //     getItem(name, '1', <img className='img' src={imgURL} />),
    //     getItem('Option 2', '2', <DesktopOutlined />),
    //     getItem('Option 3', '3', <ContainerOutlined />),
    //     getItem('Option 4', '4', <PieChartOutlined />),
    //     getItem('Option 5', '5', <DesktopOutlined />),
    //     getItem('Option 6', '6', <ContainerOutlined />),
    //     getItem('Option 7', '21', <PieChartOutlined />),
    //     getItem('Option 8', '2', <DesktopOutlined />),
    //     getItem('Option 9', '3', <ContainerOutlined />),
    //     getItem('Option 10', '4', <PieChartOutlined />),
    //     getItem('Option 5', '5', <DesktopOutlined />),
    //     getItem('Option 6', '6', <ContainerOutlined />),
    //     getItem('Option 1', '21', <PieChartOutlined />),
    //     getItem('Option 2', '2', <DesktopOutlined />),
    //     getItem('Option 3', '3', <ContainerOutlined />),
    //     getItem('Option 4', '4', <PieChartOutlined />),
    //     getItem('Option 5', '5', <DesktopOutlined />),
    //     getItem('Option 6', '6', <ContainerOutlined />),
    //     getItem('Option 7', '12', <PieChartOutlined />),
    //     getItem('Option 8', '2', <DesktopOutlined />),
    //     getItem('Option 9', '3', <ContainerOutlined />),
    //     getItem('Option 10', '4', <PieChartOutlined />),
    //     getItem('Option 5', '5', <DesktopOutlined />),
    //     getItem('Option 6', '6', <ContainerOutlined />),
    // ];
    
    return (
        <div
            style={{
                width: 140,
            }}
            className='sidebar_div'
        >
            <Button
                type="primary"
                onClick={toggleCollapsed}
            >
                {collapsed ? <MenuUnfoldOutlined className='unfold' /> : <MenuFoldOutlined className='fold' />}
            </Button>
            {/* <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                inlineCollapsed={collapsed}
                items={items}
            /> */}
            <div>
                {
                    // state.map((v,i)=>{
                    //     return(
                    //         <div>
                    //             <img className='img' src={v?.image}/>
                    //             <span>{v?.name}</span>
                    //         </div>
                    //     )
                    // })
                }
                {/* <button onClick={getData}>Click</button> */}
            </div>
        </div>
    );
};
export default Sidebar;