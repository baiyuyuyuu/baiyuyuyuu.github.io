const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    mini: true,
    order: 'random', //音频循环顺序, 可选值: 'list'列表循环, 'random'随机循环
    preload: 'auto', //预加载，可选值: 'none', 'metadata', 'auto'
    volume: 0.7, //默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
    audio: [
        {
            name: '若梦',
            artist: '周深',
            url: 'https://pan.quark.cn/s/0c3d2b731d83',
            cover: 'cover1.jpg',
        },
        //{
            //name: 'name2',
            //artist: 'artist2',
            //url: 'url2.mp3',
            //cover: 'cover2.jpg',
        //}
    ]
});