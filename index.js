const button = document.querySelector('.card__checkfood')
const modalCard = document.querySelector('.modal__card')
const backdrop = document.querySelector('.modal__backdrop')
const modalList = document.querySelector('.modal__list')
const lightBox = document.querySelector('.lightbox')
const headerCard = document.querySelector('.card--orange')
const modalHeader = document.querySelector('.modal__header')
const footer = document.querySelector('footer')
const close = document.querySelectorAll('.close-modal')
const body = document.body
const clickableImage = document.querySelector('.image__clickable')
const enlargedImage = document.querySelector('.enlarged__image')

const toggleModal = (e) => {
  headerCard.classList.toggle('hide')
  modalHeader.classList.toggle('hide')
  footer.classList.toggle('hide')

  if (modalCard.classList.contains('active')) {
    modalCard.classList.remove('active')
    body.classList.remove('no-scroll')
  } else {
    modalCard.classList.add('active')
    body.classList.add('no-scroll')
  }
}

close.forEach((item) => {
  item.addEventListener('click', toggleModal)
})

const animate = (e) => {
  e.preventDefault()
  toggleModal()
}

button.addEventListener('click', animate)
backdrop.addEventListener('click', animate)
modalList.addEventListener('click', (e) => e.stopPropagation())
lightBox.addEventListener('click', (e) => {
  e.stopPropagation()
})
enlargedImage.addEventListener('click', (e) => {
  e.stopPropagation()
})

let root = document.documentElement

root.style.setProperty('--document-width', window.innerWidth)
root.style.setProperty(
  '--initial-width',
  document.querySelector('.modal__card').clientWidth,
)

const modalDistanceFromTop =
  (document.querySelector('.modal__card').offsetTop / window.innerHeight) * 100

root.style.setProperty('--percent-top', modalDistanceFromTop + 'vh')

root.style.setProperty('--modal-height', 100 - modalDistanceFromTop + 'vh')

window.addEventListener('resize', () => {
  root.style.setProperty('--document-width', window.innerWidth)
  root.style.setProperty(
    '--initial-width',
    document.querySelector('.modal__card').clientWidth,
  )
})

const showLightBox = () => {
  let rect = clickableImage.getBoundingClientRect()
  lightBox.style.transformOrigin = `${(rect.left+rect.right)/2}px ${(rect.top+rect.bottom)/2}px`
  lightBox.classList.add('show')
}

const closeLightBox = () => {
  lightBox.classList.remove('show')
}
lightBox.addEventListener('click', closeLightBox)
clickableImage.addEventListener('click', showLightBox)
