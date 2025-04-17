import Navbar from "@/components/common/Navbar"
import Hero from "@/components/home/Hero"
import Seminars from "@/components/seminars/Seminars"
import Speakers from "@/components/speakers/Speakers"

const HomePage = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Speakers />
      <Seminars />
    </main>
  )
}

export default HomePage