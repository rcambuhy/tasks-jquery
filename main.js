$('form').on('submit', function(e) {
    e.preventDefault();

    const addNewTask = $('#task').val();
    const newTask = $('<li></li>').html(addNewTask);
    //utilizar o .text simplesmente para adicionar o texto dentro do <li>, pois se utilizar o appendTo, ele adicionará uma tag <li> dentro de outra: <li><li>New task</li></li>//
    const newImg = $('<img id="clear" src="./clear.png">');
    
    $(newTask).appendTo('ul');
    $(newImg).appendTo(newTask);

    $('#task').val('');
})

$('ul').on('click', 'li', function() {
    //uma vez que o li será gerado automaticamento, o nosso $ ou document.querySelector será o 'ul'//
    //primeiro utilizamos o .on('click', 'li') para dizer: quando clicarmos no li, realize a função abaixo//
    $(this).css('text-decoration', 'line-through');
    $(this).css('color', 'gray');
    //elementos do css que serão aplicados após o click//
})

$(document).on('click', 'li img', function() {
    $(this).parent().remove();
    //$(this) refere-se a imagem clicada, $(this).parent() refere-se ao elemento pai da imagem (<li>), e o .remove() remove a linha//
});