import React from 'react'
import miniCalculator from "./image/calculator.png"
import movieList from "./image/movie-channel.png"
import weatherApp from "./image/weather-app.png"
import todoList from "./image/todo-list.png"
import tasksManagement from "./image/tasks_management.png"
import newsMedia from "./image/news_media.png"

const Project = () => {
  return (
    <div className='w-full mt-10'>
      <h4 className="text-3xl text-center font-bold text-slate-900">プロジェクト</h4>
      <div className="container mx-auto mt-6">
        <div className="bg-slate-50 rounded-md shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-3">
                <div className="w-full max-w-sm p-4 flex flex-col">  
                    <div className="flex justify-center mb-3">
                        <img className="w-full h-52 object-cover rounded-lg" src={tasksManagement} alt="taskManagement"></img>
                    </div>              
                    <h5 className="my-4 text-xl font-bold text-blue-800">
                        Tasks Management
                    </h5>
                    <p className="font-normal text-slate-800 leading-7">
                        React・Node.js・Express・MongoDBを使用して開発した、ユーザー認証機能付きのタスク管理Webアプリケーションです。<br />
                        ユーザー登録・ログイン後、タスクの作成・編集・削除ができ、タスクのステータスに応じて各カラムにタスクと件数が表示されます。また、ドラッグ＆ドロップによってタスクのステータスを直感的に変更できます。<br />
                        各タスクには、タスク名・概要・作成日などの情報を表示しています。
                    </p>
                    <div className="gap-5 grid grid-cols-2 mt-auto">
                        <a href="https://drive.google.com/file/d/1CjxOOJ6xcTdzW8GlSFHex0BOdhW5nom_/view?usp=sharing"  target="_blank" rel="noopener noreferrer" className="text-lg text-center shadow-md bg-blue-700 text-white font-semibold rounded-md py-2 mt-4">Demo</a>
                        <a href="https://github.com/ayethazinoo/task_management.git"  target="_blank" rel="noopener noreferrer" className="text-lg text-center shadow-md bg-blue-700 text-white font-semibold rounded-md py-2 mt-4">GitHub</a>
                    </div>                
                </div>
                <div className="w-full max-w-sm p-4 flex flex-col">  
                    <div className="flex justify-center mb-3">
                        <img className="w-full h-52 object-contain rounded-lg" src={newsMedia} alt="newsMedia"></img>
                    </div>              
                    <h5 className="my-4 text-xl font-bold text-blue-800">
                        News_Media
                    </h5>
                    <p className="font-normal text-slate-800 leading-7">
                        React、Node.js、Express、MongoDBを使用して開発した、ニュースメディアWebアプリケーションです。<br />
                        ユーザー登録・ログイン機能を実装し、ニュースの作成・詳細閲覧・編集・削除ができます。<br />
                        ページネーションを実装し、1ページに5件のニュースを表示することで、ニュースを効率的に閲覧できるようにしています。<br />
                        各ニュースには、タイトル・概要・著者・タイプ・作成日などの情報を表示しています。
                    </p>
                    <div className="gap-5 grid grid-cols-2 mt-auto">
                        <a href="https://drive.google.com/file/d/1SLUI88jngAQFKuyednUB_DAY_wh6G4ek/view?usp=drive_link"  target="_blank" rel="noopener noreferrer" className="text-lg text-center shadow-md bg-blue-700 text-white font-semibold rounded-md py-2 mt-4">Demo</a>
                        <a href="https://github.com/ayethazinoo/news-media.git"  target="_blank" rel="noopener noreferrer" className="text-lg text-center shadow-md bg-blue-700 text-white font-semibold rounded-md py-2 mt-4">GitHub</a>
                    </div>                
                </div>           
                <div className="w-full max-w-sm p-4 flex flex-col">  
                    <div className="flex justify-center mb-3">
                        <img className="w-full h-52 object-cover rounded-lg" src={movieList} alt="movieList"></img>
                    </div>              
                    <h5 className="my-4 text-xl font-bold text-blue-800">
                        Movieアプリ
                    </h5>
                    <p className="font-normal text-slate-800 leading-7">
                        React・Tailwind CSSとTMDB APIを使用して開発した、映画情報を閲覧できるWebアプリケーションです。<br />                    
                        TMDB APIから映画情報を取得し、上映中の映画一覧や映画の検索、映画の詳細情報を確認できる機能を実装しています。<br />
                        映画の概要・ポスター・評価・公開日などを表示し、レスポンシブデザインにも対応しています。<br />
                        Redux Toolkitを使用してアプリの状態を管理し、AxiosによるAPI通信、React Routerによるページルーティングを実装しています。
                    </p>
                    <div className="gap-5 grid grid-cols-2 mt-auto">
                        <a href="https://drive.google.com/file/d/18dOhytXv8OFAHU7rgsFTO2KCkScWSWpX/view?usp=drive_link"  target="_blank" rel="noopener noreferrer" className="text-lg text-center shadow-md bg-blue-700 text-white font-semibold rounded-md py-2 mt-4">Demo</a>
                        <a href="https://github.com/ayethazinoo/movie-app.git"  target="_blank" rel="noopener noreferrer" className="text-lg text-center shadow-md bg-blue-700 text-white font-semibold rounded-md py-2 mt-4">GitHub</a>
                    </div>                
                </div>
                <div className="w-full max-w-sm p-4 flex flex-col">  
                    <div className="flex justify-center mb-3">
                        <img className="w-full h-52 object-cover rounded-lg" src={weatherApp} alt="weatherApp"></img>
                    </div>              
                    <h5 className="my-4 text-xl font-bold text-blue-800">
                        天気アプリ
                    </h5>
                    <p className="font-normal text-slate-800 leading-7">
                        Reactを使用して開発した、シンプルでレスポンシブな天気情報Webアプリケーションです。<br />
                        任意の都市を検索すると、OpenWeather APIから天気情報を取得し、取得したデータをもとに天気情報を表示しています。<br />
                        天気情報には、現在の気温・天気状況・天気アイコン・湿度・視程などを表示しています。
                    </p>
                    <div className="gap-5 grid grid-cols-2 mt-auto">
                        <a href="https://drive.google.com/file/d/1bYXMJ_h78gxfWpxX7kGiINkkyk8g2MH0/view?usp=drive_link"  target="_blank" rel="noopener noreferrer" className="text-lg text-center shadow-md bg-blue-700 text-white font-semibold rounded-md py-2 mt-4">Demo</a>
                        <a href="https://github.com/ayethazinoo/weather-app.git"  target="_blank" rel="noopener noreferrer" className="text-lg text-center shadow-md bg-blue-700 text-white font-semibold rounded-md py-2 mt-4">GitHub</a>
                    </div>                
                </div>
                <div className="w-full max-w-sm p-4 flex flex-col">  
                    <div className="flex justify-center mb-3">
                        <img className="w-full h-52 object-cover rounded-lg" src={todoList} alt="todoList"></img>
                    </div>              
                    <h5 className="my-4 text-xl font-bold text-blue-800">
                        Todoアプリ
                    </h5>
                    <p className="font-normal text-slate-800 leading-7">
                        Reactを使用して開発したTodoアプリケーションです。<br />
                        タスクの追加・編集・削除ができ、Axiosを使用してJSON Serverとデータの取得・更新を行っています。<br />
                        ReactのuseStateを使用したデータ管理や、コンポーネント間のPropsによるデータ受け渡しを実装しています。
                    </p>
                    <div className="gap-5 grid grid-cols-2 mt-auto">
                        <a href="https://drive.google.com/file/d/1wEI1i2LipusSrAbSTL81BreX6DR2j6sl/view?usp=drive_link"  target="_blank" rel="noopener noreferrer" className="text-lg text-center shadow-md bg-blue-700 text-white font-semibold rounded-md py-2 mt-4">Demo</a>
                        <a href="https://github.com/ayethazinoo/todo-list.git"  target="_blank" rel="noopener noreferrer" className="text-lg text-center shadow-md bg-blue-700 text-white font-semibold rounded-md py-2 mt-4">GitHub</a>
                    </div>                
                </div>
                <div className="w-full max-w-sm p-4 flex flex-col">  
                    <div className="flex justify-center mb-3">
                        <img className="w-full h-52 object-cover rounded-lg" src={miniCalculator} alt="miniCalculator"></img>
                        
                    </div>              
                    <h5 className="my-4 text-xl font-bold text-blue-800">
                        電卓アプリ
                    </h5>
                    <p className="font-normal text-slate-800 leading-7">
                        Reactを使用して開発した、シンプルな電卓Webアプリケーションです。<br />
                        加算・減算・乗算・除算などの基本的な計算ができ、入力した数値や計算結果を画面に表示します。
                    </p>
                    <div className="gap-5 grid grid-cols-2 mt-auto">
                        <a href="https://drive.google.com/file/d/1lUAIGK8r1msqtJzhzGvTUEAX3iMkpiu_/view?usp=drive_link"  target="_blank" rel="noopener noreferrer" className="text-lg text-center shadow-md bg-blue-700 text-white font-semibold rounded-md py-2 mt-4">Demo</a>
                        <a href="https://github.com/ayethazinoo/mini-calculator.git"  target="_blank" rel="noopener noreferrer" className="text-lg text-center shadow-md bg-blue-700 text-white font-semibold rounded-md py-2 mt-4">GitHub</a>
                    </div>                
                </div>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Project
