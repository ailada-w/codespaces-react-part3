import './Shop.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Item(props){
    return (<div key={props.id} onClick={()=>props.callback(props)}>
        <img src={props.img} width={200} height={200}/><br/>
        id: {props.id} <br/>
        name: {props.name}<br/>
        price: {props.price}<br/>
    </div>);
}
export default function Shop(){
    const [products,setProducts]=useState([]);
    const URL="https://improved-bassoon-jjqrrgw4pp7p3j579-5000.app.github.dev"
    useEffect(()=>{
        axios.get(URL+'/api/products')
        .then(response=>{
            setProducts(response.data);
        })
        .catch(error=>{
            console.log("error");
        })

        // return ()=>{
            
        // }

    },[]);

    // const products=[
    //     {id:0,name:"Notebook Acer Swift",price:45900,img:"https://img.advice.co.th/images_nas/pic_product4/A0147295/A0147295_s.jpg"},
    //     {id:1,name:"Notebook Asus Vivo",price:19900,img:"https://img.advice.co.th/images_nas/pic_product4/A0146010/A0146010_s.jpg"},
    //     {id:2,name:"Notebook Lenovo Ideapad",price:32900,img:"https://img.advice.co.th/images_nas/pic_product4/A0149009/A0149009_s.jpg"},
    //     {id:3,name:"Notebook MSI Prestige",price:54900,img:"https://img.advice.co.th/images_nas/pic_product4/A0149954/A0149954_s.jpg"},
    //     {id:4,name:"Notebook DELL XPS",price:99900,img:"https://img.advice.co.th/images_nas/pic_product4/A0146335/A0146335_s.jpg"},
    //     {id:5,name:"Notebook HP Envy",price:46900,img:"https://img.advice.co.th/images_nas/pic_product4/A0145712/A0145712_s.jpg"}
    // ];
        const [cart,setCart]=useState([]);
        function addCart(item){
         setCart([...cart,{id:item.id,name:item.name,price:item.price,img:item.img}]);
        }
        const productList=products.map(item=><Item {...item} callback={addCart}/>);
        const cartList=cart.map((item,index)=><li>{item.id} {item.name} {item.price} 
        <button onClick={()=>{ 
            alert('you click'+index);
            setCart(cart.filter((i,_index)=>index!=_index));}}>Delete</button>
         </li>);
        
        let total=0;
        for(let i=0;i<cart.length;i++){
            total+=cart[i].price;

        }
        
        return (<>
        <div className='grid-container'>{productList}</div>
        <h1>Cart</h1>
        <button onClick={()=>setCart([])}>Clear all</button>
        <ol>{cartList}</ol>
        <h1>total={total}</h1>
        </>);
}