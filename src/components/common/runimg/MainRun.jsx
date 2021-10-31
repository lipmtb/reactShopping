import {PureComponent} from "react";
import {Link} from "react-router-dom";
import "./MainRun.less";
export default class MainRun extends PureComponent{

    static getDerivedStateFromProps(newProps,newState){

        if(newState.allLen===0){
        
            newState.allLen=newProps.imgLists.length;
        }
        return newState;
    }
     state={
         idx:0 , //当前展示的图片
         oldIdx:0 , //上一张
         allLen:0
     }



     getLiStyle=(i)=>{
        let newLeft=0;
        let newZdx=0;
        if(i===this.state.oldIdx||i===this.state.idx){
          
            newZdx=10;
        }
        if(i===this.state.idx){
            newLeft=0;
           
        }else if(i>this.state.idx){
         
            newLeft="100%"
            
        }else if(i<this.state.idx){
            newLeft="-100%"
        }

        return {
            left:newLeft,
            zIndex:newZdx
        }
     }


     setNewIdx=(i)=>{
        return ()=>{
           
            if(this.state.idx===i){
                return ;
            }
    
           this.setState(({idx})=>{
                return {
                    idx:i,
                    oldIdx:idx
                }
           })
        }
     }


     runSingle=(stamp)=>{

        if(this.tmp===null){
            this.tmp=stamp;
        }

        if(stamp-this.tmp>3000){
            // console.log("running reqframe",this);
            let nextIdx=this.state.idx+1;
            nextIdx=nextIdx>this.state.allLen-1?0:nextIdx;
            this.setNewIdx(nextIdx)();
            this.tmp=stamp;
        }
        if(this.canRun){
            requestAnimationFrame(this.runSingle)
        }
     }

     componentDidMount(){
        this.canRun=true;
        this.tmp=null;
    
        requestAnimationFrame(this.runSingle)
     }

     componentWillUnmount(){
         this.canRun=false;
     }

     enterRunImg=()=>{
        this.canRun=false;
     }
     leaveRunImg=()=>{
        this.canRun=true;
        this.tmp=null;
    
        requestAnimationFrame(this.runSingle)
     }
    render(){
        //  console.log("mainRun render");
        let imgLists=this.props.imgLists;
        
        return <ul className="imglists-wrapper" onMouseEnter={this.enterRunImg} onMouseLeave={this.leaveRunImg}>
            {
                imgLists.map((item,i)=>{  
                    return  <li className="img-item" key={item.id} style={this.getLiStyle(i)}>
                      <Link to={item.hrefUrl}>
                        <img src={item.imgUrl}  alt={item.imgUrl}/>
                      </Link>
                   </li>
                })
            }
           <ul className="circle-lists">
           {
                imgLists.map((item,i)=>{  
                    return  <li className={i===this.state.idx?'circle-item activeCircle':'circle-item'} 
                    onClick={this.setNewIdx(i)}
                    key={item.id}></li>
                })
            }
           </ul>
        </ul>
    }
}