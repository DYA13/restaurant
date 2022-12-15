function Buttons({filteredFood}){
    return(
        <div> 
        <div className="buttonsContainer">
            <button className="btn" onClick={()=> filteredFood("primi")}>Pasta</button>
            <button className="btn" onClick={()=> filteredFood("main")}>Meat</button>
            <button className="btn" onClick={()=> filteredFood("soup")}>Soup</button>
            <button className="btn" onClick={()=> filteredFood("seafood")}>Seafood</button>
            <button className="btn" onClick={()=> filteredFood("dessert")}>Dessert</button>
       
        </div>
        <hr></hr>
         </div>
    )
}
export default Buttons;