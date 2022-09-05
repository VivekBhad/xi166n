function Image(propartis){
  console.log(propartis);
  const {title,src,alt,height,width} = propartis;
  return (
    <>
    <h2>{title}</h2>
    <img src={src} alt={alt} height={height} width={width}/>
    </>
  )
}
export default Image;