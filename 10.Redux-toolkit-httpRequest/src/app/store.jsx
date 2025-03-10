import { configureStore} from '@reduxjs/toolkit'
import counterSlice from '../features/counter/CounterSlice'
import userSlice from '../features/user/UserSlice'

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        user: userSlice
    }
})