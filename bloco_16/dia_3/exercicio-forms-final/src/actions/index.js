export const SAVE_DATA = 'SAVE_DATA'

export function formSubmit (data){
  return {
    type: SAVE_DATA,
    data,
  }
}