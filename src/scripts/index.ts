const countDownDate = new Date() // Edit me  - 'Aug 07, 2021 22:30:00')
const daysOnCountdownMonth = new Date(countDownDate.getFullYear(), countDownDate.getMonth() + 1, 0).getDate()

function main () {
  timer()
}

main()

function timer () {
  const counters = document.querySelectorAll<HTMLParagraphElement>('.counterText')

  setInterval(() => {
    const now = new Date()
    if (now.getTime() - countDownDate.getTime() < 0) console.log('invalid date')

    let seconds = now.getSeconds() - countDownDate.getSeconds()
    let minutes = now.getMinutes() - countDownDate.getMinutes()
    let hours = now.getHours() - countDownDate.getHours()
    let days = now.getDate() - countDownDate.getDate()
    let months = now.getMonth() - countDownDate.getMonth()
    let years = now.getFullYear() - countDownDate.getFullYear()

    if (seconds < 0) {
      seconds += 60
      minutes -= 1
    }

    if (minutes < 0) {
      minutes += 60
      hours -= 1
    }

    if (hours < 0) {
      hours += 24
      days -= 1
    }

    if (days < 0) {
      days += daysOnCountdownMonth
      months -= 1
    }

    if (months < 0) {
      months += 12
      years -= 1
    }

    counters[0].innerText = `${years} years`
    counters[1].innerText = `${months} months`
    counters[2].innerText = `${days} days`
    counters[3].innerText = `${hours} hours`
    counters[4].innerText = `${minutes} minutes`
    counters[5].innerText = `${seconds} seconds`
  }, 1000)
}
