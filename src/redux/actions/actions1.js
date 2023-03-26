export const ACTIONS = {
    INCREMENT: "increament",
    DECREMENT: "decrement",
  };
  
  export const increament = () => {
    return { type: ACTIONS.INCREMENT };
  };
  
  export const decrement = () => {
    return { type: ACTIONS.DECREMENT };
  };