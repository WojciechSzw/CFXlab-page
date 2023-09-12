function showPhoto(srcLOW) {
  photoLoader();
  const jpg = document.getElementById("popupjpg");
  let srcHigh = srcLOW.substring(srcLOW.indexOf("images"));
  srcHigh = srcHigh.replace("Low", "Full");
  jpg.src = srcHigh;

  const box = document.getElementById("popup-singleimg");
  box.style.visibility = "visible";
  box.style.display = "flex";
  if (
    srcLOW.slice(srcLOW.indexOf("images")) ===
    "images/gallery/main/gallery_1Low.jpg"
  ) {
    document.getElementById("leftArrow").style.visibility = "hidden";
  } else {
    document.getElementById("leftArrow").style.visibility = "visible";
  }
  jpg.onload = function () {
    closePhotoLoader();
    this.onload = null;
  };
}

function hidePhoto() {
  const box = document.getElementById("popup-singleimg");
  box.style.visibility = "hidden";
  box.style.display = "none";
  document.getElementById("popupjpg").src = "images";
}

function showStack(thumbnailStack) {
  photoLoader();
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
  if (thumbnailStack === document.getElementsByClassName("photos-stack")[7]) {
    document.getElementById("rightDoubleArrow").style.visibility = "hidden";
  } else {
    document.getElementById("rightDoubleArrow").style.visibility = "visible";
  }
  popupStack.children[0].onload = () => {
    closePhotoLoader();
  };
}

function hideStack() {
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

function photoLoader() {
  const loader = document.createElement("div");
  loader.classList.add("loader-box");
  loader.style.zIndex = "10";
  loader.style.height = "300px";
  loader.style.width = "300px";
  loader.style.position = "fixed";
  loader.style.top = "0";
  loader.style.backgroundColor = "red";
  document.querySelector("body").appendChild(loader);
}
function closePhotoLoader() {
  const loaderToDel = document.querySelector("body .loader-box");
  document.querySelector("body").removeChild(loaderToDel);
}

function changeFullResImg(navImgSrc) {
  photoLoader();
  document.getElementById("popupjpgFromStack").src = navImgSrc.replace(
    "Low",
    "Full"
  );
  document.getElementById("popupjpgFromStack").onload = () => {
    closePhotoLoader();
  };
}

const slideShow = {
  scrolling: [
    ["popup-singleimg", "images/gallery/main/gallery_1Full.jpg"],
    ["popup-singleimg", "images/gallery/main/gallery_2Full.jpg"],
    ["popup-singleimg", "images/gallery/main/gallery_3Full.jpg"],
    ["popup-singleimg", "images/gallery/main/gallery_4Full.jpg"],
    ["popup-singleimg", "images/gallery/main/gallery_5Full.jpg"],
    ["popup-singleimg", "images/gallery/main/gallery_6Full.jpg"],
    ["popup-singleimg", "images/gallery/main/gallery_7Full.jpg"],
    ["popup-singleimg", "images/gallery/main/gallery_8Full.jpg"],
    ["popup-singleimg", "images/gallery/cyrkon/cyrkon_1Full.jpg"],
    ["popup-singleimg", "images/gallery/cyrkon/cyrkon_2Full.jpg"],
    ["popup-singleimg", "images/gallery/cyrkon/cyrkon_3Full.jpg"],
    ["popup-singleimg", "images/gallery/cyrkon/cyrkon_4Full.jpg"],
    ["popup-singleimg", "images/gallery/cyrkon/cyrkon_5Full.jpg"],
    ["popup-singleimg", "images/gallery/na_metalu/nametalu_1Full.jpg"],
    ["popup-singleimg", "images/gallery/na_metalu/nametalu_2Full.jpg"],
    ["popup-stackimg", "images/gallery/licowki/licowki_1.1Low.jpg", 0],
    ["popup-stackimg", "images/gallery/licowki/licowki_2.1Low.jpg", 1],
    ["popup-singleimg", "images/gallery/all_on/allon_1Full.jpg"],
    ["popup-singleimg", "images/gallery/all_on/allon_2Full.jpg"],
    ["popup-singleimg", "images/gallery/all_on/allon_3Full.jpg"],
    ["popup-singleimg", "images/gallery/all_on/allon_4Full.jpg"],
    ["popup-singleimg", "images/gallery/all_on/allon_5Full.jpg"],
    ["popup-singleimg", "images/gallery/all_on/allon_6Full.jpg"],
    ["popup-stackimg", "images/gallery/E-Lab/eLAB_1.1Low.jpg", 2],
    ["popup-stackimg", "images/gallery/E-Lab/eLAB_2.1Low.jpg", 3],
    ["popup-stackimg", "images/gallery/E-Lab/eLAB_3.1Low.jpg", 4],
    ["popup-stackimg", "images/gallery/metamorfozy/metamorfozy_1.1Low.jpg", 5],
    ["popup-stackimg", "images/gallery/metamorfozy/metamorfozy_2.1Low.jpg", 6],
    ["popup-stackimg", "images/gallery/metamorfozy/metamorfozy_3.1Low.jpg", 7],
  ],
  scrollLeft(popup) {
    if (popup.id === "popup-singleimg") {
      const mainImg = popup.getElementsByTagName("img")[0];
      const indexImgName = mainImg.src.indexOf("images");
      const ImgName = mainImg.src.slice(indexImgName);

      for (let x = 0; x < slideShow.scrolling.length; x++) {
        if (slideShow.scrolling[x][1] === ImgName) {
          slideShow.openImg(x - 1);
        }
      }
    } else if (popup.id === "popup-stackimg") {
      const firstNavigationImg =
        document.getElementById("navigation_Stack").children[0];

      const indexFNavImgName = firstNavigationImg.src.indexOf("images");
      const FNavImgName = firstNavigationImg.src.slice(indexFNavImgName);
      for (let x = 13; x < slideShow.scrolling.length; x++) {
        if (slideShow.scrolling[x][1] === FNavImgName) {
          slideShow.openImg(x - 1);
        }
      }
    }
  },

  scrollRight(popup) {
    if (popup.id === "popup-singleimg") {
      const mainImg = popup.getElementsByTagName("img")[0];
      const indexImgName = mainImg.src.indexOf("images");
      const ImgName = mainImg.src.slice(indexImgName);

      for (let x = 0; x < slideShow.scrolling.length; x++) {
        if (slideShow.scrolling[x][1] === ImgName) {
          slideShow.openImg(x + 1);
        }
      }
    } else if (popup.id === "popup-stackimg") {
      const firstNavigationImg =
        document.getElementById("navigation_Stack").children[0];
      const indexFNavImgName = firstNavigationImg.src.indexOf("images");
      const FNavImgName = firstNavigationImg.src.slice(indexFNavImgName);
      for (let x = 13; x < slideShow.scrolling.length; x++) {
        if (slideShow.scrolling[x][1] === FNavImgName) {
          slideShow.openImg(x + 1);
        }
      }
    }
  },

  openImg(index) {
    if (index === -1 || index === slideShow.scrolling.length) return;
    if (slideShow.scrolling[index][0] === "popup-singleimg") {
      hideStack();
      photoLoader();
      const box = document.getElementById("popup-singleimg");
      const img = box.getElementsByTagName("img")[0];
      box.style.visibility = "visible";
      box.style.display = "flex";
      img.src =
        img.src.slice(0, img.src.indexOf("images")) +
        slideShow.scrolling[index][1];
      if (index === 0) {
        document.getElementById("leftArrow").style.visibility = "hidden";
      } else {
        document.getElementById("leftArrow").style.visibility = "visible";
      }
      img.onload = () => {
        closePhotoLoader();
      };
    } else if (slideShow.scrolling[index][0] === "popup-stackimg") {
      hideStack();
      hidePhoto();
      showStack(
        document.getElementsByClassName("photos-stack")[
          slideShow.scrolling[index][2]
        ]
      );
    }
  },
};

document.onkeydown = function (event) {
  const stack = document.getElementById("popup-stackimg");
  const single = document.getElementById("popup-singleimg");
  let popup = "";
  if (stack.style.visibility === "visible") {
    popup = "popup-stackimg";
  } else if (single.style.visibility === "visible") {
    popup = "popup-singleimg";
  } else {
    return;
  }

  switch (event.key) {
    case "ArrowLeft":
      slideShow.scrollLeft(document.getElementById(popup));
      break;
    case "ArrowRight":
      slideShow.scrollRight(document.getElementById(popup));
      break;
    default:
  }
};
