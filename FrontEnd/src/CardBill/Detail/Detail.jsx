import React from "react";
import './Detail.css'
function Details()
{
    return(
        <div className="Details">
            <div className="container">
                <div className="Inform_Img">Thông tin hình ảnh <button className="ShowDetail"><img src="./src/img/icon/down.png" alt="" /></button></div>
                <div className="Inform_Bill">Thông tin hóa đơn <button className="ShowDetail"><img src="./src/img/icon/down.png" alt="" /></button></div>
                <div className="Inform_Order">Thông tin đơn hàng <button className="ShowDetail"><img src="./src/img/icon/down.png" alt="" /></button></div>
            </div>
        </div>
    )
}
export default Details