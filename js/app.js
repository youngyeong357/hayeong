AOS.init();
document.addEventListener("DOMContentLoaded",function(){
/* 콜백함수 */ 
    const progressBar = document.querySelectorAll(".progress-bar");
    progressBar.forEach(bar => {
        const target = bar.getAttribute("data-bs-target");
        setTimeout(() => {
            bar.style.width = target + "%";
        },500)/*0.5초동안(setTimeout) 이 일을 해줘 = 인터벌이랑 비슷한데 얘는 안꺼줘도 돼 */
    })
    const searchInput = document.getElementById("searchInput");/*내가 검색을 하면 그 결과값을 내놓는 것 */
    const portfolioItems = document.querySelectorAll(".portfolio-item")

    searchInput.addEventListener("input", function(){
        const searchTerm = this.value.toLowerCase();
        portfolioItems.forEach((item) => {
            const title = item.querySelector("h4").textContent.toLowerCase();
             /*이제 비교를 합니다 */
            if(title.includes(searchTerm)) {
                item.style.display = "block" ;
            } else {
                item.style.display = "none" ;
            } 
        })
    })
    /* 여기서 item은 portfolio-item 이거다 그 한 그룹을 가져 오고 거기서 h4는 하나다. */


    const filterButtons =  document.querySelectorAll(".filter-btn")
    filterButtons.forEach((button) => {
        button.addEventListener("click", function(){
            const filter = this.getAttribute("data-filter") ;
            portfolioItems.forEach((item)=>{
                if(filter === 'all' || item.getAttribute("data-category") === filter) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none"
                }
            })
        })
    })
    
})
/* Document Object Modeling : 사이트에 접속하면이라는 의미 
   this : 현재페이지 */

 /* DOM : Document Object Modeling
DOMContentLoaded : 너가 이걸 실행하면~ */