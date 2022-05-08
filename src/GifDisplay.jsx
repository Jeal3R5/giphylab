const GifDisplay = (props) => {
  if (props.gif) {
    return (
      <>
        <h1>Here comes the gif!</h1>
        <img src={props.gif.data.images.original.url} alt="" />
      </>
    );
  } else {
    return <h1>Sorry, no gif for you!</h1>;
  }
};

export default GifDisplay;
