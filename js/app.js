
document.addEventListener("DOMContentLoaded", function(){

    const progressBar= document.querySelectorAll(".progress-bar");
    progressBar.forEach(bar => {
        const target = bar.getAttribute("data-bs-target");
         /* getAttribute : 속성을 들고 온다 */
        setTimeout(() => {
            bar.style.width = target +"%";
        },500)
         /* setTimeout : 0.5초(500)동안 이 일을 해 줌 / interval은 꺼줘야 하지만 setTimeout은 안 꺼줘도 됨 */
    })





})
 /* DOM : Document Object Modeling
DOMContentLoaded : 너가 이걸 실행하면~ */