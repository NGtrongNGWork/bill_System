import React, { useState } from "react";
import './Detail.css'
function Details() {
    const [MoreDetail, SetMoreDetail] = useState(false)
    const ClickShow = () => {
        if (MoreDetail) SetMoreDetail(false);
        else SetMoreDetail(true);
    }
    return (
        <div className="Details">
            <div className="container">
                <div className="Inform_Card">
                    <div className="btn_Show">
                    <p className="Text_Inform">Thông tin hình ảnh</p>
                    <button className="ShowDetail" onClick={() => { ClickShow() }}><img src={MoreDetail == true?'./src/img/icon/right-arrows.png':'./src/img/icon/down.png'} alt="" />
                    </button>
                
                    </div>
                {MoreDetail == true?<>
                <div className="MoreDetail" style={{ backgroundColor: 'red', width: '100%', height: '200px', display:"flex",justifyContent:'center' }}></div></> : null
                }
                </div>
            <div className="Inform_Card">
                    <div className="btn_Show">
                    <p className="Text_Inform">Thông tin hình ảnh</p>
                    <button className="ShowDetail" onClick={() => { ClickShow() }}><img src={MoreDetail == true?'./src/img/icon/right-arrows.png':'./src/img/icon/down.png'} alt="" />
                    </button>
                
                    </div>
                {MoreDetail == true?<>
                <div className="MoreDetail" style={{ backgroundColor: 'red', width: '100%', height: '200px', display:"flex",justifyContent:'center' }}></div></> : null
                }
                </div>
                <div className="Inform_Card">
                    <div className="btn_Show">
                    <p className="Text_Inform">Thông tin hình ảnh</p>
                    <button className="ShowDetail" onClick={() => { ClickShow() }}><img src={MoreDetail == true?'./src/img/icon/right-arrows.png':'./src/img/icon/down.png'} alt="" />
                    </button>
                
                    </div>
                {MoreDetail == true?<>
                <div className="MoreDetail" style={{ backgroundColor: 'red', width: '100%', height: '200px', display:"flex",justifyContent:'center' }}></div></> : null
                }
                </div>
            </div>
        </div>
    )
}
export default Details