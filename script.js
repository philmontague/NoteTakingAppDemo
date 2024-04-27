const noteTitleInput = document.querySelector('#note-title'); 
const noteContentInput = document.querySelector('#note-content'); 
const addNoteBtn = document.querySelector('#add-note'); 
const noteList = document.querySelector('#note-list'); 


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

    const editBtn = document.createElement('button'); 
    editBtn.textContent = 'Edit'; 
    editBtn.classList.add('edit-btn'); 
    editBtn.addEventListener('click', function () { 
        editNoteItem(listItem); 
    }); 
    listItem.appendChild(editBtn); 

    const deleteBtn = document.createElement('button'); 
    deleteBtn.textContent = 'Delete'; 
    deleteBtn.classList.add('delete-btn'); 
    deleteBtn.addEventListener('click', function () { 
        deleteNoteItem(listItem); 
    }); 
    listItem.appendChild(deleteBtn); 

    return listItem; 
}


function editNoteItem(listItem) { 
    const noteTitleElement = listItem.querySelector('.note-title'); 
    const noteContentElement = listItem.querySelector('.note-content'); 

    const editModal = document.createElement('div'); 
    editModal.classList.add('edit-modal'); 

    const editTitleInput = document.createElement('input'); 
    editTitleInput.type = 'text'; 
    editTitleInput.value = noteTitleElement.textContent; 

    const editContentInput = document.createElement('textarea'); 
    editContentInput.value = noteContentElement.textContent; 

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


    listItem.querySelector('.edit-btn').replaceWith(saveBtn); 
}


function saveEditedItem(listItem, editedTitle, editedContent) { 
    const noteTitleElement = listItem.querySelector('.note-title'); 
    const noteContentElement = listItem.querySelector('.note-content'); 

    const updatedItem = createNoteItem(editedTitle, editedContent); 
    listItem.replaceWith(updatedItem); 

    const editBtn = document.createElement('button'); 
    editBtn.textContent = 'Edit'; 
    editBtn.classList.add('edit-btn'); 
    editBtn.addEventListener('click', function() {
        editNoteItem(listItem); 
    }); 

    listItem.querySelector('.save-btn').replaceWith(editBtn); 
    
}


function deleteNoteItem(listItem) { 
    noteList.removeChild(listItem); 
}


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