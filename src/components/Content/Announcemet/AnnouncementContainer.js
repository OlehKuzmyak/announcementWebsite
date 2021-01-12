import { connect } from "react-redux";
import { changeDescriptionAC, changeTitleAC, setDateAC, setIdAC } from "../../../redux/reducers/AddEdit-reducer";
import { deleteAnnouncementAC, setSimilarIdAC } from "../../../redux/reducers/announcement-reducer";
import Announcement from "./Announcement";

let mapStateToProps = (state) => {
    return {

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        editAnnouncement: (id, title, description, date) => {
            dispatch(setIdAC(id));
            dispatch(changeTitleAC(title));
            dispatch(changeDescriptionAC(description));
            dispatch(setDateAC(date));
        },
        deleteAnnouncement: (id) => {
            dispatch(deleteAnnouncementAC(id));
        },
        setSimilarId: (id) => {
            dispatch(setSimilarIdAC(id));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Announcement);