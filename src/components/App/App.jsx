import "../../style/index.scss"
import {Card} from "../Card";

import {fetchAdvice} from "../../store/adviceSlice";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAdvice())
  }, [dispatch])
  return (
    <div className="App">
      <div className="wrapper">
        <Card />
      </div>
    </div>
  );
}

export default App;
