import Link from 'next/link'

export default function Links() {
    return (
        <main >
  <h1 className="  text-3xl font-bold p-4  text-cyan-600">
  Learning Tailwind:

  </h1>
      <h2 className='font-bold ml-10' >
            
            <br/><br/>
            <Link href="/step1-quickstart">Go to Step1-quickstart</Link>
            <br/><br/>
            <Link href="/step2-box">Go to Step2-Box</Link>
            <br/><br/>
            <Link href="/step3-flexbox-quotes-side-by-side">Go to Step3-flexbox-quotes-side-by-side</Link>
            <br/><br/>
            <Link href="/step4-flexbox-justify-content">Go to Step4-flexbox-justify-content</Link>
            <br/><br/>
            <Link href="/step5-flexbox-justify-between">Go to Step5-flexbox-justify-between</Link>
            <br/><br/>
            <Link href="/step6-flexbox-justify-around">Go to Step6-flexbox-justify-around</Link>
            <br/><br/>
            <Link href="/step7-flexbox-wrap">Go to  Step7-flexbox-wrap</Link>
            <br/><br/>
            <Link href="/step8-flexbox-items">Go to Step8-flexbox-items</Link>
            <br/><br/>
            <Link href="/stepx-headlessUI">Go to stepx-headlessUI</Link>
            
      </h2>
     
      </main>
    )
  }
