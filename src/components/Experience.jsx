import React from 'react'
import qaLogo from "./image/QA-logo.jpg";

const Experience = () => {
  return (
        <div className="w-full px-4 mt-10">
            <h4 className="text-3xl text-center font-bold text-slate-900">
                職務経歴
            </h4>
            <div className="container mx-auto mt-6 items-center">
                <div className="bg-slate-50 rounded-md shadow-lg p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-20 items-center">
                        <div className="w-full items-center my-6 gap-10">
                            <img src={qaLogo} alt="qaLogo" className='w-full h-64 object-contain m-4 p-1 rounded-xl'/>
                        </div>
                        <div className="w-full mt-6 p-1">
                            <div className="">
                                <h5 className="text-xl font-bold text-blue-800">Web開発の学習</h5>
                                <div className="mt-4">
                                    <ul className='space-y-2 list-disc list-inside text-slate-800'>
                                        <li>HTML5、CSS3、JavaScript（ES6）、Reactを学習し、レスポンシブなWebページやWebアプリケーションの開発を行っています</li>
                                        <li>Reactを使用したCRUD機能やAPI連携、データの取得・表示、フォーム処理などを実装しています。</li>
                                        <li>Node.js、Express、MongoDBを学習し、バックエンドのAPI開発やデータベースとの連携についても実践しています。</li>
                                        <li>Nodemailerを使用したメール送信機能など、フロントエンドからバックエンドまで一連の処理を実装しています。</li>
                                        <li>Git・GitHubを使用したバージョン管理やブランチ管理の基本操作を実践しながら学習しています。</li>                        
                                    </ul>
                                </div>
                            </div>
                            <div className="">
                                <h5 className="mt-4 text-xl font-bold text-blue-800">QA エンジニア (2022年2月 ~ 2025年9月)</h5>
                                <div className="mt-4">
                                    <ul className='space-y-2 list-disc list-inside text-slate-800'>
                                        <li>STG環境およびDev環境にて、検証テストおよびランダムテストを実施しました。</li>
                                        <li>不具合の検出、原因調査、報告、修正確認まで一連の対応を行いました。</li>
                                        <li>テストケースおよびテスト設計の作成も担当しました。</li>
                                        <li>機能仕様に関する検討会議に参加し、社内のDirectorとの調整ややり取りを行いました。</li>
                                        <li>メンバーのアサイン調整や、テストの進捗管理も担当しました。</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="">
                                <h5 className="mt-4 text-xl font-bold text-blue-800">テストケース例</h5>
                                <div className="mt-4">
                                    <ul className='space-y-2 list-disc list-inside text-lg text-blue-700 underline underline-offset-4 hover:text-blue-900 transition duration-200'>
                                        <li><a href="https://docs.google.com/spreadsheets/d/1eaNdfYjENz8KOgFWmI4jshpxcFANsJY81mYK0FLtBA0/edit?gid=0#gid=0"  target="_blank" rel="noopener noreferrer" >全員登録</a></li>
                                        <li><a href="https://docs.google.com/spreadsheets/d/1eaNdfYjENz8KOgFWmI4jshpxcFANsJY81mYK0FLtBA0/edit?gid=714718491#gid=714718491"  target="_blank" rel="noopener noreferrer" >CRUD</a></li>                            
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

            </div>         
        </div>
  )
}

export default Experience
