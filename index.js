/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
  let content = ''
  let greeting = document.getElementById('greeting')
function greet(timeString){
  let conToArr = timeString.split(':')
  let conToInt = parseInt(conToArr[0],10)
  let conToInt1 = parseInt(conToArr[1],10)
  if(conToInt<12){
   return content = 'Good Morning'

  }
  if(conToInt>=12 && conToInt<=17){
    
         return content = 'Good Afternoon'
  }
  if(conToInt>17){
    return content = 'Good Evening'

  }

}
/* Write your implementation of displayMessage() */
function displayMessage(a){
  greeting.textContent = content
 
}
