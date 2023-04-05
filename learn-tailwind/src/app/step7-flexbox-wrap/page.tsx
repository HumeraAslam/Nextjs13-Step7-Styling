import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Wrap() {
  return (
    <div className="container flex justify-around flex-wrap">
  <div className="team-profile">
    <Image src="/alexa.png" className="team-img" width={150} height={150} alt="image"/>
    <h3>Alexa Kardi</h3>
    <p>Founder and CEO</p>
  </div>
  <div className="team-profile">
    <Image src="/tavell.png" className="team-img" width={150} height={150} alt="image"/>
    <h3>Tavell Monroe</h3>
    <p>Web Developer</p>
  </div>
  <div className="team-profile">
    <Image src="/adale.png" className="team-img" width={150} height={150} alt="image"/>
    <h3>Adale Smith</h3>
    <p>Marketing Specialist</p>
  </div>
  <div className="team-profile">
    <Image src="/thomas.png" className="team-img" width={150} height={150} alt="image"/>
    <h3>Thomas Mason</h3>
    <p>UX Designer</p>
  </div>
</div>


  )
}