import {useState} from "react";
import LeftCate from "../leftCate";
import RightRecommGoods from "../RightRecommGoods";
import { connect } from "react-redux";
import "./mainRecomm.less";
 function MainRecomm(props){

    let [curIdx,hoverSetIdx]=useState(-1);

    let leaveMainHover=()=>{
        hoverSetIdx(-1);
    }
    return <div className="main-recomm" onMouseLeave={leaveMainHover}>
          {/* 左边分类 */}
          <LeftCate allCateLists={props.allCateLists} curIdx={curIdx} hoverSetIdx={hoverSetIdx}/>

        {/* 右边推荐 */}
        <RightRecommGoods curIdx={curIdx} allCateLists={props.allCateLists}/>
    </div>
}

export default connect((state)=>({allCateLists:state.category.allCategoryLists}))(MainRecomm);