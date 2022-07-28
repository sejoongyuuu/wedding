import {useState} from "react";
import moment from "moment";

export default function Calendar() {

    const [moment, setMoment] = useState(moment("2022-09-18"));

    return (
        <div className="App">
            <div className="control">
                <button>이전달</button>
                <button>다음달</button>
            </div>
            <table>
                <tbody>
                </tbody>
            </table>
        </div>
    );


}