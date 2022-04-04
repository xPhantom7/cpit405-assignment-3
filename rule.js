let obj = { name: "CPIT 405 - Sorting Pictures" }
let h1Elem = document.createElement("h1");
h1Elem.innerText = obj.name;
document.body.append(h1Elem);
document.write("After Sorting (Based on # of likes):");
document.write("<br> <br>");

// sorting and displaying images
let likes;
let images = [
    { name: 'gmc', likes: 9, url: 'https://s3.eu-central-1.amazonaws.com/v3-ncg.motory.com/vehicle-new/l-1623650676.5392-60c6f17483a19.webp' },
    { name: 'sport', likes: 2, url: 'https://squir.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/g/e/generic_vette_c7_0000.jpg' },
    { name: 'kai', likes: 5, url: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Seltos/6226/1619864569028/front-left-side-47.jpg?impolicy=resize&imwidth=480' },
    { name: 'nissan', likes: 7, url: 'https://i.pinimg.com/736x/37/6e/89/376e89d64eeb50e185ec71c5668378a7--nissan-sports-cars-hd-picture.jpg' }
];

// Sort the array of images
images.sort(compare);


function compare(a, b) {

    if (parseInt(a.likes)  < parseInt(b.likes)) {
        return -1;
    }
    else if (parseInt(a.likes) > parseInt(b.likes)) {
        return 1;
    }
    else {
        return 0;
    }
}
for (imageItem of images) {
    let imgElem = document.createElement("img");
    imgElem.src = imageItem.url;
    imgElem.height = 300;
    imgElem.width = 300;
    document.body.append(imgElem);
    
    
}