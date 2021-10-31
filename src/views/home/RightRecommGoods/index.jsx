


import { NavLink } from "react-router-dom";
import "./rightRecommGoods.less";

// 右边推荐商品
export default function RightRecommGoods(props){

    // console.log("rightRender",props.allCateLists,props.curIdx);

    return <div className="right-recomm-goods" style={{display:props.curIdx>=0?"block":"none"}}>
        <h3 className="top-recomm-leader">商品推荐</h3>

        <div className="good-recomm-lists">
            {
                props.allCateLists.map((mainItem,mainIdx)=>{
                    return   <ul className="recomm-goodslists" key={mainItem.id} style={{display:props.curIdx===mainIdx?"flex":"none"}}>
                       {
                           mainItem.goods.map((gooditem)=>{
                                return   <li className="good-recomm-item" key={gooditem.id}>
                                           <NavLink to={"/product/"+gooditem.id}>
                                                <div className="left-img">
                                                    <img  className="left-small-img" src={gooditem.picture} alt={gooditem.name} />
                                                </div>

                                                <div className="right-main-desc">
                                                    <h4>{gooditem.name}</h4>
                                                    <p>{gooditem.desc}</p>
                                                    <p>￥{gooditem.price}</p>
                                                </div>
                                            </NavLink>
                                       </li>
                            })
                       }
                    </ul>
                })
            }
         
        </div>
    </div>
}
