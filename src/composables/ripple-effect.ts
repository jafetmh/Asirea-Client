export default function rippleEffect(): void {
  const liElements = Array.from(document.querySelectorAll('li')) as HTMLElement[]
  liElements.forEach((el: HTMLElement) => {
    el.addEventListener('click', function (e) {
      const rect = this.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const span = document.createElement('span')
      span.classList.add('ripple-effect')
      span.style.left = `${x}px`
      span.style.top = `${y}px`
      this.appendChild(span)
      setTimeout(() => span.remove(), 1000)
    })
  })
}
