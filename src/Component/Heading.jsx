function Heading(propartis){
  console.log(propartis)
  const {text} = propartis
  return (
     <div class='one'>
     <h1>{text}</h1>
     </div>
  );

}

export default Heading;