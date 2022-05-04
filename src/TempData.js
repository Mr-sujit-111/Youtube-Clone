const thumbImages = ['song1.jpg', 'song2.jpg', 'movie1.jpg', 'movie2.jpg', 'movie3.jpg', 'movie4.jpg', 'movie5.jpg', 'movie6.jpg', 'movie7.jpg', 'movie8.jpg', 'movie9.jpg', 'movie10.jpg'];
const categories = ['Music', 'Movie', 'Trailer', 'Comedy', 'Series', 'Cartoon', 'Horror'];

let datasets = [];
const recordCount = 500;
for (let i = 0; i < recordCount; i++) {
    let item = {};
    item["id"] = i;
    item["name"] = "Title is " + _random(4) + " " + _random(3);
    item["channelName"] = "Channel " + _random(7);
    item["view"] = Math.floor((Math.random() * 10000) + 1) + " views";
    item["uploadTime"] = Math.floor((Math.random() * 10) + 1) + " months ago";
    item["category"] = categories[Math.floor(Math.random() * categories.length)];
    item["image"] = "images/" + thumbImages[Math.floor(Math.random() * thumbImages.length)];
    item["videoTime"] = Math.floor((Math.random() * 10) + 1) + ":" + Math.floor((Math.random() * 100) + 1);
    datasets.push(item);
}

function _random(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}
export default datasets;