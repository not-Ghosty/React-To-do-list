import axios from "axios";
import React, {useEffect, useState} from "react";
import a from "./main.module.css";
import delicon from "./delete.png";

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
      let payload = {task};
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
      <div id={a.nav}>
        <h1>TODO List</h1>
        <form className={a.form}>
          <input
            type="text"
            placeholder="What would you like to do?"
            value={task}
            onChange={itemchange}
            style={valid ? {borderColor: "red"} : {}}
          />{" "}
          <button type="submit" onClick={form}>
            Add
          </button>
        </form>
        <div id={a.list}>
          <h2>Todo list</h2>
          <table className={a.table}>
            <tr id={a.head}>
              <td>List</td>
              <td>Close</td>
            </tr>

            {data.map((x) => {
              return (
                <>
                  {/* <h1 id={a.task}>{x.task}</h1>{" "}
                  <button
                    id={a.delete}
                    onClick={() => {
                      deletethis(x.id);
                    }}
                  >
                    {" "}
                    <img src={delicon} alt="" />
                  </button>{" "}
                  <br /> */}
                  <tr className={a.tasks}>
                    <td className={a.tasks}>{x.task}</td>
                    <td className={a.delbut}>
                      <button
                        className={a.delete}
                        onClick={() => {
                          deletethis(x.id);
                        }}
                      >
                        {" "}
                        <img src={delicon} alt="" />
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};

export default Main;
