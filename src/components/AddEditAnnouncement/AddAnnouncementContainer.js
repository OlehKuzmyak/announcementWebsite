import { connect } from "react-redux";
import { changeDescriptionAC, changeTitleAC } from "../../redux/reducers/AddEdit-reducer";
import { addAnnouncementAC, editAnnouncementAC } from "../../redux/reducers/announcement-reducer";
import AddAnnouncement from "./AddAnnouncement";

let mapStateToProps = (state)=>{
    return{
        id:state.addEditPage.id,
        title:state.addEditPage.title,
        description:state.addEditPage.description,
        date:state.addEditPage.date,
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
       changeTitle:(text)=>{
           dispatch(changeTitleAC(text));
       },
       changeDescription:(text)=>{
           dispatch(changeDescriptionAC(text));
       },
       addAnnouncement:(title, description)=>{
        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1; 
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();
        
        let date = year + "/" + month + "/" + day;
           dispatch(addAnnouncementAC({title, description, date}));
       },
       editAnnouncement:(id, title, description, date)=>{
        dispatch(editAnnouncementAC({id, title,description, date}));
       }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddAnnouncement);