function PlayPause(propartis) {
  console.log(propartis);

  const { text, title } = propartis;
  return (
    <>
      <h1>{title}</h1>
      <button>{text}</button>
    </>
  );
}
export default PlayPause;
