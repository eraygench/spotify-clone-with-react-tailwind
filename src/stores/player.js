import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    current: false,
    controls: false,
    playing: false,
    expandedImage: false
}

export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setCurrent: (state, action) => {
            state.current = action.payload
        },
        setControls: (state, action) => {
            state.controls = action.payload
        },
        setPlaying: (state, action) => {
            state.playing = action.payload
        },
        setExpandedImage: (state, action) => {
            state.expandedImage = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    setCurrent,
    setControls,
    setPlaying,
    setExpandedImage
} = playerSlice.actions

export default playerSlice.reducer