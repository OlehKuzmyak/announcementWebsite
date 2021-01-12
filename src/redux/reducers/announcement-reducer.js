export const ADD_ANNOUNCEMENT = 'ADD_ANNOUNCEMENT';
export const EDIT_ANNOUNCEMENT = 'EDIT_ANNOUNCEMENT';
export const DELETE_ANNOUNCEMENT = 'DELETE_ANNOUNCEMENT';
export const SET_SEARCH = 'SET_SEARCH';
export const SET_SIMILAR_ID = 'SET_SIMILAR_ID';

const announcementReducer = (state = initialState, action) => {
    if (action.type === ADD_ANNOUNCEMENT) {
        debugger
        let stateCopy = { ...state, announcements: [...state.announcements] };
        if (stateCopy.announcements.length > 0) {
            stateCopy.announcements.push(
                {
                    id: stateCopy.announcements[stateCopy.announcements.length - 1].id + 1,
                    ...action.announcement
                });
        } else {
            stateCopy.announcements.push(
                {
                    id: 0,
                    ...action.announcement
                });
        }
        return stateCopy;
    } else if (action.type === EDIT_ANNOUNCEMENT) {
        let stateCopy = { ...state, announcements: [...state.announcements]};
        debugger
        stateCopy.announcements[action.announcement.id] = action.announcement;
        return stateCopy;
    } else if (action.type === DELETE_ANNOUNCEMENT) {
        let stateCopy = { ...state, announcements: [...state.announcements] };
        let indexOfElement = null;
        stateCopy.announcements.map((el, index) => {
            if (el.id === action.id) {
                indexOfElement = index;
            }
            return el;
        })
        if (indexOfElement !== null) {
            stateCopy.announcements.splice(indexOfElement, 1);
        }
        console.log(stateCopy);
        return stateCopy;
    }else if (action.type === SET_SEARCH) {
        let stateCopy = { ...state};
        stateCopy.searchAnnouncemnts = action.text;
        return stateCopy;
    }else if (action.type === SET_SIMILAR_ID) {
        let stateCopy = { ...state};
        stateCopy.similarId = action.id;
        debugger
        return stateCopy;
    }
    return state;
}
const initialState = {
    announcements: [
        {
            id: 0,
            title: 'Lost my dog',
            description: 'My dog doesnt love me. Sad',
            date: '30/12/2020',
        },
        {
            id: 1,
            title: 'Lost my cat',
            description: 'My cat doesnt love me. Sad',
            date: '30/12/2020',
        },
        {
            id: 2,
            title: 'Lost computer',
            description: 'My computer doesnt love me.',
            date: '30/12/2020',
        },
        {
            id: 3,
            title: 'Lost dog and cat',
            description: 'My dog and cat dont love me.',
            date: '30/12/2020',
        },
        {
            id: 4,
            title: 'Lost dolfins',
            description: 'dolfin dolfin dolfin dolfin dolfin.',
            date: '30/12/2020',
        },
        {
            id: 5,
            title: 'Lost globus',
            description: 'my globus is like ball.',
            date: '30/12/2020',
        },
        {
            id: 6,
            title: 'Lost dolfin',
            description: 'My dolfin doesnt love me.',
            date: '30/12/2020',
        },
        {
            id: 7,
            title: 'Lost dolfin',
            description: 'My dolfin doesnt love me.',
            date: '30/12/2020',
        },
        {
            id: 20,
            title: 'Lost dolfin',
            description: 'funny',
            date: '30/12/2020',
        },
        {
            id: 9,
            title: 'Lost dog or cat',
            description: 'Description of lost pet including: general height/weight, nature of pet (friendly/timid/etc.), detailed'+
            'coloring, any distinguishing markings or characteristics. Also include where the pet was lost and phone'+
            'numbers where you can be reached at. Make sure all phone numbers are correct and current and'+
            'number is bolded.',
            date: '30/12/2020',
        },
    ],
    searchAnnouncemnts:'',
    similarId:-1,
}
export let addAnnouncementAC = (announcement) => { return { type: ADD_ANNOUNCEMENT, announcement } };
export let editAnnouncementAC = (announcement) => { return { type: EDIT_ANNOUNCEMENT, announcement } };
export let deleteAnnouncementAC = (id) => { return { type: DELETE_ANNOUNCEMENT, id } };
export let setSearchTextAC = (text) => { return { type: SET_SEARCH, text } };
export let setSimilarIdAC = (id) => { return { type: SET_SIMILAR_ID, id } };
export default announcementReducer;