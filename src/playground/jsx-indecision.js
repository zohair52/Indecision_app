

console.log("app.js is running")


const app= {
    title: 'Indecision App',
    sub_title: 'This is my app',
    options: [],

}

const onFormSubmit= (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;

    if (option){
        app.options.push(option);
        e.target.elements.option.value = ' ';
        renderOptions();
    }

    
}
const removeAll=() => {
    app.options= [];
    renderOptions();    

};

const onMakeDecision = () => {
    const randomNum= Math.floor(Math.random() * app.options.length);
    const option= app.options[randomNum];
    alert(option);
};
const appRoot = document.getElementById('app');


const renderOptions = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
                {app.sub_title &&  <p>{app.sub_title}</p>}
                <p> {app.options.length > 0 ? "here are your options": "No option"}</p>
                <button disabled={app.options.length ===0} onClick={onMakeDecision}>What to do?</button>
                <button onClick={removeAll}>Remove all</button>
            <ol>
                {
                    app.options.map((option) => 
                    <li key={option}>{option}</li>)
                }
               
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};
renderOptions();
