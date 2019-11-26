This is what I'm thinking in terms of schema

id : {
    dateCreated : date,
    lastSaved : date and time,
    parent : id of parent || null,              [Every object will have this]                       
    children : [array of id's for children],    [only if its a folder type]
    type : type of file,                        [required]
    data : base64 data,                         [will be used if fileType is not a folder]
}

const arr = [object1, object2, object3];

arr.map(item => {
    // We will have checks in this for if they are in a folder
        // return all files with parent === to selected folder
    // Otherwise we will render everything without a parent field
})

