import * as types from '../actions/actionTyps'

const intialState = {
     users: [{
               id: 1,
               name: "Ehab97",
               fName: "Ehab",
               lName: "Reda",
               mail: "ehabreda04@gmail.com",
               password: "@wads@sda12",
               department: "Front",
               phone: '01028317493'
          },
          {
               id: 2,
               name: "Ehab200",
               fName: "Ahmed",
               lName: "Mohammed",
               mail: "Ahmed04@gmail.com",
               password: "@wads@adssda12",
               department: "Back",
               phone: '01128317493'
          }, {
               id: 3,
               name: "nady200",
               fName: "Moahmed",
               lName: "Nady",
               mail: "nady04@gmail.com",
               password: "@waddss@adssda12",
               department: "ui",
               phone: '01125317493'
          }
     ]
}

export default function reducer(state = intialState, action) {
     switch (action.type) {
          case types.ADD_USER:
               return {users:[...state.users,action.user]}
          case types.DELETE_USER:
               let newUsers = state.users.filter(user => action.id != user.id)
               return {...state, users: newUsers}
          case types.UPDATE_USER:
               return state.users.map((user, id) => {
                    if (id !== action.id) {
                      // This isn't the item we care about - keep it as-is
                      return user
                    }
                    // Otherwise, this is the one we want - return an updated value
                    return {
                      ...user,
                      ...action.user
                    }
                  })
          default:
               return state;
     }
}