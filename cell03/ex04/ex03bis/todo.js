function getTodos() {
    return decodeURIComponent(document.cookie.split('; ').find(row => row.startsWith('todos='))?.split('=')[1] || '');
}

function saveTodos() {
    let todos = $('.todo').map(function(){
        return $(this).text();
    }).get();
    document.cookie = `todos=${encodeURIComponent(todos.join(','))};path=/;expires=Fri, 31 Dec 9999 23:59:59 GMT`;
}

function addTodo() {
    // get data
    let text = prompt("Enter a new TO DO:");
    if (text) {
        // Create box contain to do list
        let div = $('<div class="todo"></div>').text(text);
        div.click( function() { removeTodo(div); });
        let list = document.getElementById("ft_list");
        $('#ft_list').prepend(div);
        saveTodos();
    }
}

function removeTodo(todo) {
    if (confirm("Do you want to remove this TO DO?")) {
        todo.remove();
        saveTodos();
    }
}

function loadTodos() {
    let savedTodos = getTodos();
    if (savedTodos) {
        savedTodos.split(',').forEach(text => {
            let div = $('<div class="todo"></div>').text(text);
            div.on('click', function() { removeTodo(div); });
            $('#ft_list').append(div);
        });
    }
}

$(document).ready(function() {
    loadTodos();
});