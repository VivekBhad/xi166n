import "./styles.css";
import Heading from "./Component/Heading";
import Image from "./Component/Image"
import PlayPause from './Component/PlayPause'



export default function App() {
  function click(){
    
  }
  return (
    <div className="App">
      <Heading text='Masai School'></Heading>
     <Image src="https://avatars.githubusercontent.com/u/101323090?v=4"
      alt ="My img"
      height ="150px"
      width="150px"
      title="Bhad vivek"
     />
     <PlayPause text="paused"
     title='The state is paused'
     ></PlayPause>
     </div>
  );
}
