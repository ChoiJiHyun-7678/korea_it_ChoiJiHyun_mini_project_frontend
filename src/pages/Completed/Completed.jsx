/** @jsxImportSource @emotion/react */
import * as s from "./style";

function Completed({ completed }) {
  return (
    <div css={s.container}>
      <h1>완료된 할일</h1>
      <ul css={s.taskList}>
        {completed.map((t) => (
          <li key={t.id} css={s.taskItem}>{t.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default Completed;
