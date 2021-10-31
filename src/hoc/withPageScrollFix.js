import React from "react";

export default function withScrollFixed(FixCpn){

    return class ScrollFixed extends React.Component{
        state={
            curScroll:0,
            isSlideDown:false
        }
        componentDidMount(){
            document.defaultView.addEventListener("scroll",this.onSrollPage,false);
        }
        componentWillUnmount(){
            document.defaultView.removeEventListener("scroll",this.onSrollPage);
        }
        
        onSrollPage=()=>{
    
            let s=document.body.scrollTop+document.documentElement.scrollTop;
            this.setState({
                curScroll:s
            })
            // console.log("onSrollPage",this.state.curScroll,s);
            if(s>200){
                setTimeout(()=>{
                    this.setState({
                        isSlideDown:true
                    })
                },100)
            }else{
                this.setState({
                    isSlideDown:false
                })
            }
        }

        render(){
            return <FixCpn {...this.state}/>
        }
    }
}