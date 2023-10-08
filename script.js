const noteTitleInput = document.querySelector('#note-title')
const noteContentInput = document.querySelector('#note-content')
const addNoteBtn = document.querySelector('#add-note')
const noteList = document.querySelector('#note-list')
const deleteBtn = document.createElement('button')


// ADD NOTE EVENT LISTENER 
addNoteBtn.addEventListener('click', function() { 
    const noteTitle = noteTitleInput.value 
    const noteContent = noteContentInput.value 

    // Check if both title and content are provided
    if (noteTitle.trim() === '' || noteContent.trim() === '') {
        alert('Please enter both a title and content for the note')
        return 
    }

    // New list item element for the note
    const listItem = document.createElement('li')
    listItem.classList.add('note')

    // Create elements for the note title and content
    const noteTitleElement = document.createElement('div')
    noteTitleElement.classList.add('note-title')
    noteTitleElement.textContent = noteTitle

    const noteContentElement = document.createElement('div')
    noteContentElement.textContent = noteContent

    // Append the title and content to the list item
    listItem.appendChild(noteTitleElement)
    listItem.appendChild(noteContentElement)

    // Append the list item to the note list
    noteList.appendChild(listItem)

    // Clear input fields 
    noteTitleInput.value = ''
    noteContentInput.value = ''


    // Delete button element for the note
    deleteBtn.textContent = 'Delete'
    deleteBtn.classList.add('delete-btn')
    
    // Event Listener for delete btn 
    deleteBtn.addEventListener('click', deleteNote)
    
    // Append delete button to list
    listItem.appendChild(deleteBtn)
    
})

// DELETE NOTE FUNCTION 
function deleteNote() {
    const listItem = this.parentElement 
    noteList.removeChild(listItem)
}