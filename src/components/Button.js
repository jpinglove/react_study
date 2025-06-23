
import React ,{useState} from "react";

function Button(){
    const [count, setCount] = useState(41);

    const handleClick = () => {
        setCount( count +1);
    };

    const otherClick  =() => {
        setCount(count-1);
    };

    return (
        <div className="Button">
            <h2>Click Count :{count}</h2>
            <button onClick={handleClick}>Increase</button>
            <button onClick={otherClick}>Decrease</button>
        </div>
    );
}
export default Button;
