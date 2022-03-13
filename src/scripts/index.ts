const countDownDate = new Date('Jan 02, 2022 16:23:04')
const imagesAmount = 7

const daysOnCountdownMonth = new Date(countDownDate.getFullYear(), countDownDate.getMonth() + 1, 0).getDate()
const { clientWidth: vw, clientHeight: vh } = document.documentElement

function main () {
  images()
  images()
  images()
  timer()
}

main()

function timer () {
  const timerContainer = document.getElementById('timerContainer')!
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

    timerContainer.style.maxHeight = '100vh'

    counters[0].innerText = `${years} years`
    counters[1].innerText = `${months} months`
    counters[2].innerText = `${days} days`
    counters[3].innerText = `${hours} hours`
    counters[4].innerText = `${minutes} minutes`
    counters[5].innerText = `${seconds} seconds`
  }, 1000)
}

function images () {
  const imageContainer = document.getElementById('imageContainer')!

  const image = document.createElement('img')

  image.classList.add('image')
  imageContainer.appendChild(image)

  image.src = `assets/images/image${getRandomInt(imagesAmount, 1)}.jpg`

  image.style.top = `${getRandomInt(vh - image.height / 2, -image.height / 2)}px`
  image.style.left = `${getRandomInt(vw - image.width / 2, -image.width / 2)}px`

  image.style.opacity = '1'

  setTimeout(() => {
    image.style.opacity = '0'
    setTimeout(() => {
      image.remove()
      images()
    }, 1000)
  }, getRandomInt(5000, 3500))
}

function getRandomInt (max: number, min: number = 0) {
  return Math.floor(Math.random() * max) + min
}
