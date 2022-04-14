import React from 'react';
import { connect } from 'react-redux';

function Cart(props) {
    const {carts} = props;
    console.log(carts) 
    return (
        <div>
            
        </div>
    );
}
const mapState = (state) =>{
    return{
        carts: state.carts
    }
}
export default connect(mapState)(Cart);