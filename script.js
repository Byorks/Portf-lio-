const tabs = document.querySelectorAll('.tab_btn');
const all_content = document.querySelectorAll('.content');

tabs.forEach((tab, index)=>{
    tab.addEventListener('click', (e)=>{
        // Deixa apenas uma tab por vez com a classe active
        // No caso, já que essa linha está em cima e remove a classe active de todas as tabs, enta
        // Depois ele ativa uma tab, assim deixando uma tab ativa por vez
        tabs.forEach(tab=>{tab.classList.remove('active')});
        // Cada vez que clicado em uma tab, adiciona a classe 'active'
        tab.classList.add('active');

        let line = document.querySelector('.line');
        // Ajustando o tamanho da linha de acordo com o tamanho do texto e movimento
        //offsetWidth está pegando o tamanho da tab clicada no evento
       line.style.width = e.target.offsetWidth + "px";
       line.style.left = e.target.offsetLeft + "px";

       all_content.forEach(content=>{content.classList.remove('active')});
       all_content[index].classList.add('active');
    })
})