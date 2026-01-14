export default function Grid(){
    return(
        <div>
            <h1 className=" text-center text-5xl p-4 bg-gray-100 font-bold">EJ2</h1>
            <div className=" grid grid-cols-3 grid-rows-3 gap-4 p-4 border-4 border-red-700">
                <div className="border 1 border-black-100 justify-center flex"><p>1</p></div>
                <div className="border 1 border-black-100 justify-center flex"><p>2</p></div>
                <div className="border 1 border-black-100 justify-center flex"><p>3</p></div>
                <div className="border 1 border-black-100 justify-center flex"><p>4</p></div>
                <div className="border 1 border-black-100 justify-center flex"><p>5</p></div>
                <div className="border 1 border-black-100 justify-center flex"><p>6</p></div>
                <div className="border 1 border-black-100 justify-center flex"><p>7</p></div>
                <div className="border 1 border-black-100 justify-center flex"><p>8</p></div>
                <div className="border 1 border-black-100 justify-center flex"><p>9</p></div>
            </div>
        </div>
    );
}