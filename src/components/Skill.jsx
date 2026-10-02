import React from 'react'


const Skill = () => {
  return (
    <div>
        <div className="w-full mt-6 px-4">
            <h4 className="text-3xl text-center font-bold text-slate-900">
                スキル
            </h4>
            <div className="container w-full mx-auto mt-10 mb-6">
                <div className="bg-slate-50 rounded-md shadow-lg p-6">
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-6 justify-center items-start">
                        <div className="frontend p-4">
                            <h5 className='text-xl font-bold text-blue-800 mb-3'>Frontend</h5>
                            <ul className='list-disc list-inside text-slate-800 text-lg space-y-2'>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Tailwind CSS</li>
                                <li>JavaScript (ES6+)</li>
                                <li>React</li>
                            </ul>
                        </div>
                        <div className="backend p-4">
                            <h5 className='text-xl font-bold text-blue-800 mb-3'>Backend</h5>
                            <ul className='list-disc list-inside text-slate-800 text-lg space-y-2'>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>Mongo Atlas</li>
                            </ul>
                        </div>
                        <div className="tools p-4">
                            <h5 className='text-xl font-bold text-blue-800 mb-3'>Tools</h5>
                            <ul className='list-disc list-inside text-slate-800 text-lg space-y-2'>
                                <li>Git & GitHub</li>
                                <li>VS code</li>
                                <li>Figma</li>
                                <li>Slack</li>
                                <li>Microsoft Teams</li>
                            </ul>
                        </div>                    
                    </div>
                </div>
                
            </div>
        </div>
        
    </div>
    
  )
}

export default Skill
