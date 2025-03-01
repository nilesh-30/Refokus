
import img1 from '../assets/hero.png';
import Spline from './Spline';

const Cubes = () => {
  return (
    <div className='relative'>
        {/* <img src={img1} alt="" /> */}
        <Spline/>
        <div className='max-w-screen-xl mx-auto flex'>
            <h1 className='uppercase absolute top-72 font-medium text-[7rem] w-40 leading-[6rem]'>we make cool websites</h1>
            <img className='absolute top-56 right-36' src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/633495afcda694178a5243f6_Logo%20mark.svg" alt="" />
            <p className='absolute top-[33rem] right-20 font-medium text-xl w-96'>Refokus is a forward-thinking web agency that combines <b>Web Design, Webflow Development, and Creative Development</b> to create cool websites that help brands position themselves as market leaders.</p>
        </div>
    </div>
  )
}

export default Cubes