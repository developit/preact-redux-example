
    
const ADD_TODO = ({ todos, ...state }, { text }) => ({
		todos: [...todos, {
			id: Math.random().toString(36).substring(2),
			text
		}],
		...state
	})

const REMOVE_TODO =  ({ todos, ...state }, { todo }) => ({
		todos: todos.filter( i => i!==todo ),
		...state
	})


export  {ADD_TODO, REMOVE_TODO  }