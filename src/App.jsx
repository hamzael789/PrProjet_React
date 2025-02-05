import Card from "./Components/Card/Card";
import MiniCard from "./Components/MiniCard/MiniCard";

function App() {
  // const [count, setCount] = useState(0)
    const cards = Array.from({ length: 6 });


  return (
    <>
    <div className="flex gap-8">
      <div className="flex gap-5 justify-center items-center place-content-center">
        <Card></Card>
      </div>
      
      <div className="flex gap-5 justify-center items-center place-content-center">
        <div className="grid grid-cols-3 gap-5 p-2"> 
          {cards.map((index) => (
            <MiniCard key={index} />
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default App
