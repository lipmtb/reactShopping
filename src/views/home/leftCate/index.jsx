

import "./leftCate.less";

import {NavLink} from "react-router-dom";


export default function LeftCateSel(props){
 

    let enterMainLi=(index)=>{
        return ()=>{
            // console.log("enterLi",index);
            props.hoverSetIdx(index);
        }
    }
    let allCateLists=props.allCateLists;
    return <div className="left-cate-wrapper">
        <ul className="all-cate-lists">
            {
                    allCateLists.map((cateMain,idx)=>{
                        return <li className={props.curIdx===idx?"main-item clearfix activeLi":"main-item clearfix"} key={cateMain.id} onMouseEnter={enterMainLi(idx)}>
                            <NavLink to={"/category/" + cateMain.id}  className="fl">{cateMain.name}</NavLink>
                            <div className="sub-item-lists fl">
                                {
                                   cateMain.children.map((subitem,idx)=>{
                                        return <NavLink to={"/category/sub/" + subitem.id}
                                         className="sub-item-text" key={subitem.id}
                                         style={{display:idx>=2?'none':''}}
                                         >
                                            {subitem.name}
                                        </NavLink> 
                                   })
                                }
                            </div>
                        </li>
                    })
            }
        </ul>
    </div>
}




