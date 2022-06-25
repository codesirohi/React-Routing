import { Route, Routes } from "react-router-dom";
import AllMeetups from "./Pages/AllMeetups";
import Favourites from "./Pages/Favourites";
import NewMeetUps from "./Pages/NewMeetup";

function App() {
  return (
    <div>
      {/* latest version of react-router-dom does not need a "switch" */}
      <Routes> 
        <Route path="/" element={<AllMeetups />} />
        <Route path="/new-meetup" element={<NewMeetUps />} />
        <Route path="/favorites" element={<Favourites />} />
      </Routes>
    </div>
  );
}

export default App;
