import React from 'react';

function TimerComponent(){
    const [base, setValue] = React.useState(7);
    console.log('컴포넌트 업데이트');
    function PlusTime(){
        setValue(base+1);
    }
    function MinusTime(){
        setValue(base-1);
    }
    React.useEffect(()=>{setValue(base+1)},[]);
    return (
        <div>
            <h3>결과 : {base}</h3>
            <button onClick = {MinusTime}> -1 </button>
            <button onClick = {PlusTime}> +1 </button>
        </div>
    );
}


export default TimerComponent;