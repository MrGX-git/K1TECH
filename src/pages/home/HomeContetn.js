
import { useState } from "react";

import Container from "../../components/Container";
import BoxItem from "../../components/BoxItem";

import './home.css'

const HomeContent =()=> {
    const [showBoxItem, setBoxItem] = useState(false)

    const renderContent =()=> {
        let content
        if (showBoxItem) {
            content = <BoxItem paragraf='კეთილი იყოს' text='თქვენი მობძანება' />
        } else {
            content = <Container title='K1' name='Tech'/>
        }
        return content
    }
    const handClick =()=> {
        setBoxItem(!showBoxItem)
    }
    return (
        <div>
            {renderContent()}
            <button className="btn btn-outline-prypary" onClick={handClick}>🌎</button>
        </div>
    )
}
export default HomeContent