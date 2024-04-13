import React, { useContext, useEffect, useState } from "react";
import UserContext from "../Context/Context";

function AddTransaction({ darkTheme, setData}) {
    // console.log(value)
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    var value = useContext(UserContext)

    const addToList = () => {
        value.push({ text, amount })
        // console.log(value)
        setText("")
        setAmount(0)
    }
    var income = 0;
    var expense = 0;

    value.map((item) => {
        if (item.amount > 0) {
            income += parseFloat(item.amount)
        } else if (item.amount < 0) {
            expense += parseFloat(item.amount);
        }
    })

    
    var balance = parseFloat(income + expense)

    useEffect(() => {
    }, [value])

    
    return (
        <div className="">
            <>
                <div className='row align-items-center text-center mb-5 mt-3 '>
                    <div className='col-sm'>
                        <div className='fw-bold fs-4'>Balance <span className='fw-bold text-primary fs-1'>${balance}</span></div>
                    </div>

                </div>
                <div className={darkTheme ? 'bg-warning text-dark rounded-4' : 'bg-dark text-light rounded-4'}>
                    <div className='row rounded-4'>
                        <div className='col-sm text-center mt-4'>
                            <div className={`fw-bold ${darkTheme ? 'text-dark' : 'text-warning'}`}>INCOME</div>
                            <span className='badge bg-success text-light mt-4 fs-3'>${income}</span>
                        </div>
                        <div className='col-sm text-center mt-4 mb-3'>
                            <div className={`fw-bold ${darkTheme ? 'text-dark' : 'text-warning'}`}>EXPENSES</div>
                            <span className='badge bg-danger text-light mt-4 fs-3 text-center'>${expense}</span>
                        </div>
                    </div>
                </div>
            </>
            <div className='mt-5'>
                <div className='row'>
                    <div className='col-sm'>
                        <h3>History</h3>
                        {
                            value.map((item) => {
                                return <>
                                    <div className='d-flex justify-content-between align-items-center mb-3 bg-secondary rounded text-light p-3'>
                                        <div className="fw-bold fs-5">{item.text}</div>
                                            <div><span className={`badge px-3 fs-5 ${item.amount < 0 ? "bg-danger" : "bg-warning"} `}>${item.amount}</span></div>
                                    </div>
                                </>
                            })
                        }


                    </div>

                </div>

            </div>
            <h3>Add new transaction</h3>

            <div className="form-control">
                <label className="form-label">Text</label>
                <input
                    type="text"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                    className="form-control"
                    placeholder="Enter text..."
                />

                <label className="form-label mt-1">Amount</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(event) => setAmount(event.target.value)}
                    placeholder="Enter Amount"
                    className="form-control"
                />
                <button
                    className="btn btn-primary mt-3"
                    onClick={() => addToList()}
                >ADD
                </button>
            </div>

        </div>
    );
}

export default AddTransaction;
