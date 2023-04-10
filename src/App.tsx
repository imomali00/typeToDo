import { ChangeEvent, useState } from "react";
import styles from "./home.module.css";
import { IData } from "./interfaces";
import { data } from "./constants";

function App(): JSX.Element {
  const [title, setTitle] = useState<string>("");
  const [arr, setArr] = useState<IData[]>(data);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };

  const handleSubmit = (): void => {
    if (!title) return;
    setArr((prevArr) => [
      ...prevArr,
      { title, id: new Date().getTime(), description: "description" },
    ]);
    setTitle("");
  };

  const deleteItem = (id: number): void => {
    setArr((prevArr) => prevArr.filter((item) => item.id !== id));
  };

  return (
    <div className={styles.todo}>
      <h1 className={styles.title}>App To Do</h1>
      <input
        placeholder="Enter Todo"
        value={title}
        onChange={changeHandler}
        className={styles.input}
      />
      <button onClick={handleSubmit} className={styles.button}>
        Add Todo
      </button>
      <div className={styles.card}>
        {arr.map((c) => (
          <div className={styles.cardItem} key={c.id}>
            <p>{c.title}</p>
            <div className={styles.delBtn}>
              <button onClick={() => deleteItem(c.id)}>Del</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
