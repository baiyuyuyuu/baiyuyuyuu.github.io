const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,
    loop: 'all',
    listMaxHeight: 60,
    theme: '#FADFA3', //主题色
    fixed: true,
    order: 'random', //音频循环顺序, 可选值: 'list'列表循环, 'random'随机循环
    preload: 'auto', //预加载，可选值: 'none', 'metadata', 'auto'
    volume: 0.2, //默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
    mutex: true, //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    listFolded: true, //列表默认折叠
    audio: [
        {
            name: '不老梦',
            artist: '银临',
            url: 'http://music.163.com/song/media/outer/url?id=421137682.mp3',
            cover: 'cover1.jpg',
        },
        {
            name: '孽海记',
            artist: '黄诗扶',
            url: 'http://music.163.com/song/media/outer/url?id=1370879975.mp3',
            cover: 'cover2.jpg',
        }

        {
            name: '若梦',
            artist: '周深',
            url: 'https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBay1MQzFqaGVSNFhoeWh6Z3hFN0RKLXAyZVpQP2U9RVpWeTFS.mp3',
            cover: 'cover2.jpg',
        }
		//https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBay1MQzFqaGVSNFhoeWh6Z3hFN0RKLXAyZVpQP2U9RVpWeTFS.mp3
    ]
});