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
    noteContentElement.classList.add('note-content'); 
    noteContentElement.textContent = content; 

    listItem.appendChild(noteTitleElement); 
    listItem.appendChild(noteContentElement); 


    // Edit button 
    const editBtn = document.createElement('button'); 
    editBtn.textContent = 'Edit'; 
    editBtn.classList.add('edit-btn'); 
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
function editNoteItem(listItem) { 
    const noteTitleElement = listItem.querySelector('.note-title'); 
    const noteContentElement = listItem.querySelector('.note-content'); 

    // editModal 
    const editModal = document.createElement('div'); 
    editModal.classList.add('edit-modal'); 

    const editTitleInput = document.createElement('input'); 
    editTitleInput.type = 'text'; 
    editTitleInput.value = noteTitleElement.textContent; 

    const editContentInput = document.createElement('textarea'); 
    editContentInput.value = noteContentElement.textContent; 

    // Replace existing title and content with input fields 
    noteTitleElement.replaceWith(editTitleInput); 
    noteContentElement.replaceWith(editContentInput); 

    editModal.appendChild(editTitleInput); 
    editModal.appendChild(editContentInput); 
    listItem.appendChild(editModal); 

    // Create a "Save" button 
    const saveBtn = document.createElement('button'); 
    saveBtn.textContent = 'Save'; 
    saveBtn.classList.add('save-btn'); 
    saveBtn.addEventListener('click', function () { 
        saveEditedItem(listItem, editTitleInput.value, editContentInput.value); 
    });

    // Replace "Edit" button with "Save" button
    listItem.querySelector('.edit-btn').replaceWith(saveBtn); 
}


// Function to save edited note item 
function saveEditedItem(listItem, editedTitle, editedContent) { 
    const noteTitleElement = listItem.querySelector('.note-title'); 
    const noteContentElement = listItem.querySelector('.note-content'); 

    const updatedItem = createNoteItem(editedTitle, editedContent); 
    listItem.replaceWith(updatedItem); 

    // Create "Edit" button 
    const editBtn = document.createElement('button'); 
    editBtn.textContent = 'Edit'; 
    editBtn.classList.add('edit-btn'); 
    editBtn.addEventListener('click', function() {
        editNoteItem(listItem); 
    }); 

    // Replace "Save" button with "Edit" button 
    listItem.querySelector('.save-btn').replaceWith(editBtn); 
    
}


// Function to delete a note item 
function deleteNoteItem(listItem) { 
    noteList.removeChild(listItem); 
}


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

    // Clear input fields 
    noteTitleInput.value = ''; 
    noteContentInput.value = ''; 
}); 