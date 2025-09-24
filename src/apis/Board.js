export const getTasks = async (username) => {
  const res = await fetch(`http://localhost:8080/api/tasks/${username}`);
  return res.json();
};

export const addTask = async (username, task) => {
  const res = await fetch(`http://localhost:8080/api/tasks/${username}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return res.json();
};
