var element = document.getElementsByClassName('lazy initial loaded');
var src = []
for (let i = 0; i < element.length; i++) {
        src[i] = element[i].src
        console.log(src[i])
}
