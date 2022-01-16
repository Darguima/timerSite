function main () {
  swipeUpButton()
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
