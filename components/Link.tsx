import { FunctionComponent } from 'react'
import { Anchor } from 'grommet'
import { useRouter } from 'next/router'

type pProps = typeof Anchor.arguments;
type NewProps = pProps & { path?: String }

const Link: FunctionComponent<NewProps> = (Props) => {
  const {path, ...rest} = Props;
  const router = useRouter()

  const navigate = (e: any) => {
    e.preventDefault();
    router.push(path);
  }

  if (path) {
    rest.onClick = navigate;
  }
  return <Anchor {...rest} />
}

export default Link