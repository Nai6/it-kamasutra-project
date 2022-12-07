import rerender from "../render";

let state = {
    profilePage: {
        postData: [
            { message: 'Hello, how are you?', id: 1, likeCount: 10 },
            { message: 'It`s my first post!', id: 2, likeCount: 15 },
        ],
    },
    dialogsPage: {

        dialogsData: [
            { name: 'Dmitry', id: 1, avatar: 'https://tr.rbxcdn.com/ad4b26a320a3744d10ce51912debaaaf/420/420/Image/Png'},
            { name: 'Valera', id: 2, avatar: 'https://i.pinimg.com/originals/18/5a/53/185a53e4951166615c6956edd2f01f09.png'},
            { name: 'Elena', id: 3, avatar: 'https://tr.rbxcdn.com/7e98c08a67f1418715fa9fe2548d978f/420/420/Image/Png'},
            { name: 'Sveta', id: 4, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbxbnmBKvuqSTlx3cD9aJGdHjuFJFwj6Vdo685YeGm&s'},
            { name: 'Denis', id: 5, avatar: 'https://mystickermania.com/cdn/stickers/games/roblox-chill-face-512x512.png'},
            { name: 'Nikita', id:6, avatar: 'https://ih1.redbubble.net/image.4460356626.0730/mp,504x516,gloss,f8f8f8,t-pad,600x600,f8f8f8.jpg'}
        ],
        messageData: [
            { message: 'Hello!', id: 7 },
            { message: 'How is your roblox clan', id: 8 },
            { message: 'Hope it`s doint well.', id: 9 },
        ],
    }
}

export let addPost = (postMessage) => {
    debugger
    let newPost = {
        message: postMessage,
        id: state.profilePage.postData.length + 1,
        likeCount: 0,        
    };

    state.profilePage.postData.push(newPost)
    rerender(state);
}

export default state;