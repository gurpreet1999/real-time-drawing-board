import React from 'react'
import { toast } from "react-toastify";

const ClientRoom = () => {

    const imgRef = useRef(null);


  return (
    <div className="container-fluid">
    <div className="row pb-2">
      <h1 className="display-5 pt-4 pb-3 text-center">
        React Drawing App - users online:{userNo}
      </h1>
    </div>
    <div className="row mt-5">
      <div
        className="col-md-8 overflow-hidden border border-dark px-0 mx-auto
        mt-3"
        style={{ height: "500px" }}
      >
        <img className="w-100 h-100" ref={imgRef} src="" alt="image" />
      </div>
    </div>
  </div>
  )
}

export default ClientRoom