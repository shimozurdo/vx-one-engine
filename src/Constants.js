const step = 1 / 60
const MAX_FRAME = step * 5
const Scale = {
    RESIZE: 0,
    NONE: 1
}

const State = {
    NONE: 0,
    LOADING: 1,
    READY: 2,
    RUNNING: 3,
    SLEEPING: 4
}

export {
    MAX_FRAME,
    Scale,
    State
}