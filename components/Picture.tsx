import { useState, useEffect, CSSProperties } from "react";
import { getImage } from "../utils/firebase";

interface Props {
  src?: string,
  fbpath?: string,
  style?: CSSProperties
}

const Picture: React.FunctionComponent<Props> = (props) => {

  const { style, src, fbpath } = props;
  const [url, setImg] = useState('');

  if (src) setImg(`url(${src})`);

  useEffect(() => {
    (async () => {
      if (fbpath) {
        const img = await getImage(fbpath);
        setImg(`url(${img}`);
      }
    })()
            
  }, []);

  return (
    <div className="image-container" style={{...style, backgroundImage: url}}>
    </div>
  )

}

export default Picture