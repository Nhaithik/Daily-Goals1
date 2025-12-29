function addGoal() {
  let input = document.getElementById("goalInput");
  let goal = input.value;

  if (goal === "") return;

  let li = document.createElement("li");
  li.textContent = goal;
  document.getElementById("goalList").appendChild(li);

  input.value = "";
}
