// getPosts();
// var user = document
//   .getElementsByClassName('btn btn-secondary dropdown-toggle')[0]
//   .innerText.trim();
// var isUser = user != 'Guest';
// var community = document.getElementById('currentComm').innerText;

// function getPosts() {
//   fetch('/getPosts')
//     .then((response) => response.json())
//     .then((posts) => {
//       showPosts(posts);
//     })
//     .catch((error) => console.error('Error:', error));
// }

// document.getElementsByClassName('create')[0].addEventListener('click', (e) => {
//   if (isUser) {
//     document.getElementsByClassName('creatPostInputsDiv')[0].style.display =
//       'grid';
//     document.getElementById('postTo').innerText = community;
//     console.log(document.getElementById('currentComm').innerHTML);
//     return;
//   }
//   alert('Login to post');
// });

// function showPosts(posts) {
//   document.getElementsByClassName('allPostsDiv')[0].innerHTML = '';
//   for (let i = 0; i < posts.length; i++) {
//     var post = posts[i];
//     if (post.postCom == community) {
//       var date = new Date(post.postDate);
//       let year = date.getFullYear();
//       let month = date.getMonth() + 1;
//       let day = date.getDate();
//       if (month < 10) month = '0' + month;
//       if (day < 10) day = '0' + day;
//       let formattedDate = `${year}/${month}/${day}`;
//       document.getElementsByClassName(
//         'allPostsDiv',
//       )[0].innerHTML += `<div class="postDiv">
//                 <div class="upperPost">
//                     <img class="userImg" src="images/userIcon/userx.jpg">
//                     <a href="profile.html"class="userAccount">${post.postOwner}</a>
//                 </div>
//                 <div class="postContent">
//                     <p class="postText">${post.postBody}</p>
//                 </div>
//                 <div class="bottomPost">
//                     <div class="postInfo">
//                         <p>posted <span class="dateOfPosting">${formattedDate} </span> to<strong> @<a href="community.html" class="communityTarget">${post.postCom}</a></strong></p>
//                     </div>
//                     <div class="postInteraction">
//                         <button class="like" id="like${post._id}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
//                             <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
//                         </svg><span class="numOfLikes">${post.likers.length}</span></button>
//                         <button class="dislike" id="dislike${post._id}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-down" viewBox="0 0 16 16">
//                             <path d="M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856s-.036.586-.113.856c-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a10 10 0 0 1-.443-.05 9.36 9.36 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a9 9 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581s-.027-.414-.075-.581c-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.2 2.2 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.9.9 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1"/>
//                         </svg><span class="numOfDisikes">${post.dislikers.length}</span></button>
//                         <button class="comment"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
//                             <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"/>
//                         </svg><span class="numOfComments">${post.repliers.length}</span></button>
//                     </div>
//                 </div>
//             </div>`;
//     }
//   }
// }

// document
//   .getElementsByClassName('creatPostInputsForm')[0]
//   .addEventListener('submit', (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const formData = new FormData(form);
//     if (!formData.get('textInput') || !formData.get('ccInput')) {
//       alert('Please fill in all required fields.');
//       return;
//     } else {
//       var post = {};
//       document.getElementsByClassName('creatPostInputsDiv')[0].style.display =
//         'grid';
//       var date = new Date();
//       let year = date.getFullYear();
//       let month = date.getMonth() + 1;
//       let day = date.getDate();
//       if (month < 10) month = '0' + month;
//       if (day < 10) day = '0' + day;
//       let formattedDate = `${year}/${month}/${day}`;
//       // console.log(formattedDate)
//       post = {
//         postOwner: user,
//         postCom: community,
//         postBody: formData.get('textInput'),
//         postImages: '',
//         postDate: formattedDate,
//         likers: [],
//         dislikers: [],
//         repliers: [],
//       };

//       fetch('/newPost', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(post),
//       })
//         .then((response) => response.json())
//         .then((data) => console.log('Success:', data))
//         .catch((error) => console.error('Error:', error));

//       document.getElementsByClassName('creatPostInputsDiv')[0].style.display =
//         'none';
//       form.reset();
//       getPosts();
//     }
//   });

// document.getElementsByClassName('close')[0].addEventListener('click', (e) => {
//   e.preventDefault();
//   const form = e.target.parentNode;
//   document.getElementsByClassName('creatPostInputsDiv')[0].style.display =
//     'none';
//   form.reset();
// });
