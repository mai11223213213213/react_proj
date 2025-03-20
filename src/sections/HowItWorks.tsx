import React from 'react'
import Heading from '../components/Heading'
import step1 from "../assets/img/step-0.svg";
import step2 from "../assets/img/step-1.svg";
import step3 from "../assets/img/step-2.svg";
import step4 from "../assets/img/step-3.svg";
const steps: {text:string; img:string}[] = [
    {
        text:"Set up your wallet",
        img:step1
    },
    {
        text:"Create your collection",
        img:step2
    },
    {
        text:"Add your NFTs",
        img:step3
    },
    {
        text:"List them for sale",
        img:step4
    }
]

const HowItWorks = () => {
  return (
    <section className='how-it-works'>
        <Heading>How it works</Heading>
        <div className="steps">

            {steps.map((step, key)=>(
                <>
                <div className="step">
                    <img src={step.img} alt="ssasasas" />
                    <span>{step.text}</span>

                </div>
                {
                    steps.length -1 !== key && (
                        <div className="line"/>

                    )
                }
                </>
            ))}
           
        </div>
    </section>
  )
}

export default HowItWorks