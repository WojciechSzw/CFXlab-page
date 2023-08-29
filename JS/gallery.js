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
  document.getElementById("popupjpg").src = "images";
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
      console.log(FNavImgName);
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
      console.log(FNavImgName);
      for (let x = 13; x < slideShow.scrolling.length; x++) {
        if (slideShow.scrolling[x][1] === FNavImgName) {
          slideShow.openImg(x + 1);
        }
      }
    }
  },

  openImg(index) {
    if (slideShow.scrolling[index][0] === "popup-singleimg") {
      hideStack();
      const box = document.getElementById("popup-singleimg");
      const img = box.getElementsByTagName("img")[0];
      box.style.visibility = "visible";
      box.style.display = "flex";
      img.src =
        img.src.slice(0, img.src.indexOf("images")) +
        slideShow.scrolling[index][1];
      console.log(
        img.src.slice(0, img.src.indexOf("images")) +
          slideShow.scrolling[index][1]
      );
    } else if (slideShow.scrolling[index][0] === "popup-stackimg") {
      hidephoto();
      showStack(
        document.getElementsByClassName("photos-stack")[
          slideShow.scrolling[index][2]
        ]
      );
    }
  },
};
