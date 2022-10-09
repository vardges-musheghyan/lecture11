function Header(){

    const handleSelectAllChange = (e) => {
        console.log(e, 'EVENT')
    }
    return (
        <div className="Header">

            <label htmlFor="selectInput">
                <span> Select </span>
                <input onChange={handleSelectAllChange}
                       id="selectInput"
                       type="checkbox"/>
            </label>

            <button> Delete </button>

        </div>
    )
}

export default Header;
