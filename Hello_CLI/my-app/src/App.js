// 创建外壳组件 App 
import React from 'react' 

class App extends React.Component{ 
    render(){
        return(
            <div>  
                Hello CLI !!!  
            </div>
        )
    }

}

// 如果不暴露, 就无法在 index.js 中引入

export default App