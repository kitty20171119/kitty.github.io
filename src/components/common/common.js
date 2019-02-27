function changeStyle(index){
    for(let i in this.tabBars){
        this.tabBars[i].class=''
    }
    this.tabBars[index].class='current'
    alert(index)
}