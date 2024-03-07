import {moneyFormat} from "../helpers.jsx";
function Product({product, total, money, basket, setBasket}) {

    const basketItem = basket.find(item => item.id === product.id)

    const addBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id)
        // ürün daha önce eklenmiş
        if (checkBasket) {
            checkBasket.amount += 1
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
        } else {
            setBasket([...basket, {
                id: product.id,
                amount: 1,
            }])
        }
    }

    const removeBasket = () => {
        const currentBasket = basket.find(item => item.id === product.id)
        const basketWithoutCurrent = basket.filter(item => item.id !== product.id)
        currentBasket.amount -= 1
        if (currentBasket.amount === 0) {
            setBasket([...basketWithoutCurrent])
        } else {
            setBasket([...basketWithoutCurrent, currentBasket])
        }
    }

    return (
        <>
            <div className="product">
                <img className={'productImg'} src={product.image} alt=""/>
                <h6 className={'productTitle'}>{product.title}</h6>
                <div className="price">$ {moneyFormat(product.price)}</div>
                <div className="actions">
                    <button className="sell-btn" disabled={!basketItem} onClick={removeBasket}>Sat</button>
                    <span className="amount">{basketItem && basketItem.amount || 0}</span>
                    <button className="buy-btn" disabled={total + product.price > money} onClick={addBasket}>Satın al
                    </button>
                </div>
                <style jsx>{`
                  .product {
                    padding: 15px;
                    background: #fff;
                    border: 1px solid #ddd;
                    margin-bottom: 20px;
                    width: 24%;
                  }

                  .product img {
                    width: 100%;
                  }

                  .product h6 {
                    font-size: 20px;
                    margin-bottom: 10px;
                  }

                  .product .price {
                    font-size: 20px;
                    color: rgb(33,193,141);
                      font-weight: bold;
                  }

                  .product .actions {
                    display: flex;
                    align-items: center;
                    margin-top: 15px;
                  }

                  .actions button {
                    height: 40px;
                    padding: 0 15px;
                    flex: 1;
                    cursor: pointer;
                  }

                  .actions button[disabled] {
                    background-color: aliceblue;
                      color: black;
                      font-weight: bold;
                      font-size: 17px;
                    cursor: not-allowed;
                  }

                  .actions .buy-btn {
                    background: rgb(33,193,141);
                    font-size: 17px;
                      color: #fff;
                    font-weight: 500;
                    border-radius: 0 4px 4px 0;
                  }

                  .actions .sell-btn {
                    background: rgb(245,59,108);
                    font-size: 14px;
                    color: #fff;
                    font-weight: 500;
                    border-radius: 4px 0 0 4px;
                  }

                  .actions .amount {
                    width: 50px;
                    text-align: center;
                    border: 1px solid #ddd;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 17px;
                    font-weight: bold;
                    color: #555;
                  }
                  .productImg{
                      width: 210px;
                      height: 200px;
                  }
                  .productTitle{
                      text-align: center;
                      font-weight: bold;
                      margin-top: 7px;
                  }
				`}</style>
            </div>
        </>
    )
}

export default Product