import { configureStore} from '@reduxjs/toolkit'

import CounterReduce from '../redux/CounterSlice'

export const store = configureStore({
    reducer: {
        counter : CounterReduce 
    },
})