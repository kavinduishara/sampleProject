import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incriment, decriment } from './counterSlice'
const Counter = () => {
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()
    return (
        <div className="flex items-center gap-4">
            <span className="text-lg font-semibold">Items</span>
            <p className="text-2xl font-bold">{count}</p>
            <div className="flex gap-2">
                {/* <button
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    onClick={() => dispatch(incriment())}
                >
                    +
                </button>
                <button
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                    onClick={() => dispatch(decriment())}
                >
                    -
                </button> */}
            </div>
        </div>
    )
}

export default Counter
