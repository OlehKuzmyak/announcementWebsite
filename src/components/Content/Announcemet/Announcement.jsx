import { NavLink } from 'react-router-dom';
import s from './Announcement.module.css';
const Announcement = (props) => {
    let description;
    if (props.description.length > 100) {
        description = props.description.slice(0, -100);
        description += '...';
    } else {
        description = props.description;
    }
    return (<div className={s.wrapper}>
        <div className={s.data}>
            <span>{props.title}</span><br/>
            <span>{description}</span><br/>
            <span>{props.date}</span>
        </div>
        <div className={s.buttons}>
        <button className={s.delButon} onClick={() => { props.setSimilarId(props.id) }}>Similar</button>
            <NavLink to='/edit' className={s.editButon} onClick={() => { props.editAnnouncement(props.id, props.title, props.description, props.date) }}>
                Edit</NavLink>
            <button className={s.delButon} onClick={() => { props.deleteAnnouncement(props.id) }}>Delete</button>
        </div>
        <hr />
    </div>);
}
export default Announcement;