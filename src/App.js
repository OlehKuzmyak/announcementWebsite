import { Provider } from 'react-redux';
import './App.css';
import AddAnnouncement from './components/AddEditAnnouncement/AddAnnouncementContainer';
import Content from './components/Content/ContentContainer';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Header from './components/header/headerContainer';

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={props.store}>
          <Header />
          <div className="Content">
            <Content />
            <Route path='/add' render={(props) => (
              <AddAnnouncement />
            )} />
            <Route path='/edit' render={(props) => (
              <AddAnnouncement edit={true} />
            )} />
          </div>
        </Provider>
      </BrowserRouter>
    </div >
  );
}

export default App;
