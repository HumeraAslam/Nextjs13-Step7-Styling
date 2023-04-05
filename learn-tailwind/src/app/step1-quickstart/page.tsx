import Image from 'next/image'
import panaverse from '../../../public/panaverse.png'
import V1 from './Ver1/page'
import Ver2 from './Ver2/page'
export default function Step1() {
  return (
    <div className="flex" >
      <div>
        <Image src={panaverse} width={80} height={80} alt='music' />
      </div>
    <div>
      <h1>Welcome to Panaverse</h1>
      <h2>A Community of Web 3 and Metaverse Developers</h2>
      <button>Learn More</button>
      <br />..........................................................................................
      <V1 />
      <br />..........................................................................................
      <Ver2 />
    </div>
    </div>
  )
}