import { Dombyra } from "./pages/tuner/components/Dombyra/dombyra";
import {Routes, Route} from "react-router-dom";
import { Footer } from "./pages/tuner/components/Footer/footer";
import { Prima } from "./pages/tuner/components/Prima/prima";
import { Qobyz } from "./pages/tuner/components/Qyl/qobyz";
import {Main} from "./pages/main/Main";
import {Registration} from "./pages/auth/Registration";
import {AuthPage} from './pages/auth/Login'

import {DombyraGame} from './pages/game/dombyraGame/dombyraGame'
import { FirstPage } from "./pages/firstpage/Firstpage";

import { Edu } from "./pages/edu/main";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FirstPage/>}/>
        <Route path="/auth" element={<AuthPage/>}/>
        <Route path="/another" element={<Main/>} />
        <Route path="/dombyra" element={<Dombyra/>}/>
        <Route path="/qobyz" element={<Qobyz/>}/>
        <Route path="/prima-qobyz" element={<Prima/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/game" element={<DombyraGame/>}/>
        <Route path="/edu" element={<Edu/>}/>
      </Routes>
    </div>
  );
}

export default App;
