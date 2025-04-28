import Navbar from "@/components/common/Navbar"
import Hero from "@/components/home/Hero"
import Registration from "@/components/registration/Registration"
import Seminars from "@/components/seminars/Seminars"
import Speakers from "@/components/speakers/Speakers"

const HomePage = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Speakers />
      <Seminars />
      <Registration />
    </main>
  )
}

export default HomePage