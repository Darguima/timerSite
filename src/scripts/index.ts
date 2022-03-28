const countDownDate = new Date('Jan 02, 2022 16:23:04')
const daysOnCountdownMonth = new Date(countDownDate.getFullYear(), countDownDate.getMonth() + 1, 0).getDate()

const imagesAmount = 7

function main () {
  preloadImages() // image cache

  toggleFlippedClass()
  timer()
}

main()

function preloadImages () {
  const img = new Image()
  nextImage()
  console.log('Image Cache Ready')

  function nextImage (imageIndex = 1) {
    if (imageIndex > imagesAmount) return
    img.src = `assets/images/image${imageIndex}.jpg?f=b`
    img.onload = () => { nextImage(imageIndex + 1) }
  }
}

function toggleFlippedClass () {
  const card = document.querySelector('#contentContainer')

  const image = document.querySelector<HTMLImageElement>('#contentContainer .back .image')!
  const animationDelay = Number(
    getComputedStyle(document.documentElement)
      .getPropertyValue('--transform-animation-delay')
      .replace('s', '')
  )
  toggleBackFaceImage(image)

  card?.addEventListener('click', () => {
    card.classList.toggle('flipped')

    if (!card.classList.contains('flipped')) {
      setTimeout(() => toggleBackFaceImage(image), animationDelay * 1000)
    }
  })
}

function toggleBackFaceImage (image: HTMLImageElement) {
  const randomImageNumber = Math.floor(Math.random() * imagesAmount) + 1
  image.src = `assets/images/image${randomImageNumber}.jpg`
}

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
