
import Loading from '../../assets/loader.png'


const Loader = () => {
  return (
    <div className="flex-center w-full">
        <img src={Loading} alt="loading" className='w-2 h-2' />
    </div>
  )
}

export default Loader