// 1. AVATAR FACEBOOK
const facebookID = "100007922737857"; 
function updateAvatar() {
    const timestamp = new Date().getTime();
    const avatarUrl = `https://graph.facebook.com/${facebookID}/picture?width=500&height=500&access_token=6628568379|c1e620fa708a1d5696fb991c1bde5662&t=${timestamp}`;
    const img = document.getElementById('fb-avatar');
    if(img) img.src = avatarUrl;
}
updateAvatar();

// 2. TỰ ĐỘNG CHÈN LINK CHO BÌNH LUẬN FACEBOOK
(function(){
    const currentUrl = window.location.href.split('?')[0].split('#')[0];
    const fbDiv = document.getElementById('dynamic-fb-comments');
    if(fbDiv) {
        fbDiv.innerHTML = `<div class="fb-comments" data-href="${currentUrl}" data-width="100%" data-numposts="5"></div>`;
    }
})();

// 3. XÁC MINH TÍCH XANH
(function(){
    const nameEl = document.getElementById("owner-name");
    const badge = document.getElementById("verify-badge");
    if(nameEl && badge && nameEl.textContent.includes("HOÀNG VĂN CƯỜNG")){
        badge.style.display = "inline-block";
    }
})();

// 4. TRÌNH PHÁT NHẠC
const youtubeVideoID = "Hpjd3dNXQy0"; 
var player, isPlaying = false;
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.head.appendChild(tag);

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-audio', {
        height: '0', width: '0', videoId: youtubeVideoID,
        playerVars: { 'autoplay': 0, 'loop': 1, 'playlist': youtubeVideoID },
        events: { 'onReady': () => {
            document.body.addEventListener('click', () => { if(!isPlaying) toggleMusic(); }, {once: true});
        }}
    });
}

function toggleMusic() {
    if(!player) return;
    const btn = document.getElementById("music-control");
    if (isPlaying) { player.pauseVideo(); isPlaying = false; btn.classList.remove("playing"); } 
    else { player.playVideo(); isPlaying = true; btn.classList.add("playing"); }
}

// 5. HIỆU ỨNG CLICK
document.addEventListener('pointerdown', (e) => {
    const ring = document.createElement('div');
    ring.className = 'click-ring';
    ring.style.left = e.clientX + 'px'; ring.style.top = e.clientY + 'px';
    document.body.appendChild(ring);
    setTimeout(() => ring.remove(), 400);
});

// 6. XỬ LÝ IN-APP BROWSER
(function(){
    const warning = document.getElementById("inapp-warning");
    const ua = navigator.userAgent || "";
    if(/FBAN|FBAV|Zalo|Messenger/i.test(ua)) warning.style.display = "flex";
    
    document.getElementById("iw-copy")?.addEventListener("click", () => {
        navigator.clipboard.writeText(location.href);
        document.getElementById("iw-msg").textContent = "✅ Đã copy link!";
    });
    document.getElementById("iw-open")?.addEventListener("click", () => {
        window.open(location.href, "_blank");
    });
    // ÉP FACEBOOK HIỂN THỊ COMMENT NẾU BỊ LAG
setTimeout(() => {
    if (typeof FB !== 'undefined') {
        FB.XFBML.parse();
    }
}, 1500);
})();