const BuildComponent= ()=> {
    let label='label'
    function onClickHandler () {
      console.log('button click')
    }
    return (
      <div>
        <button onClick={onClickHandler}>{label}</button>
      </div>
   )
  }
  export default BuildComponent