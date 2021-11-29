type ImageProps = {
  src: string;
  width: number;
  height?: number;
};

function MyLoader({ src, width, height }: ImageProps) {
  const extractImageId = /((?:\/[^\/\r\n]*){1})$/;
  const id = extractImageId.exec(src);

  return `https://media.graphcms.com/resize=${
    height ? "height:" + height : ""
  }width:${width}${id![0]}`;
}

export default MyLoader;
