const countDownDate = new Date() // Edit me  - 'Aug 07, 2021 22:30:00')
const daysOnCountdownMonth = new Date(countDownDate.getFullYear(), countDownDate.getMonth() + 1, 0).getDate()
const slidePhotosAmount = 6
const sentences = [
  { sentence: '"The two most powerful warriors are patience and time."', author: 'Leo Tolstoy' },
  { sentence: '"Time is Money."', author: 'Benjamin Franklin' },
  { sentence: '"Time waits for no one."', author: 'Folklore' },
  { sentence: '"Better three hours too soon than a minute too late."', author: 'William Shakespeare' },
  { sentence: '"Lost time is never found again."', author: 'Benjamin Franklin' },
  { sentence: '"Time is the most valuable thing a man can spend."', author: 'Theophrastus' },
  { sentence: '"Time is the wisest counselor of all."', author: 'Pericles' },
  { sentence: '"The key is in not spending time, but in investing it."', author: 'Stephen R. Covey' },
  { sentence: '"It is the time you have wasted for your rose that makes your rose so important."', author: 'Antoine de Saint-Exupéry' },
  { sentence: '"Punctuality is the thief of time."', author: 'Oscar Wilde' }
]

function main () {
  swipeUpButton()
  countdown()
  slideImageChange()
  changeSentence()
}

main()

function swipeUpButton () {
  const swipeUpButton = document.getElementById('swipeUpButton')!

  swipeUpButton.addEventListener('click', () => {
    window.scroll({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  })
}

function countdown () {
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

function slideImageChange () {
  const imageContainer = document.getElementById('randomImage') as HTMLImageElement

  setInterval(() => {
    const randomNumber = Math.floor(Math.random() * slidePhotosAmount) + 1

    imageContainer.src = `images/slideImages/image_${randomNumber}.jpg`
  }, 5000)
}

function changeSentence () {
  const sentenceParagraph = document.getElementById('sentenceParagraph') as HTMLParagraphElement
  const authorParagraph = document.getElementById('authorParagraph') as HTMLParagraphElement

  setInterval(() => {
    const randomNumber = Math.floor(Math.random() * sentences.length)

    sentenceParagraph.innerText = sentences[randomNumber].sentence
    authorParagraph.innerText = sentences[randomNumber].author
  }, 5000)
}
