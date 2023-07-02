const input = document.querySelector('#arquivo')
const preview = document.querySelector('#preview')
const btn_download = document.querySelector('#download')

input.addEventListener('change', function () {
    const arquiv = this.files[0]
    const leitor = new FileReader()

    leitor.addEventListener('load', function () {
        console.log(leitor.result)
        preview.value = leitor.result
    })

    if (arquiv) {
        leitor.readAsText(arquiv)
    }
})

const download = function () {
    const a = document.createElement('a')
    a.style = 'display: none;'
    document.body.appendChild(a)
    return function (conteudo, nomeArquivo) {
        const blob = new Blob([conteudo], { type: 'octat/stream' })
        const url = window.URL.createObjectURL(blob)
        a.href = url
        a.download = nomeArquivo
        a.click()
        window.URL.revokeObjectURL(url)
    }
}

btn_download.addEventListener('click', function () {
    download()(preview.value, 'depois-de-instalado.png')
})