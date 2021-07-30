const $form = document.querySelector('form')


$form.addEventListener('click', e => {
    e.preventDefault()
    console.log('teste', e.target )
} )

