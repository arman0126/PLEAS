const reels = [
  {
    username: "aman_verma",
    likeCount: 14200,
    isLiked: false,
    commentCount: 320,
    caption: "Chasing sunsets and dreams ✨",
    video: "./videos/1.mp4.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/32.jpg",
    shareCount: 180,
    isFollowed: true
  },
  {
    username: "priya_sharma",
    likeCount: 9800,
    isLiked: true,
    commentCount: 210,
    caption: "Weekend vibes 🌿💚",
    video: "./videos/2.mp4.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/44.jpg",
    shareCount: 120,
    isFollowed: false
  },
  {
    username: "vikas_kumar",
    likeCount: 5600,
    isLiked: false,
    commentCount: 95,
    caption: "New day, new hustle 💪",
    video: "./videos/3.mp4.mp4",
    
    userProfile: "https://randomuser.me/api/portraits/men/58.jpg",
    shareCount: 60,
    isFollowed: true
  },
  {
    username: "anjali_mehta",
    likeCount: 23300,
    isLiked: true,
    commentCount: 620,
    caption: "Travel makes you richer ✈️🌍",
    video: "./videos/4.mp4.mp4",
    
    userProfile: "https://randomuser.me/api/portraits/women/29.jpg",
    shareCount: 300,
    isFollowed: true
  },
  {
    username: "rahul_singh",
    likeCount: 15100,
    isLiked: false,
    commentCount: 402,
    caption: "Gym mode: ON 🔥",
    video: "./videos/5.mp4.mp4",
    
    userProfile: "https://randomuser.me/api/portraits/men/41.jpg",
    shareCount: 190,
    isFollowed: false
  },
  {
    username: "saloni_raj",
    likeCount: 8700,
    isLiked: false,
    commentCount: 185,
    caption: "Coffee + Rain = Perfect day ☕🌧️",
        video: "./videos/6.mp4.mp4",

    userProfile: "https://randomuser.me/api/portraits/women/50.jpg",
    shareCount: 110,
    isFollowed: true
  },
  {
    username: "arjun_patil",
    likeCount: 20400,
    isLiked: true,
    commentCount: 530,
    caption: "Life is better with music 🎧",
        video: "./videos/7.mp4.mp4",

    userProfile: "https://randomuser.me/api/portraits/men/12.jpg",
    shareCount: 280,
    isFollowed: false
  },
  {
    username: "simran_k",
    likeCount: 7200,
    isLiked: false,
    commentCount: 140,
    caption: "Be your own competition ✨",
    video: "./videos/8.mp4.mp4",
    
    userProfile: "https://randomuser.me/api/portraits/women/11.jpg",
    shareCount: 75,
    isFollowed: true
  },
  {
    username: "dev_malhotra",
    likeCount: 3100,
    isLiked: false,
    commentCount: 88,
    caption: "Late night coding grind 👨‍💻🔥",
        video: "./videos/9.mp4.mp4",

    userProfile: "https://randomuser.me/api/portraits/men/26.jpg",
    shareCount: 40,
    isFollowed: false
  },
  {
    username: "rhea_kapoor",
    likeCount: 15600,
    isLiked: true,
    commentCount: 455,
    caption: "Dance is my happy place 💃✨",
        video: "./videos/10.mp4.mp4",

    userProfile: "https://randomuser.me/api/portraits/women/19.jpg",
    shareCount: 170,
    isFollowed: true
  }
];

var sum = ''
reels.forEach(function(elem){
    sum = sum + ` <div class="reel">
                
                <video autoplay loop muted src="${elem.video}"></video>
                <div class="bottom">
                    <div class="user">
                        <img src="${elem.userProfile}" alt="">
                        <h4>${elem.username}</h4>
                        <button>${elem.isFollowed ? 'Unfollow' : 'Follow'}</button>
                    </div>
                    <h3>${elem.caption}</h3>
                </div>
               <div class="right">
                    <div class="like">
                        <h4 class = "like-class" >${elem.isLiked ? '<i class=" love ri-heart-fill"></i>' : '<i class="ri-heart-line"></i>'}</h4>
                        <h6>${elem.likeCount}</h6>
                    </div>
                    <div class="comment">
                        <h4><i class="ri-chat-3-line"></i></h4>
                        <h6>${elem.commentCount}</h6>
                    </div>
                    <div class="share">
                        <h4><i class="ri-share-forward-line"></i></h4>
                        <h6>${elem.commentCount}</h6>
                    </div>
                    <div class="more">
                        <h4><i class="ri-more-2-fill"></i></h4>
                    </div>
                </div>


            </div>` 
})
var allreels = document.querySelector('.allreels')
allreels.innerHTML = sum