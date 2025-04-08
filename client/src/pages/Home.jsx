import Description from "../components/Description"
import GentrateBtn from "../components/GentrateBtn"
import Header from "../components/Header"
import Steps from "../components/Steps"
import Testimonials from "../components/Testimonials"

const Home = () => {
  return (
    <div>
        <Header/>
        <Steps/>
        <Description/>
        <Testimonials/>
        <GentrateBtn/>
    </div>
  )
}

export default Home