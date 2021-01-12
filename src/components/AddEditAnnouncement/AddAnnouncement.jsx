import React from "react";
import s from "./AddAnnouncemet.module.css";
import { NavLink } from 'react-router-dom';
const AddAnnouncement = (props) => {

    let title = React.createRef();
    let description = React.createRef();
    let fail = React.createRef();
    let close = React.createRef();

    const changeTitle = () => {
        props.changeTitle(title.current.value);
    }
    const changeDescription = () => {
        props.changeDescription(description.current.value);
    }
    const addAnnouncement = () => {
        let titleText = title.current.value;
        let descriptionText = description.current.value;
        if (titleText.length > 0 && descriptionText.length > 0) {
            props.addAnnouncement(titleText, descriptionText);
            clearAll();
            close.current.click();
        }else{
            fail.current.style.display = 'block';
        }
    }
    const editAnnouncement = () => {
        window.history.pushState("", "", '/');
        let id = props.id;
        let titleText = title.current.value;
        let descriptionText = description.current.value;
        let date = props.date;
        props.editAnnouncement(id, titleText, descriptionText, date);
        clearAll();
        close.current.click();
    }
    const clearAll = () => {
        props.changeTitle('');
        props.changeDescription('');
        close.current.click();
    } 
    debugger
    const hideFail = () => {
        fail.current.style.display = 'none';
    } 
    
    return (<div className={s.add}>
        <div className={s.addWrapper}>
            <div className={s.alert} ref={fail}>
                <a className={s.closebtn} onClick={hideFail}>&times;</a>
            Fill all fields
            </div>
            <div className={s.inputWrapper}>
                <input type="text" className={s.input} value={props.title} onChange={changeTitle} ref={title} placeholder="Title" />
            </div>
            <div className={s.textWrapper}>
                <textarea className={s.text} cols="30" rows="10" value={props.description}
                    onChange={changeDescription} ref={description} placeholder="Description"></textarea>
            </div>
            <div className={s.buttonWrapper}>
                {props.edit ?
                    <button className={s.but} onClick={editAnnouncement}>Edit</button> :
                    <button className={s.but} onClick={addAnnouncement}>Add</button>}
                    <button className={s.but} onClick={clearAll}>Close</button>
                    <NavLink to='/' className={s.hide} ref={close}></NavLink>
            </div>

        </div>
    </div>);
}
export default AddAnnouncement;