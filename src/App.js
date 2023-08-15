
import { useInputs } from './hooks'

function App() {

    const theInputs = useInputs()

    const addOneMore = () => theInputs.add()
    const inputElements = theInputs.display()

    console.log( theInputs.value )

    return (
        <div>
            <div>
                { inputElements }
            </div>
            <button onClick={ addOneMore }>
                another input?
            </button>
        </div>
    );
}

export default App;
