// import logo from './logo.svg';
import './App.css';
import React, {useState , useEffect} from "react";
import Loading from "./Loading";
import Tours from "./Tours"

const url = "https://course-api.com/react-tours-project"

function App() {
  const [tours, setTours] = useState([])
	const [loading, setLoading] = useState(true)

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours);
  }
  

	async function fetchTours() {
		setLoading(true)

		const data = await fetch(url)
		const jsonData = await data.json()
		setTours(jsonData)
     console.log(tours)
		setLoading(false)
	}

	useEffect(() => {
		fetchTours()
	}, [])	

	if (loading) {
		return (
			<main>
				<Loading />
			</main>
		)
	}
  if(tours.length === 0){
    return (
      <div className='tittle'>
      <main>
        <h2>No tour left</h2>
        <button className='btn' onClick={()=> fetchTours()}>
           Refresh
        </button>
      </main>
      </div>
    )
  }
return (
		<main>
			<Tours tours={tours} removeTour={removeTour} />
		</main>
	)
}

export default App;