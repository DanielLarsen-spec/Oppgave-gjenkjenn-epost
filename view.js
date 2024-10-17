updateView()
function updateView(){
    document.getElementById('app').innerHTML = /*html*/`
    <div>email:</div>
    <input type="text" placeholder="Write your email" onchange="saveUserInput(this.value)"/>
    
    <div>${display}</div>
    `;
    
}
    








