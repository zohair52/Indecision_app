

class VisibilityClass extends React.Component{
    constructor(props) {
        super(props);

        this.toggleVis = this.toggleVis.bind(this);
        this.state ={
            visibility: false
        }
    }

 toggleVis() {
    this.setState((showSomething) => {
        return {
            visibility: !showSomething.visibility 
        };
    });
    
   
 }
 render()  {
    return (
        <div>
        <h1>Visibility toggle</h1>
        <button onClick={this.toggleVis}>
            {this.state.visibility ? 'Hide details': 'Show Details'}
        </button>
        {this.state.visibility && (
            <div> 
            <p>Hey, there</p>
            </div>
        )}

        </div>
    );


 }
}
ReactDOM.render(<VisibilityClass/>, document.getElementById('app'));

