import React from 'react'
import miniCalculator from "./image/calculator.png"
import movieList from "./image/movie-channel.png"
import weatherApp from "./image/weather-app.png"
import todoList from "./image/todo-list.png"

const Project = () => {
  return (
    <div className='w-full mt-10'>
      <h4 className="text-3xl text-center font-bold tracking-tight text-blue-900">プロジェクト</h4>
      <div className="container mx-auto mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 m-3">            
            <div className="w-full max-w-sm p-4 flex flex-col">  
                <div className="flex justify-center mb-3">
                    <img class="w-64 h-64 rounded-lg" src={movieList} alt="htmlPic"></img>
                </div>              
                <h5 className="my-4 block text-xl font-bold text-blue-900">
                    Movieアプリ
                </h5>
                <p className="font-normal text-gray-900 leading-7">
                    Reactを使用したMovieアプリです。<br />
                    Redux Toolkitでアプリの状態を管理し、Axiosを使用してTMDB APIから映画情報を取得しています。<br />
                    useEffectでAPI通信を行い、useDispatchとuseSelectorを使用して取得したデータの管理・表示を実装しました。<br />
                    React Routerによるページルーティングにも対応しており、上映中の映画一覧、映画の検索、映画の詳細情報を確認できる機能を実装しています。
                </p>
                <div className="gap-5 grid grid-cols-2 mt-auto">
                    <a href="https://drive.google.com/file/d/18dOhytXv8OFAHU7rgsFTO2KCkScWSWpX/view?usp=drive_link"  target="_blank" rel="noopener noreferrer" className="text-lg text-center shadow-md bg-blue-200 text-blue-900 font-semibold rounded-md py-2 mt-4">Demo</a>
                    <a href="https://github.com/ayethazinoo/movie-app.git"  target="_blank" rel="noopener noreferrer" className="text-lg text-center shadow-md bg-blue-200 text-blue-900 font-semibold rounded-md py-2 mt-4">GitHub</a>
                </div>                
            </div>
            <div className="w-full max-w-sm p-4 flex flex-col">  
                <div className="flex justify-center mb-3">
                    <img class="w-64 h-64 rounded-lg" src={weatherApp} alt="htmlPic"></img>
                </div>              
                <h5 className="my-4 block text-xl font-bold text-blue-900">
                    天気アプリ
                </h5>
                <p className="font-normal text-gray-900 leading-7">
                    Pure Bootstrap CSS と React Icons（react-icons） を使用して、シンプルな天気予報アプリです。<br />
                    OpenWeather API から天気情報を取得し、取得したデータを JSON 形式で扱えるように整理しています。<br />
                    React の useState と useEffect を使用して API データを管理し、Props を通して各コンポーネントへデータを渡して、天気情報を一覧表示しています。
                </p>
                <div className="gap-5 grid grid-cols-2 mt-auto">
                    <a href="https://drive.google.com/file/d/1bYXMJ_h78gxfWpxX7kGiINkkyk8g2MH0/view?usp=drive_link"  target="_blank" rel="noopener noreferrer" className="text-lg text-center shadow-md bg-blue-200 text-blue-900 font-semibold rounded-md py-2 mt-4">Demo</a>
                    <a href="https://github.com/ayethazinoo/weather-app.git"  target="_blank" rel="noopener noreferrer" className="text-lg text-center shadow-md bg-blue-200 text-blue-900 font-semibold rounded-md py-2 mt-4">GitHub</a>
                </div>                
            </div>
            <div className="w-full max-w-sm p-4 flex flex-col">  
                <div className="flex justify-center mb-3">
                    <img class="w-64 h-64 rounded-lg" src={todoList} alt="htmlPic"></img>
                </div>              
                <h5 className="my-4 block text-xl font-bold text-blue-900">
                    Todoアプリ
                </h5>
                <p className="font-normal text-gray-900 leading-7">
                    Reactを使用して開発したTodoアプリです。<br />
                    データ管理にはJSON Serverを利用し、簡易的なデータベースを作成しました。<br />
                    データベース内のIDが重複しないように、react-uuidパッケージを使用して一意なIDを生成しています。<br />
                    Axiosを使用してAPIからデータを取得し、タスクの追加・編集・削除ができるように実装しました。
                </p>
                <div className="gap-5 grid grid-cols-2 mt-auto">
                    <a href="https://drive.google.com/file/d/1wEI1i2LipusSrAbSTL81BreX6DR2j6sl/view?usp=drive_link"  target="_blank" rel="noopener noreferrer" className="text-lg text-center shadow-md bg-blue-200 text-blue-900 font-semibold rounded-md py-2 mt-4">Demo</a>
                    <a href="https://github.com/ayethazinoo/todo-list.git"  target="_blank" rel="noopener noreferrer" className="text-lg text-center shadow-md bg-blue-200 text-blue-900 font-semibold rounded-md py-2 mt-4">GitHub</a>
                </div>                
            </div>
            <div className="w-full max-w-sm p-4 flex flex-col">  
                <div className="flex justify-center mb-3">
                    <img class="w-64 h-64 rounded-lg" src={miniCalculator} alt="htmlPic"></img>
                    
                </div>              
                <h5 className="my-4 block text-xl font-bold text-blue-900">
                    電卓アプリ
                </h5>
                <p className="font-normal text-gray-900 leading-7">
                    Reactを使用して開発したシンプルな電卓アプリです。<br />
                    useStateとPropsを活用して、計算結果や入力データを管理しています。<br />
                    加算、減算、乗算、除算などの基本的な計算機能を実装しました。
                </p>
                <div className="gap-5 grid grid-cols-2 mt-auto">
                    <a href="https://drive.google.com/file/d/1lUAIGK8r1msqtJzhzGvTUEAX3iMkpiu_/view?usp=drive_link"  target="_blank" rel="noopener noreferrer" className="text-lg text-center shadow-md bg-blue-200 text-blue-900 font-semibold rounded-md py-2 mt-4">Demo</a>
                    <a href="https://github.com/ayethazinoo/mini-calculator.git"  target="_blank" rel="noopener noreferrer" className="text-lg text-center shadow-md bg-blue-200 text-blue-900 font-semibold rounded-md py-2 mt-4">GitHub</a>
                </div>                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Project
