const refs = {
    startBtn: document.querySelector('[data-action="start"'),
    stopBtn: document.querySelector('[data-action="stop"'),
  },
  colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ],
  randomIntegerFromInterval = (max) => {
    return Math.floor(Math.random() * (max + 1));
  },
  setRandomColor = () => {
    const color = colors[randomIntegerFromInterval(colors.length - 1)]
    console.log(`RUN! ${color}`)
    document.body.style.backgroundColor = color
  }

let timerId = 0

refs.startBtn.addEventListener('click', () => {
  disActiveBtn(),
  timerId = timerId ?
    timerId :
    setInterval(() => setRandomColor(), 1000)
  
})

refs.stopBtn.addEventListener("click", () => {
 console.log(`СТОПЕ!!!! ${clearInterval(timerId)}`) 
})