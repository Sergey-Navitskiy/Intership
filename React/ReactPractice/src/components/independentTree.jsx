export const IndependentTree = React.memo(({ color }) => {
  let now = performance.now();

  while (performance.now() - now < 400) {
    // Do nothing for 100ms
  }
  console.log("RENDER");
  console.log("color: ", color);

  return <p>Very slow component</p>;
});
