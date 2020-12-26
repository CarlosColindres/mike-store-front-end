interface InitialState {
    setup: string
}

export const initialState = {
    setup: ''
}

type Action = {type: string, payload: string}

export const rootReducer = (state: InitialState = initialState, action: Action) => {

    switch (action.type) {
        default:
            return state
    }

}