export function fetchPost(id) {
  return new Promise((resolve, reject) => {
    const delay = Math.random() * 1000 + 500;
    setTimeout(() => {
      if (Math.random() < 0.2) {
        return reject(new Error("Сетевая ошибка: не удалось загрузить пост"));
      }

      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    }, delay);
  });

  if (Math.random() < 0.2) {
    return Promise.reject(
      new Error("Сетевая ошибка: не удалось загрузить пост")
    );
  }

  return;
}

// function mockFetchPost(ID, shouldSuccses = true) {
//   return new Promise((resolve, reject) => {
//     const delay = Math.random() * 100000 + 200;
//     setTimeout(() => {
//       if (shouldSuccses) {
//         const fakePostData = {
//           userId: 1,
//           id: ID,
//           title: "Это заголовок фейкового поста",
//           body: "Это тело поста, полученное из нашей мок-функции.",
//         };
//         console.log("Запрос успешен! Вызываем resolve().");
//         resolve(fakePostData);
//       } else {
//         const fakeError = new Error(
//           `Сервер не смог найти пост с ID ${ID} (ошибка 404)`
//         );
//         console.log("Запрос провален! Вызываем reject().");
//         reject(fakeError);
//       }
//     }, delay);
//   });
// }
