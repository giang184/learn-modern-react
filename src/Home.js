const Home = () => {
  const handleClick = (e) => {
    console.log('hello, ninjas',e);
  }
  const handleClickAgain = (name, e) => {
    console.log('hello' + name, e);
  }
  return ( 
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickAgain('mario',e)}>CLick me again</button>
    </div>
  );
}

export default Home;