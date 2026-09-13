import React from "react";
import './card.css'
function CardBill()
{
    return(
        // Thẻ chứa thông tin hóa đơn
        <div className="cardBill" >
            {/* Thẻ chứa hình ảnh */}
            <img src="./src/img/Demo.jpg" alt="" srcset="" className="imgBill" />
            {/* Thẻ chứa thông tin */}
            <div className="Inform">
            <p>MH-01</p>
            <p><strong>Nissei</strong></p>
            <p>Anh vũ</p>
            </div>
            {/* Tổng hóa đơn */}
            <h2 className="totalBill">15.000.000</h2>
            {/* Trạng thái hóa đơn */}
            <div className="Status">
                <p>Chưa xác nhận</p>
            </div>
            {/* Thời gian tạo tạo hóa đơn */}
            <div className="timeCreate">
                <p>30/08/2026</p>
                <p>20:09</p>
            </div>
            {/* nút xem chi tiết */}
            <div className="btnDetail">
            <button type="submit">Xem Chi Tiết</button>
            </div>
        </div>
    )
}
export default CardBill