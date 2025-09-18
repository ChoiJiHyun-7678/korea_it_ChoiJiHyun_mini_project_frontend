export const Container = {
  textAlign: "center",
  padding: "20px",
};

export const TaskItem = (completed) => ({
  margin: "8px",
  textDecoration: completed ? "line-through" : "none",
});
