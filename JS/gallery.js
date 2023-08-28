function showPhoto(srcLOW) {
  const jpg = document.getElementById("popupjpg");
  let srcHigh = srcLOW.substring(srcLOW.indexOf("images"));
  srcHigh = srcHigh.replace("Low", "Full");
  jpg.src = srcHigh;
  const box = document.getElementById("popup-singleimg");
  box.style.visibility = "visible";
  box.style.display = "flex";
}

function hidephoto() {
  const box = document.getElementById("popup-singleimg");
  box.style.visibility = "hidden";
  box.style.display = "none";
  document.getElementById("popupjpg").src = "";
}

function showStack(thumbnailStack) {
  const popupStack = document.getElementById("popup-stackimg");
  const navigationStack = document.getElementById("navigation_Stack");

  popupStack.style.visibility = "visible";
  popupStack.style.display = "flex";
  popupStack.children[0].src = thumbnailStack.children[0].src.replace(
    "Low",
    "Full"
  );
  let j = thumbnailStack.childElementCount - 1;
  for (let i = 0; i < thumbnailStack.childElementCount; i++) {
    const child = navigationStack.children[i];
    child.src = thumbnailStack.children[j].src;
    child.style.visibility = "visible";
    child.style.display = "block";
    child.style.maxWidth =
      "calc(" + 100 / thumbnailStack.childElementCount + "%" + " - 5px)";
    j--;
  }
}

function changeFullResImg(navImgSrc) {
  document.getElementById("popupjpgFromStack").src = navImgSrc.replace(
    "Low",
    "Full"
  );
}

function hideStack(event) {
  const box = document.getElementById("popup-stackimg");
  box.style.visibility = "hidden";
  box.style.display = "none";

  const navigationStack = document.getElementById("navigation_Stack");
  for (let i = 0; i < navigationStack.childElementCount; i++) {
    const child = navigationStack.children[i];
    child.style.visibility = "hidden";
    child.style.display = "none";
  }

  document.getElementById("popup-stackimg").children[0].src = "";
}

const scrolling = [
  ["popup-singleimg", "images/gallery/main/gallery_1Full.jpg"],
  ["popup-singleimg", "images/gallery/main/gallery_2Full.jpg"],
  ["popup-singleimg", "images/gallery/main/gallery_3Full.jpg"],
  ["popup-singleimg", "images/gallery/main/gallery_4Full.jpg"],
  ["popup-singleimg", "images/gallery/main/gallery_5Full.jpg"],
  ["popup-singleimg", "images/gallery/main/gallery_6Full.jpg"],
  ["popup-singleimg", "images/gallery/main/gallery_7Full.jpg"],
  ["popup-singleimg", "images/gallery/main/gallery_8Full.jpg"],
];

const slideShow = {
  scrollRight(popup) {
    if (popup.id === "popup-singleimg") {
      const mainImg = popup.getElementsByTagName("img")[0];
      const indexImgName = mainImg.src.indexOf("images");
      const ImgName = mainImg.src.slice(indexImgName);
      console.log("img name: " + ImgName);
      for (let x = 0; x < scrolling.length; x++) {
        if (scrolling[x][1] === ImgName) {
          slideShow.openNextImg(x + 1);
        }
      }
    }
  },

  openNextImg(index) {
    if (scrolling[index][0] === "popup-singleimg") {
      const box = document.getElementById("popup-singleimg");
      const img = box.getElementsByTagName("img")[0];
      img.src =
        img.src.slice(0, img.src.indexOf("images")) + scrolling[index][1];
      box.style.visibility = "visible";
      box.style.display = "flex";
      console.log(
        "next img: " +
          imgSrc.slice(0, imgSrc.indexOf("images")) +
          scrolling[index][1]
      );
    }
  },
};
