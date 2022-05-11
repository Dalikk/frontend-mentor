import "../../style/index.scss"
import {Person} from "../Person";
import {TrackingCard} from "../TrackingCard";
import {useState} from "react";

const tcContents = [
  {
    id: 1,
    title: "Work",
    time: {
      daily: "5hrs",
      weekly: "32hrs",
      monthly: "103hrs",
    },
    prev: {
      daily: "Previous - 7hrs",
      weekly: "Previous - 36hrs",
      monthly: "Previous - 128hrs",
    },
  },
  {
    id: 2,
    title: "Play",
    time: {
      daily: "1hr",
      weekly: "10hrs",
      monthly: "23hrs",
    },
    prev: {
      daily: "Previous - 2hrs",
      weekly: "Previous - 8hrs",
      monthly: "Previous - 29hrs",
    },
  },
  {
    id: 3,
    title: "Study",
    time: {
      daily: "0hrs",
      weekly: "4hrs",
      monthly: "13hrs",
    },
    prev: {
      daily: "Previous - 1hr",
      weekly: "Previous - 7hrs",
      monthly: "Previous - 19hrs",
    },
  },
  {
    id: 4,
    title: "Exercise",
    time: {
      daily: "1hr",
      weekly: "4hrs",
      monthly: "11hrs",
    },
    prev: {
      daily: "Previous - 1hr",
      weekly: "Previous - 5hrs",
      monthly: "Previous - 18hrs",
    },
  },
  {
    id: 5,
    title: "Social",
    time: {
      daily: "1hr",
      weekly: "5hrs",
      monthly: "21hrs",
    },
    prev: {
      daily: "Previous - 3hrs",
      weekly: "Previous - 10hrs",
      monthly: "Previous - 23hrs",
    },
  },
  {
    id: 6,
    title: "Self Care",
    time: {
      daily: "0hrs",
      weekly: "2hrs",
      monthly: "7hrs",
    },
    prev: {
      daily: "Previous - 1hr",
      weekly: "Previous - 2hrs",
      monthly: "Previous - 11hrs",
    },
  },


]

const App = () => {
  const [activeId, setActiveId] = useState(2);

  return (
    <div className="App">
      <div className="App__wrapper">
        <Person
          activeId={activeId}
          setActiveId={setActiveId}
        />
        {tcContents.map(item => (
          <TrackingCard
            key={item.id}
            activeId={activeId}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
