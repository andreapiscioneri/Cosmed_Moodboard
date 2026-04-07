const FAVICON_LINK_ID = "denani-theme-favicon";
const FAVICON_URL = new URL("../../assets/Favicon.png", import.meta.url).href;

type FaviconMode = "light" | "dark";

function ensureFaviconLink() {
  let link = document.getElementById(FAVICON_LINK_ID) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.id = FAVICON_LINK_ID;
    link.rel = "icon";
    link.type = "image/png";
    document.head.appendChild(link);
  }
  return link;
}

function loadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.decoding = "async";
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error(`Unable to load favicon source: ${src}`));
    image.src = src;
  });
}

function findOpaqueBounds(imageData: ImageData) {
  const { data, width, height } = imageData;
  let left = width;
  let right = -1;
  let top = height;
  let bottom = -1;

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const alpha = data[(y * width + x) * 4 + 3];
      if (alpha > 8) {
        left = Math.min(left, x);
        right = Math.max(right, x);
        top = Math.min(top, y);
        bottom = Math.max(bottom, y);
      }
    }
  }

  if (right < left || bottom < top) {
    return null;
  }

  return { left, right, top, bottom };
}

async function buildFaviconDataUrl(mode: FaviconMode) {
  const image = await loadImage(FAVICON_URL);
  const sourceCanvas = document.createElement("canvas");
  sourceCanvas.width = image.naturalWidth;
  sourceCanvas.height = image.naturalHeight;

  const sourceContext = sourceCanvas.getContext("2d");
  if (!sourceContext) {
    throw new Error("Unable to get source canvas context for favicon.");
  }

  sourceContext.clearRect(0, 0, sourceCanvas.width, sourceCanvas.height);
  sourceContext.drawImage(image, 0, 0);

  const bounds = findOpaqueBounds(sourceContext.getImageData(0, 0, sourceCanvas.width, sourceCanvas.height));
  const crop = bounds ?? { left: 0, top: 0, right: sourceCanvas.width - 1, bottom: sourceCanvas.height - 1 };

  const cropWidth = crop.right - crop.left + 1;
  const cropHeight = crop.bottom - crop.top + 1;
  const outputSize = 64;
  const padding = 8;
  const maxDrawSize = outputSize - padding * 2;
  const scale = Math.min(maxDrawSize / cropWidth, maxDrawSize / cropHeight);
  const drawWidth = Math.max(1, Math.round(cropWidth * scale));
  const drawHeight = Math.max(1, Math.round(cropHeight * scale));

  const outputCanvas = document.createElement("canvas");
  outputCanvas.width = outputSize;
  outputCanvas.height = outputSize;

  const outputContext = outputCanvas.getContext("2d");
  if (!outputContext) {
    throw new Error("Unable to get output canvas context for favicon.");
  }

  outputContext.clearRect(0, 0, outputSize, outputSize);
  outputContext.imageSmoothingEnabled = true;
  outputContext.imageSmoothingQuality = "high";
  outputContext.filter = mode === "dark" ? "brightness(0) invert(1)" : "brightness(0)";
  outputContext.drawImage(
    image,
    crop.left,
    crop.top,
    cropWidth,
    cropHeight,
    Math.round((outputSize - drawWidth) / 2),
    Math.round((outputSize - drawHeight) / 2),
    drawWidth,
    drawHeight,
  );
  outputContext.filter = "none";

  return outputCanvas.toDataURL("image/png");
}

export function setupThemeFavicon() {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return () => undefined;
  }

  const link = ensureFaviconLink();
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  let requestToken = 0;

  const apply = () => {
    const token = ++requestToken;
    void buildFaviconDataUrl(mediaQuery.matches ? "dark" : "light")
      .then((href) => {
        if (token === requestToken) {
          link.href = href;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  apply();

  const onChange = () => apply();
  if (typeof mediaQuery.addEventListener === "function") {
    mediaQuery.addEventListener("change", onChange);
  } else {
    mediaQuery.addListener(onChange);
  }

  return () => {
    if (typeof mediaQuery.removeEventListener === "function") {
      mediaQuery.removeEventListener("change", onChange);
    } else {
      mediaQuery.removeListener(onChange);
    }
  };
}