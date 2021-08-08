import './index.css';
import axios from "axios"
import React from 'react'

function MainPage(){
    const [products, setProducts] = React.useState([]);

    //useEffect를 사용해서 모든 소스코드를 다시 실행하지 않도록 막는 역할을 함 
    //[]안에 아무것도 없으면 한번 실행 이후에 재실행 안함
    React.useEffect(
        function(){
            //postMan으로 만든 목 서버 주소 들고옴
            axios.get('https://fbecb916-f78f-40ee-899f-102d3c32ff72.mock.pstmn.io/products')
            .then(function(result){
                // result를 한번 log로 남겨보고 안에 뭐가 있는지 확인 후 소스코드 작성하면 좋습니다.
                // console.log(result);
                const products = result.data.products;
                setProducts(products);
            }).catch(function(error){
                console.error('에러발생:',error);
            })
        },[]
    )

    return (<div>
    <div id="header">
    <div id="header-area">
        <img src="images/icons/shoney.png"/>
        <h3>상꿀 그림 갤러리</h3>
    </div>
</div>
<div id="body">
    <div id="banner">
        <img src="images/banners/banner3.png"/>
    </div>
    <h1>낙서 List</h1>
    <div id="product-list">
        {
            // 맵을 써서 리턴 값이 있는 foreach문을 사용
            products.map(function(product, index){
                return (
                    <div className="product-card">
                        <div>
                            <img className="product-img" src={product.imageUrl}/>
                        </div>
                        <div className="product-contents">
                            <span className="products-name">
                                {product.name}
                            </span>
                            <span className="products-price">
                                {product.price}
                            </span>
                            <div className="products-seller">
                                <img className="product-avator" src ="images/icons/avatar.png"/>
                                <span>{product.seller}</span>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        
    </div>
</div>            
<div id="footer"></div>
</div>);
}

export default MainPage