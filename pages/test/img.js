import vector from '../../public/images/compeArrow.png'
import Image from 'next/image'

export default function img() {
  return (
    <div>
        <Image src={vector} />
    </div>
  )
}
