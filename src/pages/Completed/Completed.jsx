import * as s from "./style";

function Completed({ completed }) {
  return (
    <div style={s.Container}>
      <h1>완료된 할일</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {completed.map((t) => (
          <li key={t.id} style={s.Item}>{t.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default Completed;
