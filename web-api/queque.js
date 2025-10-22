export async function runQueue(tasks, concurrency, onProgress) {
  // функция для отслеживания состояния(ОнПрогресс)
  const results = []; // для хранения результата
  let running = 0; // кол-во запущенных но не выполненых задач
  let index = 0; // индекс следующей задачи которую нужно врубить
  let completed = 0; // завершённые задачи
  const total = tasks.length; // общее количество задач

  // Отправляем начальный прогресс
  onProgress({ type: "progress", completed: 0, total });

  return new Promise((resolve) => {
    const tryStart = () => {
      if (completed >= total) {
        return resolve(results);
      }

      while (running < concurrency && index < total) {
        // пока не достигли лимита параллельности и ещё не остались запущенные задачи
        const currentIndex = index; // сохранение текущего индекса
        const taskId = currentIndex + 1; // номер задачи
        index++;
        running++;
        // Сообщаем о старте
        onProgress({ type: "start", id: taskId });

        const startTime = Date.now();
        tasks[currentIndex]() // элемент из массива задач(Запуск функции-задачи  возвращает промис и мы его обрабатываем )
          .then((result) => {
            const duration = Date.now() - startTime;
            results[currentIndex] = result; // сохранение результатов в массив по её ориг индексу
            onProgress({ type: "done", id: taskId, duration });
          })
          .catch((error) => {
            results[currentIndex] = null;
            onProgress({ type: "error", id: taskId, error });
          })
          .finally(() => {
            running--; // освобождаем место
            completed++;
            // Обновляем прогресс
            onProgress({ type: "progress", completed, total });
            tryStart(); //Управление очередью. после завершение вызов снова. тк как running уменьшилось опять будет проверятся условие running < concurency
          });
      }
    };

    tryStart();
  });
}
