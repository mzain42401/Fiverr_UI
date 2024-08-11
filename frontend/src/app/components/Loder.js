import { RotatingLines } from "react-loader-spinner";

const  Loader=()=> {
  return (
    <div className=" transform -translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 ">

    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
      />
      </div>
  )
}
export default Loader