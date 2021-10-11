type ImageProps = {
  src: string;
  width: number;
  height?: number;
}

function MyLoader({ src, width, height }: ImageProps) {
  const url = src.split('/')
  
  return `https://media.graphcms.com/resize=${height ? "height:" + height : ""}width:${width}/${url[3]}`
}

export default MyLoader;
