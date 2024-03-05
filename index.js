let ownerEl = document.getElementById('owner')
let servicesEl = document.getElementById('services')
let locationEl = document.getElementById('location')

function scrollFunctionOne(){
    ownerEl.scrollIntoView({
        block:'start',
        behavior:'smooth',
        inline:'start'
    })
}

function scrollFunctionTwo(){
    servicesEl.scrollIntoView({
        block:'start',
        behavior:'smooth',
        inline:'start'
    })
}

function scrollFunctionThree(){
    locationEl.scrollIntoView({
        block:'start',
        behavior:'smooth',
        inline:'start'
    })
}