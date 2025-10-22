import { fetchPost } from "./api.js";
import { runQueue } from "./queque.js";

const TASK_COUNT = 15;
const CONCURRENCY = 3; // макс колв-о задач которые могут выполнить выполнить одновременно

const startButton = document.getElementById("startButton");
const logContainer = document.getElementById("logContainer");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");

startButton.addEventListener("click", async () => {
  startButton.disabled = true; // отключение кнопки для избежания повторного тыка
  logContainer.innerHTML = ""; // чистим старые лоиг
  progressBar.style.width = "0%";
  progressText.textContent = "0%";

  // Выводим заголовок
  const headerItem = document.createElement("div");
  headerItem.className = "log-item status-header";
  headerItem.textContent = `=== Starting queue with concurrency = ${CONCURRENCY} ===`;
  logContainer.appendChild(headerItem);

  let successCount = 0; // счётчики для итогов
  let errorCount = 0;
  const startTime = Date.now();

  const handleProgress = (progress) => {
    const { type, id, duration, error, completed, total } = progress; // деструктуризируем

    if (type === "progress") {
      // прогресс бар
      const percentage = Math.round((completed / total) * 100);
      progressBar.style.width = `${percentage}%`;
      progressText.textContent = `${percentage}%`;
      return;
    }

    const item = document.createElement("div");
    item.className = "log-item";
    let statusText = "";
    //создание элемов для лога
    switch (type) {
      case "start": // задача взята в работу
        item.className = "log-item status-running";
        statusText = `🟢 Fetching post ${id}...`;
        break;
      case "done": // выполнена успешно
        successCount++;
        item.className = "log-item status-fulfilled";
        statusText = `✅ post ${id} done (${duration}ms)`;
        break;
      case "error": // ошибка дропнулась
        errorCount++;
        item.className = "log-item status-rejected";
        statusText = `❌ post ${id} failed (${error.message})`;
        break;
      case "summary": // Для вывода итогов в конце
        item.className = "log-item status-summary";
        const durationSec = ((Date.now() - startTime) / 1000).toFixed(1);
        statusText = `=== Summary ===
        Total tasks: ${total}
        ✅ Success: ${successCount}
        ❌ Failed: ${errorCount}
        ⏱ Duration: ${durationSec}s`;
        break;
    }

    item.textContent = statusText;
    logContainer.appendChild(item);

    logContainer.scrollTop = logContainer.scrollHeight;
  };

  const tasks = Array.from({ length: TASK_COUNT }, (_, i) => {
    return () =>
      fetchPost(i + 1).then((result) => {
        return result;
      });
  });

  await runQueue(tasks, CONCURRENCY, handleProgress); // код блокается пока не будут выполнены все 15 задач
  handleProgress({
    // вызываем ещё раз для вывода финал отчёта
    type: "summary",
    total: TASK_COUNT,
    success: successCount,
    failed: errorCount,
  });

  startButton.disabled = false;
  progressText.textContent = "Готово!";
});
