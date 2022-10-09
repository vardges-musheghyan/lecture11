function Header({ allChecked, handleToggle, handleDelete }){




    return (
        <div className="Header">

            <label htmlFor="selectInput">
                <span>  { allChecked ? 'Unselect' : 'Select' } All </span>
                <input onChange={handleToggle}
                       id="selectInput"
                       checked={allChecked}
                       type="checkbox"/>
            </label>

            <button onClick={handleDelete} > Delete { allChecked ? 'All': 'Selected' } </button>

        </div>
    )
}

export default Header;
