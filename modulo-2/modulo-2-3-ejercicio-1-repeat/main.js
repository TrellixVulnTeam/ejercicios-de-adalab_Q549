"use strict";

// avatar por defecto
const DEFAULT_AVATAR = "http://placehold.it/300x300";
// avatar que eligió el usuario al registrarse
let userAvatar = "http://www.fillmurray.com/300/300";

const image = document.querySelector(".js_user_avatar");
image.src = userAvatar;
userAvatar = "http://www.fillmurray.com/300/300 ";
image.src = userAvatar || DEFAULT_AVATAR;
