export default function Slice ({ slice }) {
  // console.log(slice)
  return (
    <div className='m-8'>
      <div className="video-wrapper">
        <iframe width="100%" className='player' src={slice?.main?.link} />
      </div>
    </div>
  )
}