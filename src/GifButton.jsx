

function GifButton(props) {
  const handleSubmit = (event) =>{
    event.preventDefault();
    props.getGif()
  }
    return (
      <div className="gifbutton">
        <form onSubmit={handleSubmit} >
          <button type="submit">  
            Giphy Me!
          </button>
        </form>

      </div>
    );
  }









export default GifButton