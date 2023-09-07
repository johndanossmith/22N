import CalendarLink from "../components/CalendarLink"
import CalendarLinks from "../components/CalendarLinks"
import Hero from "../components/Hero"
import Shows from "../components/Shows"
import shows from "../constants"

function Home() {
  return (
    <>
    <Hero />
      <section className="px-5 lg:max-w-screen-lg mx-auto">
      <CalendarLinks />
      
      </section>

      <section className="px-5 lg:max-w-screen-lg mx-auto pb-20">
      {shows.map((data,key)=> {
        return(<Shows name={data.show_name} date={data.show_date} list={data.shows} key={key} />)
      })}
      </section>
      </>
  )
}

export default Home
