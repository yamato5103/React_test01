import "./styles.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のTODO</p>
        <ul>
          <li>まだおわっていまい</li>
          <button>complete!</button>
          <button>delete</button>
        </ul>
      </div>
      <div>
        <p>完了のTODO</p>
        <ul>
          <li>bbbbb</li>
          <button>cancel</button>
        </ul>
      </div>
    </>
  );
};
