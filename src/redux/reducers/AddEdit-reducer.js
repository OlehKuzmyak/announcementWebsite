export const CHANGE_TITLE = 'CHANGE_TITLE';
export const CHANGE_DESCRIPTION = 'CHANGE_DESCRIPTION';
export const SET_ID = 'SET_ID';
export const SET_DATE = 'SET_DATE';

const AddEditReducer = (state = initialState, action) =>{
    if(action.type === CHANGE_TITLE){        
        let stateCopy = {...state};
        stateCopy.title = action.text;
        return stateCopy;
    }else if(action.type === CHANGE_DESCRIPTION){
        let stateCopy = {...state};
        stateCopy.description = action.text;
        return stateCopy;
    }else if(action.type === SET_ID){
        let stateCopy = {...state};
        stateCopy.id = action.id;
        return stateCopy;
    }else if(action.type === SET_DATE){
        let stateCopy = {...state};
        stateCopy.date = action.date;
        return stateCopy;
    }
    return state;
}
const initialState ={
    id:-1,
    title:'',
    description:'',
    date:'',
}

export let changeTitleAC = (text)=>{return{type:CHANGE_TITLE, text}};
export let changeDescriptionAC = (text)=>{return{type:CHANGE_DESCRIPTION, text}};
export let setIdAC = (id)=>{return{type:SET_ID, id}};
export let setDateAC = (date)=>{return{type:SET_DATE, date}};
export default AddEditReducer;