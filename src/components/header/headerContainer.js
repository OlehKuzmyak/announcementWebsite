import { connect } from "react-redux";
import { setSearchTextAC } from "../../redux/reducers/announcement-reducer";
import Header from "./header";

let mapStateToProps = (state)=>{
    return{
        searchText: state.announcement.searchAnnouncemnts,
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        setSearchText:(text)=>{
            dispatch(setSearchTextAC(text));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);