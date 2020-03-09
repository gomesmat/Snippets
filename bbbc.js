let vai = async () => {
    btVH = await document.getElementsByClassName("_1qOhvoo3qF13WGLsgXWiRn");
    btVH[2].click();
    setTimeout(async() => {
        btVoltar = await document.getElementsByClassName("_3QLPDW1iykGM1e6tm04qJd _1iMqGq8UKv9W1nDF0AvZbu");
        btVoltar[0].click();
    }, 2000);  
    setTimeout(() => { vai() }, 1000)
}
vai()
