
export const initialState = {   
    menuButton:{          
      burger: false,
    },
   
    profile: [
      {
        id: 1,
        name: 'Marcelo Ribeiro',
        email: 'eng.msilva@yahoo.com.br',
        phone: '019971395714'      
      },
      {
        id: 2,
        name: 'Isabeli Ribeiro',
        email: 'isabeli@yahoo.com.br',
        phone: '019971395714'      
      }
    ],
   
  
  }

export function reducer(state, action) {

  switch (action.type) {  
    case "activeBurger":
      return {...state, menuButton: {
          ...state.menuButton,
          burger: !state.menuButton.burger,          
          }};    
    case "updateProfile": 
      return {...state, profile: state.profile};   
    default:
      return state
  }  
}