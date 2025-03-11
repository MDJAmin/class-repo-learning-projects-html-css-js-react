import Calc from '../../../components/home/Calc'
import ChartJs from '../../../components/home/ChartJs'
import Question from '../../../components/home/Icon'
export default function Home() {
  return (
    <>
    <div>
        <h1>Home Page</h1>
        <p>This is the home page of our application.</p>
        <Calc/>
        <Question/>
    </div>
    <ChartJs/>
    </>
  )
}
