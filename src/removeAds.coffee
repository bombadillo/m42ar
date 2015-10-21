sidebar = document.getElementById 'sidebar'
content = document.getElementById 'content'

sidebar.style.display = 'none'
content.style.marginRight = '0px'

window.dispatchEvent new Event('resize')
