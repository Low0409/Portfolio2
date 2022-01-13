import React from 'react'
import Image from 'next/dist/client/image'
const Photoshop = () => {
    return (
        <div>
          <h2 className="text-2xl font-bold bg-gray-500 shadow-sm text-white p-3">・バナーデザイン</h2>

            <a href="https://king.kcg.kyoto/campus/Secure/Login.aspx?ReturnUrl=%2Fcampus%2FPortal%2FHome"><Image
                src="/king.png"
                alt="king-lms"
                width={1902 / 1}
                height={931 / 1}
            /></a>

            <p>※Next.jsの特性上画像はWebpに変換されるため若干画質は落ちています</p>

        </div>
    )
}

export default Photoshop
