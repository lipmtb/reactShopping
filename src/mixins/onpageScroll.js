export default {
   
    componentDidMount(){
        document.defaultView.addEventListener("scroll",this.onSrollPage,false);
    },
    componentWillUnmount(){
        document.defaultView.removeEventListener("scroll",this.onSrollPage);
    },
    
    onSrollPage:function(){

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
}