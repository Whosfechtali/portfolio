import '../../../App.css'

function Aboutme(){

  // Calculate my age

  const dob = new Date("06/02/2000");
  var diff_ms = Date.now() - dob.getTime();
  var age_dt = new Date(diff_ms);
  let currentage = Math.abs(age_dt.getUTCFullYear() - 1970);

      return(
        <div className="">
        {/*
          */}
        <h1 className="text-center text-5xl mt-2 mb-4" id={'About'}>About me</h1>
        <div className="flex justify-center">
        <div className="overflow-hidden Aboutme border border-thirdly rounded-lg pb-12 w-6/12">
        <div className="Aboutmeimg rounded-full float-right h-max w-36 mt-2  mx-5">
         <img  className="mx-4 rounded-full" src='../resources/IMG_0088.JPG' alt="Image" />
        </div>
        <div className="aboutmetext text-sm mt-2 py-2 mx-3 whitespace-nowrap ">
        <span>
        Mohamed El Fechtali
        <br/>
        {currentage} Years old from 🇲🇦<br/>
        Tampere University
        </span>
        </div>
        <div className="text-md mt-2 border-t-2 border-thirdly pt-6 px-6">
        <span>
        I am junior Web developer based in Helsinki ❄️. </span> <br/>
        <span> I describe myself as passionate developer who loves coding, and curious about learning new technologies.
        </span>
        <br/>
        <span>
        In my free time you can find me at the gym 🏋️‍♂️, or playing football ⚽
        </span>
        </div>
        </div>
        </div>
        </div>
      )


}
export default Aboutme;
