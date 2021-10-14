import React , {Component} from "react";
class ApiFetch extends Component{
    constructor(props){
        super(props);
        this.state={
            items:[]
        };
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=50')
        .then(res=>res.json())
        .then(result=>{
            this.setState({
                items:result
            })
        })
    }
    render(){
        const {items}=this.state;
        return(
            <ol type="1">
                {items.map(item=>(
                    <li key={item.id}>
                        <h1>{item.title}</h1>
                        <img src={item.url} alt=""/>
                    </li>
                ))}
            </ol>
        );
    }
}
export default ApiFetch;