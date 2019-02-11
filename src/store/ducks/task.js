export const Types = {
  GET_TASK: 'tasks/GET_TASK',
  PUT_TASK: 'tasks/PUT_TASK',
  DEL_TASK: 'tasks/DEL',
  UP_TASK: 'tasks/UP'
}

const initialState = {
  data: [],
  loading: false,
  error: null
}

const task = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_TASK:
      return {
        ...state,
        loading: true
      }

    case Types.PUT_TASK:
      return {
        ...state,
        loading: true,
        data: [
          ...state.data,
          {
            ...action.payload.task,
            id: state.data.length
          }
        ]
      }

    case Types.DEL_TASK:
      console.tron.log('dell', action.payload.task)

      return {
        ...state,
        data: state.data.filter(task => task.id !== action.payload.task.id)
      }
    case Types.UP_TASK:
      const data = state.data.filter(task => task.id !== action.payload.task.id)
      console.log(data)
      return {
        ...state,
        data: [...data, action.payload.task]
      }

    default:
      return state
  }
}

export default task

export const Creators = {
  getTasks: () => ({
    type: Types.GET_TASK
  }),

  putTask: task => ({
    type: Types.PUT_TASK,
    payload: {
      task
    }
  }),

  delTask: task => ({
    type: Types.DEL_TASK,
    payload: {
      task
    }
  }),

  updateTask: task => ({
    type: Types.UP_TASK,
    payload: {
      task
    }
  })
}
