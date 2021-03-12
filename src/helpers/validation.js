export default function validation(field, validate) {
    if (!validate.status) {
        !field.parent().find('span').hasClass('text-red-500') && field.parent().append( /*html*/ `<span class="text-red-500">${validate.message}</span>`)
        field.removeClass('border-green-500')
        field.addClass('border-red-500')
        return false
    }
    field.parent().find('span').remove()
    field.removeClass('border-red-500')
    field.addClass('border-green-500')
    return true
}