import { connect } from "react-redux";
import { setSimilarIdAC } from "../../redux/reducers/announcement-reducer";
import Content from "./Content";

let mapStateToProps = (state)=>{
    return{
        announcements: state.announcement.announcements,
        searchText: state.announcement.searchAnnouncemnts,
        similarId:state.announcement.similarId,
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        setSimilarId: (id) => {
            dispatch(setSimilarIdAC(id));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);