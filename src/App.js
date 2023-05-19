import Header from "./components/header/header";
import songs from "./components/song/songs";
import trendingSongs from "./data/songs";
import '.'

const App = () => {
  console.log(trendingSongs)
  return (
    <div>
      <Header/>
      <div className="sidebar">
        <h1 className="tittle">Trending Songs</h1>

       {trendingSongs.map((song,i)=>(
         <div className="cont">

           <h1>{song}</h1>
           <span>+</span>
         </div>

       )) }
       <a href="" className="btn-view">View more</a>
      </div>
    </div>
  )
}

export default App