const noteTitleInput = document.querySelector('#note-title')
const noteContentInput = document.querySelector('#note-content')
const addNoteBtn = document.querySelector('#add-note')
const noteList = document.querySelector('#note-list')


// Function to create a note item 
function createNoteItem(title, content) { 
    const listItem = document.createElement('li'); 
    listItem.classList.add('note'); 

    const noteTitleElement = document.createElement('div'); 
    noteTitleElement.classList.add('note-title'); 
    noteTitleElement.textContent = title; 

    const noteContentElement = document.createElement('div'); 
    noteContentElement.textContent = content; 

    listItem.appendChild(noteTitleElement); 
    listItem.appendChild(noteContentElement); 


    // Edit button 
    const editBtn = document.createElement('button'); 
    editBtn.textContent = 'Edit'; 
    editBtn.classList.add('edit-button'); 
    editBtn.addEventListener('click', function () { 
        editNoteItem(listItem); 
    }); 
    listItem.appendChild(editBtn); 


    // Delete button 
    const deleteBtn = document.createElement('button'); 
    deleteBtn.textContent = 'Delete'; 
    deleteBtn.classList.add('delete-btn'); 
    deleteBtn.addEventListener('click', function () { 
        deleteNoteItem(listItem); 
    }); 
    listItem.appendChild(deleteBtn); 

    return listItem; 
}

// Function to edit a note item 



// Event Listener 
addNoteBtn.addEventListener('click', function () { 
    const noteTitle = noteTitleInput.value; 
    const noteContent = noteContentInput.value; 


    if (noteTitle.trim() === '' || noteContent.trim() === '') { 
        alert('Please enter both a title and content for the note'); 
        return; 
    }

    const listItem = createNoteItem(noteTitle, noteContent); 
    noteList.appendChild(listItem); 

    noteTitleInput.value = ''; 
    noteContentInput.value = ''; 

}); 