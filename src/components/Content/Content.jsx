import Announcement from "./Announcemet/AnnouncementContainer";
import s from "./Content.module.css";
const Content = (props) => {
    // props.similarId >= 0
    let biggest = [{ number: -1 }, { number: -1 }, { number: -1 }];
    if (props.similarId >= 0) {
        let mostMatchTitle = [];
        let mostMatchDescription = [];
        let count = 0;
        props.announcements[props.similarId].
            title.split(' ').map(word => {
                props.announcements.map(el => {
                    if (el.id != props.similarId) {
                        count += (el.title.match(new RegExp(word, "g")) || []).length;
                        if (mostMatchTitle[el.id] == undefined) { mostMatchTitle[el.id] = 0 }
                        mostMatchTitle[el.id] += count;
                        count = 0;
                    }
                })
            })
        props.announcements[props.similarId].description.split(' ').map(word => {
            props.announcements.map(el => {
                if (el.id != props.similarId) {
                    count += (el.description.toLowerCase().match(new RegExp(word.toLowerCase(), "g")) || []).length;
                    if (mostMatchDescription[el.id] == undefined) { mostMatchDescription[el.id] = 0 }
                    mostMatchDescription[el.id] += count;
                    count = 0;
                }
            })
        })
        let mostMutch = [];
        for (let key in mostMatchTitle) {
            mostMutch[key] = mostMatchTitle[key] + mostMatchDescription[key];
        }
        for (let i = 0; i < biggest.length; ++i) {
            for (let key in mostMutch) {
                if (mostMutch[key] > biggest[i].number) {
                    let check = true;
                    biggest.map(el => {

                        if (el.id == key) {
                            check = false;
                        }
                    });
                    if (check) {
                        biggest[i].id = key;
                        biggest[i].number = mostMutch[key];
                    }
                }
            }

        }
        return (<div className={s.Content}>
            {props.announcements.map(el => {
                let check = false;
                biggest.map(big => {
                    if (big.id == el.id) {
                        check = true;
                    }
                })
                if (check)
                    return (el.title.toLowerCase().match(props.searchText.toLowerCase()) || props.searchText === '') ?
                        (<Announcement key={el.id}
                            id={el.id}
                            title={el.title}
                            description={el.description}
                            date={el.date}
                        />) : '';
            })}
            <button onClick={()=>{props.setSimilarId(-1)}}>Back</button>
        </div>);
    }
    return (<div className={s.Content}>
        {props.announcements.map(el => {
            return (el.title.toLowerCase().match(props.searchText.toLowerCase()) || props.searchText === '') ?
                (<Announcement key={el.id}
                    id={el.id}
                    title={el.title}
                    description={el.description}
                    date={el.date}
                />) : '';
        })}
    </div>);

}
export default Content;