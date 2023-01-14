import React, { useState } from 'react';
import Tab1 from './tab1';
import Tab2 from './tab2';
import Tab3 from './tab3';

import '../App.css';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTab1 = () => {
        setActiveTab("tab1");
    }

    const handleTab2 = () => {
        setActiveTab("tab2");
    }
    const handleTab3 = () => {
        setActiveTab("tab3");
    }

    return(
        <div className='container my-3'>
            <ul className='nav p-2'>
                <li className={activeTab === "tab1" ? "active" : ""} onClick={handleTab1}>Tab 1</li>
                <li className={activeTab === "tab2" ? "active" : ""} onClick={handleTab2}>Tab 2</li>
                <li className={activeTab === "tab3" ? "active" : ""} onClick={handleTab3}>Tab 3</li>
            </ul>

            <div className='messageBox'>
                {activeTab === "tab1" ? <Tab1/> : ""}
                {activeTab === "tab2" ? <Tab2/> : ""}
                {activeTab === "tab3" ? <Tab3/> : ""}
            </div>


        </div>
    )
}

export default Tabs;