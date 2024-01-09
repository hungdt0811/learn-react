import React from "react";

const Hello1 = () => {
    return React.createElement(
        'div',
        {id: "hello", className: "helloClass"}, 
        React.createElement('h1', null,  'Hello Guys'))
}

const Hello2 = () => {
    return  <div id="hello" className="helloClass">
                <h1>Hello Guys</h1>
            </div>
}

export { Hello1, Hello2 };