import axios from "axios";
import React, { useEffect, useState } from "react";
import a from "./main.module.css";

const Main = () => {
  let [task, setTask] = useState("");
  let [data, setData] = useState([]);
  let [valid, setValid] = useState(false);

  let itemchange = (e) => {
    setTask(e.target.value);
  };

  useEffect(() => {
    axios.get(`http://localhost:5000/content`).then((res) => {
      setData(res.data);
    });
  }, [data]);

  let form = (e) => {
    e.preventDefault();
    if (task.length > 0) {
      let payload = { task };
      axios.post(`http://localhost:5000/content`, payload);
      setTask("");
    } else {
      setValid(true);
    }
  };

  let deletethis = (index) => {
    axios.delete(`http://localhost:5000/content/${index}`);
  };
  return (
    <>
      <div id={a.main}>
        <form>
          <input
            type="text"
            id={a.addfield}
            placeholder="  Type next task"
            value={task}
            onChange={itemchange}
            style={valid ? { borderColor: "red" } : {}}
          />{" "}
          <button type="submit" id={a.addbutton} onClick={form}>
            Add item
          </button>
        </form>
      </div>
      <ul id={a.list}>
        {data.map((x) => {
          return (
            <>
              <h1 id={a.task}>{x.task}</h1>{" "}
              <button
                id={a.delete}
                onClick={() => {
                  deletethis(x.id);
                }}
              >
                {" "}
                X
              </button>{" "}
              <br />
            </>
          );
        })}
      </ul>
    </>
  );
};

export default Main;
