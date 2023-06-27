import axios from "axios";
import base64 from 'base-64';


const baseUrl = 'https://api-m.sandbox.paypal.com'
const clientId = 'AbsPwHN0q-w-q98mrqckP87WKNTi8XUA3bVlQr7GRJNnn9tiEVa3bPT_X-Lkrv95miICWEWMT-1n8LH4'
const secretKey = 'ELrc5WEpHTKO9d5P_0bsyqLe1YG7QJlalNgnsgseHGypc1u_VzpuUPzp7V_p2WPgdp-n-_x8fKdROCwj'
let orderDetail = {
    "intent": "CAPTURE",
    "purchase_units": [
        {
            "items": [
                {
                    "name": "T-Shirt",
                    "description": "Green XL",
                    "quantity": "1",
                    "unit_amount": {
                        "currency_code": "USD",
                        "value": "20.00"
                    }
                }
            ],
            "amount": {
                "currency_code": "USD",
                "value": "20.00",
                "breakdown": {
                    "item_total": {
                        "currency_code": "USD",
                        "value": "20.00"
                    }
                }
            }
        }
    ],
    "application_context": {
        "return_url": "https://example.com/return",
        "cancel_url": "https://example.com/cancel"
    }
}

// function for generating the access token 
const generateToken = () => {
    var headers = new Headers()
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    headers.append("Authorization", "Basic " + base64.encode(`${clientId}:${secretKey}`));

    var requestOptions = {
        method: 'POST',
        headers: headers,
        body: 'grant_type=client_credentials',
    };

    return new Promise((resolve, reject) => {
        fetch(baseUrl + '/v1/oauth2/token', requestOptions).then(response => response.text()).then(result => {
            // console.log("result print", result)
            const { access_token } = JSON.parse(result)
            resolve(access_token)
        }).catch(error => {
            console.log("error raised", error)
            reject(error)
        })
    })
}

// function for creating order
const createOrder = (token = '') => {
    var requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`

        },
        body: JSON.stringify(orderDetail)
    };

    return new Promise((resolve, reject) => {
        fetch(baseUrl + '/v2/checkout/orders', requestOptions).then(response => response.text()).then(result => {
            // console.log("result print", result)
            const res = JSON.parse(result)
            resolve(res)
        }).catch(error => {
            console.log("error raised", error)
            reject(error)
        })
    })
}


// function for capturing the payments
const capturePayment = (id, token = '') => {
    var requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`

        },
    };

    return new Promise((resolve, reject) => {
        fetch(baseUrl + `/v2/checkout/orders/${id}/capture`, requestOptions).then(response => response.text()).then(result => {
            // console.log("result print", result)
            const res = JSON.parse(result)
            resolve(res)
        }).catch(error => {
            console.log("error raised", error)
            reject(error)
        })
    })
}



export default {
    generateToken,
    createOrder,
    capturePayment
}