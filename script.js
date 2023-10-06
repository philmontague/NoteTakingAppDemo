const noteTitle = document.querySelector('#note-title')
const noteContent = document.querySelector('#note-content')
const addNoteBtn = document.querySelector('#add-note')
const noteList = document.querySelector('#note-list')

// ADD NOTE 
addNoteBtn.addEventListener('click', function() { 
    const noteTitle = noteTitle.value 
    const noteContent = noteContent.value 

    // Check if both title and content are provided
    if (noteTitle.trim() === '' || noteContent.trim() === '') {
        alert('Please enter both a title and content for the note')
        return 
    }

    // Create a new list item element for the note
    const listItem = document.createElement('li')
    listItem.classList.add('note')

    // Create elements for the note title and content

    // Append the title and content to the list item

    // Append the list item to the note list

    // Clear the input fields
    noteTitle.value = ''
    noteContent.value = ''
})
