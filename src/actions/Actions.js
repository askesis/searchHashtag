export const setQuestions = questions => ({
  type: 'QUESTIONS',
  questions: questions,
});

export const countSetPosts = number => ({
  type: 'COUNT_GET_POSTS',
  number:number,
})

export const showAlert = value => ({
  type:'ALERT_SHOW',
  show: value,
  count:0,
})