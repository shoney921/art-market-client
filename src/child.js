function ChildComponent(props){
    // const {name, age} = props 
    const name = props.name;
    const age = props.age;
    const car = props.car;
    return <div>
        <p>자식 컴포넌트 : 이름은 {name}이며 {age}살입니다. {car} </p>
        </div>
}

export default ChildComponent;
