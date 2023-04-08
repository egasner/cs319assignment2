import React, { useState, useEffect } from "react";
import items from "./selected_products.json";
import "bootstrap/dist/css/bootstrap.css";


const Shop = () => {
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        total();
    }, [cart]);

    const total = () => {
        let totalVal = 0;
        for (let i = 0; i < cart.length; i++) {
            totalVal += cart[i].price;
        }
        setCartTotal(totalVal);
    };

    const addToCart = (el) => {
        setCart([...cart, el]);
    };
    
    const removeFromCart = (el) => {
        let hardCopy = [...cart];
        hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
        setCart(hardCopy);
        };

    const cartItems = cart.map((el) => (
        <div key={el.id}>
        <img class="img-fluid" src={el.image} width={30} />
        {el.title}
        ${el.price}
        </div>
    ));

    function howManyofThis(id) {
        let hmot = cart.filter((cartItem) => cartItem.id === id);
        return hmot.length;
    }

    const listItems = items.map((el) => (
        // PRODUCT
        <div class="row border-top border-bottom" key={el.id}>
            <div class="row main align-items-center">
                <div class="col-2">
                    <img class="img-fluid" src={el.image} />
                </div>
                <div class="col">
                    <div class="row ">{el.title}</div>
                    <div class="row text-muted">{el.description}</div>
                    <div class="row">{el.category}</div>
                </div>
                <div class="col">
                    <button type="button" variant="light" onClick={() => removeFromCart(el)} > Clear All </button>{" "}
                    <button type="button" variant="light" onClick={() => addToCart(el)}> + </button>
                </div>
                <div class="col">
                Dabloons {el.price} <span class="close">&#10005;</span>{howManyofThis(el.id)}
                </div>
            </div>
        </div>
    ));

    const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
    const form = document.getElementById('checkout-form');
    const catalogy = document.getElementById('catalogy');
    const review = document.getElementById('review');
    
    
    var order = { name: '', email: '', card: '' };

    

    

    return (
        <div>
        <div class="">
            Assignment 02 MEME STORE Group 30 Ethan Gasner and Savannah Franklin
            <div class="card " id="catalogy">
                <div class="row">
                    
                    <div class="col-md-8 cart">
                    <div class="title">
                    <div class="row">
                    <div class="col">
                    <h4>
                    <b>MEME Shopping cart</b>
                    </h4>
                    </div>
                    <div class="col align-self-center text-right text-muted">
                    MEMES selected {cart.length}
                    </div>
                    </div>
                    </div>
                    <div>{listItems}</div>
                    </div>
                    <div class ="float-end">
                    <p class ="mb-0 me-5 d-flex align-items-center">
                    <span class ="small text-muted me-2">FUNNY total:</span>
                    <span class ="lead fw-normal">${cartTotal}</span>
                    </p>
                    <button type="submit" class="btn btn-success" > <i class="bi-bag-check"></i> CHECK OUT</button>
                    </div>
                    
                </div>
            </div>
        </div>


            <div class="container">
            <div class="row">
                <div class="col-2"></div>
                <div class="col-8">
                <div id="liveAlertPlaceholder"></div>
                <form class="row g-3 " id="checkout-form">
                    <div class="col-md-6">
                        <label for="inputName" class="form-label">Full Name</label>
                        <input type="text" class="form-control" id="inputName"></input>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                        <div class="invalid-feedback">
                            Must be like, "John Doe"
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail4"></input>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                        <div class="invalid-feedback">
                            Must be like, "abc@xyz.efg"
                        </div>
                    </div>
                    
                    <div class="col-12">
                        <label for="inputCard" class="form-label">Card</label>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><i class="bi-credit-card-fill"></i></span>
                            <input type="text" id="inputCard" class="form-control" placeholder="XXXX-XXXX-XXXX-XXXX"
                            aria-label="Username" aria-describedby="basic-addon1"></input>
                            <div class="valid-feedback">
                            Looks good!
                        </div>
                        <div class="invalid-feedback">
                            Must be like, "7777-7777-7777-7777"
                        </div>
                    </div>
                    </div>
                    <div class="col-12">
                        <label for="inputAddress" class="form-label">Address</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
                    </div>
                    <div class="col-12">
                        <label for="inputAddress2" class="form-label">Address 2</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
                    </div>
                    <div class="col-md-6">
                        <label for="inputCity" class="form-label">City</label>
                        <input type="text" class="form-control" id="inputCity"></input>
                    </div>
                    <div class="col-md-4">
                        <label for="inputState" class="form-label">State</label>
                        <select id="inputState" class="form-select">
                        <option selected>Choose...</option>
                        <option>Iowa</option>
                        <option>Not Iowa</option>
                        <option>not Not Iowa but also not iowa</option>
                        <option>Silly BIlly land</option>
                    </select>
                    </div>
                        <div class="col-md-2">
                        <label for="inputZip" class="form-label">Zip</label>
                        <input type="text" class="form-control" id="inputZip"></input>
                    </div>

                    <div class="col-12">
                        <br></br>
                        <button type="submit" class="btn btn-success" > <i class="bi-bag-check"></i> Order</button>
                    </div>
                </form>
                </div>
            </div>
            </div>

            <div class="container" id="review">
                <div class="row">
                    <div class="col-2"></div>
                    <div class="col-8">
                        <div class="card" >
                        <div class="card-body">
                        <h5 class="card-title">Order summary</h5>
                        <p class="card-text">Here is a summary of your order.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                        </ul>
                        <a href="" onclick="location.reload()" class="btn btn-secondary"> <i class="bi-arrow-left-circle"></i>
                        Return</a>
                        </div>
                    </div>
                </div>
            </div>
            
            
            </div>  
                    
        );
}


export default Shop;