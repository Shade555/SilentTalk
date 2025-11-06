import React from 'react'
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-half h-half relative">
        <div className="xl:w-[598px] xl:h-[598px] w-[398px] h-[298px]">
            <Image
            src="/asset/HeroPage.png"
            priority
            quality={100}
            fill
            className="object-contain"
            alt=""
            />
        </div>
    </div>
  )
}

export default Photo