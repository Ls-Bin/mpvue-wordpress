function formatNumber(n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

function formatTime(date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

/**
 *函数防抖，需先初始化函数
 * @param {Function} 需执行函数
 * @param {Number} waitTime 延迟ms
 */
function bounce(func, waitTime) {
  let timer = null

  return function() {
    let _this = this
    let args = arguments

    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(function() {
      func.apply(_this, args)
    }, waitTime)
  }
}

/**
 * 函数节流，需先初始化函数
 * @param {Function} func 需执行函数
 * @param {Number} waitTime 延时ms
 */
function throttle(func, watTime) {
  let timeout = null
  let lastRun = 0
  return function() {
    if (timeout) {
      return
    }
    let elapsed = Date.now() - lastRun
    let context = this
    let args = arguments
    let runCallback = function() {
      lastRun = Date.now()
      timeout = false
      func.apply(context, args)
    }
    if (elapsed >= watTime) {
      runCallback()
    } else {
      timeout = setTimeout(runCallback, watTime)
    }
  }
}

export { formatNumber, formatTime, bounce, throttle }
