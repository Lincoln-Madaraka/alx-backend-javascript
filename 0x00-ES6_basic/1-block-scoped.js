export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;

    if (task && task2) {
      console.log('task and task2 are true');
    }
  }

  return [task, task2];
}
