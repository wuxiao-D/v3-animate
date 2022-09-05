import './style.css';

const animate = {}
animate.install = function (Vue, option) {
    Vue.directive('animate', {
        mounted: function(el, val) {
            if(val.value && val.value.direction == 'left') {
                el.style.animation = `showModRight ${val.value.time}s linear`;
            } else if(val.value && val.value.direction == 'right'){
                el.style.animation = `showModLeft ${val.value.time}s linear`;
            } else {
                el.style.animation = `showModScale 0.6s linear`;
            }
        }
    })
}
export default animate;