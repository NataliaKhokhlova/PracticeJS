$(function () {
    let buttonEnter = $('#enter');
    let userInput = $('#userInput');
    $('.intro').delay(500).animate({ 'opacity': '1' }, 200)
    $('#first').delay(1000).animate({ 'opacity': '1' }, 500)
    $('#second').delay(2000).animate({ 'opacity': '1' }, 500)
    $('#third').delay(3000).animate({ 'opacity': '1' }, 500)
    $('#enter').delay(4000).animate({ 'opacity': '1' }, 500)
    $('input').delay(4000).animate({ 'opacity': '1' }, 500)
    let ul = $('ul');
    let localStorage = window.localStorage;
    let todoMap = [
        {
            ind: 1,
            text: 'example'
        }
    ]

    function inputLength() {
        return !!userInput.val();
    }

    function createTodo() {
        let li = $("<li>", { text: userInput.val() });
        li.css({
            'margin-left': '100px',
            'margin-right': '100px'
        });
        li.hide();
        ul.append(li);
        li.fadeIn(300);
        li.animate({
            'margin-left': '0px',
            'margin-right': '0px'
        }, 500);

        todoMap.push({
            ind: todoMap.length + 1,
            text: userInput.val()
        });
        localStorage.setItem('Todo_list', JSON.stringify(todoMap));
        userInput.val('');

        let deleteButton = $('<button>', { text: 'X' });
        li.append(deleteButton);
        deleteButton.click(deleteTodoItem);

        li.click(() => {
            li.toggleClass('done');
        });

        function deleteTodoItem() {
            li.addClass('del');
            li.animate({
                'margin-left': '200px',
                'margin-right': '200px'
            }, 500).fadeOut(500).remove(500);

        }
    }

    function changeListAfterKeypress(event) {
        if (inputLength() && event.which === 13) {
            createTodo();
        }
    }

    buttonEnter.onclick = () => {
        if (inputLength()) {
            createTodo();
        }
    };
    userInput.addEventListener('keypress', changeListAfterKeypress);
})