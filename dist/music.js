const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,
    loop: 'all',
    listMaxHeight: 60,
    theme: '#FADFA3', //主题色
    fixed: true,
    order: 'list', //音频循环顺序, 可选值: 'list'列表循环, 'random'随机循环
    preload: 'metadata', //预加载，可选值: 'none', 'metadata', 'auto'
    volume: 0.2, //默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
    mutex: true, //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    listFolded: true, //列表默认折叠
    audio: [
	//古风
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
        },

        {
            name: '若梦',
            artist: '周深',
            url: 'https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBay1MQzFqaGVSNFhoeWh6Z3hFN0RKLXAyZVpQP2U9RVpWeTFS.mp3',
            cover: 'cover2.jpg',
        },
		
		{
            name: 'Cassette Tape Dream',
            artist: 'しゃろう',
            url: 'http://music.163.com/song/media/outer/url?id=1831400980.mp3',
            cover: 'cover2.jpg',
        },
		//modern
		{
            name: 'Mojito',
            artist: '周杰伦',
            url: 'https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBay1MQzFqaGVSNFhoekQ0NnpvaTVaNlpxc2RKP2U9NmhMd2ZQ.mp3',
            cover: 'cover2.jpg',
        },
		
		//ed/op
		{
            name: 'One Last Kiss.mp3',
            artist: '宇多田光',
            url: 'https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBay1MQzFqaGVSNFhoelpmOUlGSFN3enVrNXBHP2U9eU5JNzNS.mp3',
            cover: 'cover2.jpg',
        },
		
		//kpop
		{
            name: 'Savage',
            artist: 'aespa',
            url: 'https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBay1MQzFqaGVSNFhoeWxTYmtHLW9tQ2pBRUJsP2U9RnFqMzJk.mp3',
            cover: 'cover2.jpg',
        },
		
		{
            name: '누가 봐도 우린 (无论谁看，我们) (Be My Love)',
            artist: 'EXO-CBX',
            url: 'https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBay1MQzFqaGVSNFhoeXM1ZFRWUzRzVXVpVHdGP2U9bGVoZEt1.mp3',
            cover: 'cover2.jpg',
        },
		
		{
            name: '[A]ddiction',
            artist: 'EVO+',
            url: 'https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBay1MQzFqaGVSNFhoeTNnXzBNQ2lhWWJCMzNsP2U9dUFpQlRX.mp3',
            cover: 'cover2.jpg',
        },
		
		{
            name: '살만찌고 (只是长胖)',
            artist: '4MINUTE',
            url: 'https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBay1MQzFqaGVSNFhoeXBDc0pNVVJsOFViQnZCP2U9N0czdEV5.mp3',
            cover: 'cover2.jpg',
        },	

		
		{
            name: '한 (一)',
            artist: '(G)I-DLE',
            url: 'https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBay1MQzFqaGVSNFhoeXlTdTVyZjIzZWdPb0diP2U9NUVhbTRa.mp3',
            cover: 'cover2.jpg',
        },
		
		{
            name: 'Senorita',
            artist: '(G)I-DLE',
            url: 'https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBay1MQzFqaGVSNFhoeTR5RUJlVF8yOE9pcGhQP2U9QW1qM0c0.mp3',
            cover: 'cover2.jpg',
        },
		
		{
            name: 'CALL ME BABY',
            artist: 'EXO',
            url: 'https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBay1MQzFqaGVSNFhoekpCb2tqMUdndWRfTjlaP2U9NWQxanlF.mp3',
            cover: 'cover2.jpg',
        },
		
		{
            name: 'Change',
            artist: '泫雅、龙俊亨',
            url: 'https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBay1MQzFqaGVSNFhoelF4TEhUcVNKMmJaME92P2U9RnNJUXR4.mp3',
            cover: 'cover2.jpg',
        },
		
		{
            name: '단발머리 ( SHORT HAIR)',
            artist: 'AOA',
            url: 'https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBay1MQzFqaGVSNFhoek1NYVM5ZTFzcElDeGdNP2U9Q0taNFRY.mp3',
            cover: 'cover2.jpg',
        },
		
		{
            name: 'HOT PINK',
            artist: 'EXID',
            url: 'https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBay1MQzFqaGVSNFhoekcwYUdxcWlLMHFYYS04P2U9OWRXWGZo.mp3',
            cover: 'cover2.jpg',
        },
		
		
		{
            name: 'MAGO',
            artist: 'GFRIEND',
            url: 'https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBay1MQzFqaGVSNFhoeS14cERHTWRPbFdFYzlUP2U9cGQydmU0.mp3',
            cover: 'cover2.jpg',
        },
		
		{
            name: 'POP!',
            artist: 'NAYEON',
            url: 'https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBay1MQzFqaGVSNFhoemZNZG9teFF0YmdXVXl5P2U9WkhaVFpw.mp3',
            cover: 'cover2.jpg',
        },
		
		{
            name: 'Chocolate Cream (Feat. 낯선)',
            artist: 'Laysha、Nassun',
            url: 'https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBay1MQzFqaGVSNFhoemprSnY0NS1fWm9ZVVB1P2U9SVh3T1pI.mp3',
            cover: 'cover2.jpg',
        },
		
		{
            name: 'TOMBOY',
            artist: '09Wynn',
            url: 'https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBay1MQzFqaGVSNFhoeldCM3Y1dGhjeld4cXpoP2U9M2tVdm00.mp3',
            cover: 'cover2.jpg',
        },
    ]
});