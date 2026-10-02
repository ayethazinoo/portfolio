import React from 'react'
import profile from "./image/atzo-pc.jpg"

const About = () => {
  return (
    <div className="w-full mt-4 px-4">
          <h4 className="mt-3 text-3xl text-center font-bold text-slate-900">自己紹介</h4>
          <div className="container w-full mx-auto mt-10 mb-6">
            <div className="bg-slate-50 rounded-md shadow-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] mt-8 gap-6">
                <div className="w-full mx-4">
                    <h5 className="text-xl font-bold text-blue-800">学歴</h5>
                    <div className="mt-4">
                        <ul className='space-y-2 list-disc list-inside text-slate-800'>
                            <li>モン州立モーラミャイン第1基礎教育小学校（2004年6月 ~ 2008年4月）</li>
                            <li>モン州立モーラミャイン第11基礎教育高等学校（2008年6月 ~ 2015年4月）</li>
                            <li>モン州立モーラミャイン技術大学（2015年12月 ~ 2020年4月） ※5年目退学</li>
                        </ul>
                    </div>
                    <h5 className="text-xl font-bold text-blue-800 mt-6">資格</h5>
                    <div className="mt-4">
                        <ul className='space-y-2 list-disc list-inside text-slate-800'>
                            <li>JLPT N3 試験合格</li>
                            <li>ITPEC FE 試験合格</li>
                        </ul>
                    </div>
                    <div className="my-6 space-y-3 text-slate-800">
                      <p>React、JavaScript、Tailwind CSS、Node.js、Express.js、MongoDBを利用してレスポンシブWebアプリ開発の実務経験を持つWeb開発者です。</p>
                      <p>ユーザー認証、CRUD操作、API統合、ページネーション、レスポンシブUIデザインを特徴とするプロジェクトを開発してきました。</p>
                      <p>また、Webおよびモバイルアプリのテスト実施、テストケースの設計と検証に関する知識と経験を持つQAエンジニアとして3年以上の経験があります。</p>
                      <p>現在、開発スキル、QA経験、問題解決能力を活かし、品質と使いやすさの両方を意識したWebエンジニアを目指しています。</p>
                    </div>                  
                </div>
                <div className="flex justify-center md:justify-end p-4 me-6"><img src={profile} alt="profile" className='w-full h-64 object-cover rounded-xl' /></div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default About
