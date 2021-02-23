export const handleBodyScroll = (mode) => {
    if (mode) document.body.classList.add('modal-open')
    else document.body.classList.remove('modal-open')
}
