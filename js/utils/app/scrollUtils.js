const newsCardsContainer = document.getElementById('news-cards')
let newsCardContainerTop = newsCardsContainer.scrollTop

let newsDirection = true

export function newsCardsScroll() {
  let currTop = newsCardContainerTop
  let flag = true

  if (flag) {
    let curr = 0
    if (newsDirection) {
      curr = newsCardsContainer.scrollTop + 1
    } else {
      curr = newsCardsContainer.scrollTop - 1
    }
    newsCardsContainer.scrollTop = curr
    newsCardContainerTop = curr

    if (newsCardContainerTop == currTop) {
      newsDirection = !newsDirection
    }
  } else {
    return
  }
  const newsTimeout = setTimeout(newsCardsScroll, 15)
  // stop the scroll while the mouse is in the div element and restart it when the mouse leaves the div element
  // avoid the function to be called multiple times
  newsCardsContainer.addEventListener('mouseenter', () => {
    clearTimeout(newsTimeout)
  })
  // newsCardsContainer.addEventListener('mouseleave', () => {
  //   newsCardsScroll()
  // }
  // )
}

const publicationContainer = document.getElementById('publication-cards')
let publicationContainerTop = publicationContainer.scrollTop
let publicationDirection = true

export function publicationCardsScroll() {
  let currTop = publicationContainerTop

  if (true) {
    let curr = 0
    if (publicationDirection) {
      curr = publicationContainer.scrollTop + 1
    } else {
      curr = publicationContainer.scrollTop - 1
    }
    publicationContainer.scrollTop = curr
    publicationContainerTop = curr
  }
  if (publicationContainerTop == currTop) {
    publicationDirection = !publicationDirection
  }
  const timer = setTimeout(publicationCardsScroll, 15)
  publicationContainer.addEventListener('mouseenter', () => {
    clearTimeout(timer)
  })
}

// Scroll to top Button

const scrollToTopButton = document.querySelector('#scroll-to-top-button')

export const backToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
}

export const checkScrollPos = () => {
  if (window.scrollY > 20) {
    scrollToTopButton.style.display = 'block'
  } else {
    scrollToTopButton.style.display = 'none'
  }
}
