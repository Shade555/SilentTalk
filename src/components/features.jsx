import Image from "next/image";

const Features = () => {
  return (
    <section id="features" className=" h-auto flex flex-col ">
    <div className="bg-foreground items-center justify-center w-full">
      <div className="h1  text-primary text-start">Our Features</div>
      
      <div className=" container mx-auto flex flex-col-reverse xl:flex-row items-center justify-between ">
        <div className="xl:w-[750px] w-[500px] xl:h-[700px] h-[500px] text-primary bg-no-repeat flex-row bg-contain bg-center bg-[url(/asset/book1a.png)]">
          <div className="container mx-auto flex  underline underline-offset-8  decoration-gray-600 pl-[60px] pt-[162px] patrick-hand-title xl:text-4xl text-2xl">
            <div className="xl:pl-3 ">
            Interactive Lessons <br/><br/>
            <span className=" text-xl  xl:text-2xl patrick-hand-regular underline-offset-8 decoration-gray-400 text-gray-800">Learn ASL step by step <br/>   with fun exercises that<br/>    feel like a game.</span>
            </div>
            <div className="pl-12 h-1/2">
            Progress Tracking <br/><br/>
            <span className="text-xl xl:text-2xl text-wrap patrick-hand-regular underline-offset-8 decoration-gray-400 text-gray-800">Watch your growth<br/> like turning pages <br/> in a diary  — every day <br/> adds a new achievement.</span>
          </div>
          </div>
          
        </div>
        
        <div className="xs:hidden w-[600px] h-[600px] bg-[url(/asset/featurephoto1.png)] justify-end"></div>
        </div>
        </div>

        <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between x-overflow bg-background ">
        
        <div className="  w-[600px] h-[600px] bg-[url(/asset/feature-photo2.png)] justify-start"></div>
        
        <div className="xl:w-[750px] w-[500px] xl:h-[700px] h-[500px] text-primary bg-no-repeat flex-row bg-contain bg-center xl:justice-right bg-[url(/asset/book1b.png)]">
          <div className="container mx-auto flex  underline underline-offset-8  decoration-gray-600 pl-[60px] pt-[162px] patrick-hand-title xl:text-4xl text-2xl">
            <div className="xl:pl-3">
            Rewards & Motivation <br/><br/>
            <span className=" text-xl  xl:text-2xl patrick-hand-regular underline-offset-8 decoration-gray-400 text-gray-800">Practice signs you <br/>   can actually use in <br/>   daily conversations.</span>
            </div>
            <div className="pl-4 h-1/2">
            Real-Life Practice <br/><br/>
            <span className="text-xl xl:text-2xl text-wrap patrick-hand-regular underline-offset-8 decoration-gray-400 text-gray-800">Stay excited with points<br/>, streaks, and badges <br/>as you learn more. </span>
          </div>
          </div>
          
        </div>
        </div>



    </section>
  )
}

export default Features
