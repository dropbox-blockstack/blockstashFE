This is what I'm thinking in terms of schema

id : {
    name : string,
    dateCreated : date,
    lastSaved : date and time,
    parent : id of parent || null,              [Every object will have this]                       
    children : [array of id's for children],    [only if its a folder type][might not need this either][possible boolean?]
    type : type of file,                        [required]
    data : base64 data,                         [will be used if fileType is not a folder]
    size : string                               [size of the file]
    id : same as id above,
    sharedWith : [],                            [array of user id's that the folder is shared with]
    public : boolean                            [determines if the file is public][we can remove the sharedWith attribute if this is true]
}

const arr = [object1, object2, object3];

arr.map(item => {
    // We will have checks in this for if they are in a folder
        // return all files with parent === to selected folder
    // Otherwise we will render everything without a parent field
})

Object.values(files).map(file => {
    file.parent
    ?   file has a parent folder
    :   render something (there is no parent folder selected)
})

else if there in a folder

Object.values(files).map(file => {
    file.parent === folderName
    ? render it here
    : don't render it
})

