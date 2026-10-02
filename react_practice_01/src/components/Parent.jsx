 
const Parent = ({ message }) => {
   
    return (
        <div> 
            <button onClick={()=> message('hello from child')}>Click</button>
        </div>
    )
}

export default Parent