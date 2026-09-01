import React from 'react'
import profile from "./image/atzo-pc.jpg"

const About = () => {
  return (
    // not nessary
    <div className='grid grid-cols-1 gap-10 [940px]:grid-cols-2'> 
      <div className="w-full">
        <h4 className="mt-3 text-3xl text-center font-bold tracking-tight text-blue-900">自己紹介</h4>
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 md:grid-cols-[1fr_280px] gap-8 mt-8 px-6 md:items-start">
            {/* Text */}
            <div className="w-full">
                <h5 className="text-xl font-bold tracking-tight text-blue-900">学歴</h5>
                <div className="mt-4">
                    <ul className='list-disc list-inside'>
                        <li>モン州立モーラミャイン第1基礎教育小学校（2004年6月 ~ 2008年4月）</li>
                        <li>モン州立モーラミャイン第11基礎教育高等学校（2008年6月 ~ 2015年4月）</li>
                        <li>モン州立モーラミャイン技術大学（2015年12月 ~ 2020年4月） ※5年目退学</li>
                    </ul>
                </div>
                <h5 className="text-xl font-bold tracking-tight text-blue-900 mt-6">資格</h5>
                <div className="mt-4">
                    <ul className='list-disc list-inside'>
                        <li>JLPT N3 試験合格（※N2の会話ができます）</li>
                        <li>ITPEC FE 試験合格</li>
                    </ul>
                </div>
                <p className='mb-6 mt-6 leading-7 text-gray-900'>QAエンジニアとして約3年間、テスト設計・実行、不具合管理、品質改善などの業務に携わってきました。<br />
                  現在はこれまでのQA経験を活かしながら、React、Node.js 、Express 、MongoDBを中心にWeb開発を学習しています。<br />
                  Reactでは、API連携や状態管理、コンポーネント設計などを意識しながら複数のWebアプリケーションを開発しました。<br />
                  QAとして培った「ユーザー視点で品質を考える力」と、Web開発で身につけた技術力を活かし、品質と使いやすさの両方を意識したWebエンジニアを目指しています。</p>
            </div>
            <div className="flex justify-center md:justify-end mt-6 mb-6"><img src={profile} alt="profile" className='w-64 h-80 object-contain m-4 p-1 rounded-xl' /></div>
        </div>
        
      </div>
    </div>
  )
}

export default About
