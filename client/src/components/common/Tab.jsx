import React from 'react'

const Tab = ({tabData,currentState,setCurrentState,setPassedFromSignup}) => {
  return (
    <div style={{
        boxShadow:"inset 0px -1px 0px rgba(255,255,255,0.18)"
    }}
    className={`flex bg-richblack-800 p-1 gap-x-1 rounded-full max-w-max text-white 
    
    `}
    >
        {
            tabData?.map((tab)=>(
                <button key={tab?.id}
                onClick={()=>{setCurrentState(tab?.tabName);setPassedFromSignup(true);}}
                className={`${
                    currentState===tab?.tabName
                    ?"bg-richblack-900 text-richblack-5"
                    :"bg-transparent text-richblack-200"
                }py-0 px-5 rounded-full transition-all duration-200 p-4`}
                >
                    {tab?.tabName}
                </button>
            ))
        }
    </div>
  )
}

export default Tab