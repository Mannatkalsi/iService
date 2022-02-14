import React, { useContext } from "react";
import "./Content.css"

function Search(props) {
    const { searchTerm } = useContext(props.ContextContainer);

    if (searchTerm.criteria !== 'Tittle' && searchTerm.criteria !== 'Suburb') {
        return (
            <div className="describe-div">
                <div className="task-type-div">

                    <p className="task-type-p">Search:</p>
                    <div>
                        <div key='radio' onChange={props.setCriteria}>
                            <label for="type1">
                                <input name="taskType" inline label="Title" type='radio' id='radio' value='Tittle' defaultChecked required />
                                <span>Title</span>
                            </label>
                            <label for="type2">
                                <input name="taskType" inline label="Date" type='radio' id='radio' value='Date' />
                                <span>Date</span>
                            </label>
                            <label for="type3">
                                <input name="taskType" inline label="Suburb" type='radio' id='radio' value='Suburb' />
                                <span>Suburb</span>
                            </label>
                        </div>
                    </div>
                </div>
                <label className="Budget-p">Search Task:</label>
                <input labelText="Search Tasks" placeHolder="Search Task" type="Date" controlId="searchText" onChange={props.onChange} defValue="" />
            </div>


        );
    }
    else if(searchTerm.criteria !== 'Tittle' && searchTerm.criteria === 'Suburb'){
        return (
            <div className="describe-div">
                <div className="task-type-div">
                    <p className="task-type-p">Search:</p>
                    <div>
                        <div key='radio' onChange={props.setCriteria}>
                            <label for="type1">
                                <input name="taskType" inline label="Title" type='radio' id='radio' value='Tittle' defaultChecked required />
                                <span>Title</span>
                            </label>
                            <label for="type2">
                                <input name="taskType" inline label="Date" type='radio' id='radio' value='Date' />
                                <span>Date</span>
                            </label>
                            <label for="type3">
                                <input name="taskType" inline label="Suburb" type='radio' id='radio' value='Suburb' />
                                <span>Suburb</span>
                            </label>
                        </div>
                    </div>
                </div>
                <label className="Budget-p">Search Task:</label>
                <input type="text" labelText="Search Tasks" placeHolder="Search Task" controlId="searchDate" onChange={props.onChange} />

            </div>
        );
    }
    else {
        return (
            <div className="describe-div">
                <div className="task-type-div">
                    <p className="task-type-p">Search:</p>
                    <div>
                        <div key='radio' onChange={props.setCriteria}>
                            <label for="type1">
                                <input name="taskType" inline label="Title" type='radio' id='radio' value='Tittle' defaultChecked required />
                                <span>Title</span>
                            </label>
                            <label for="type2">
                                <input name="taskType" inline label="Date" type='radio' id='radio' value='Date' />
                                <span>Date</span>
                            </label>
                            <label for="type3">
                                <input name="taskType" inline label="Suburb" type='radio' id='radio' value='Suburb' />
                                <span>Suburb</span>
                            </label>
                        </div>
                    </div>
                </div>
                <label className="Budget-p">Search Task:</label>
                <input type="text" labelText="Search Tasks" placeHolder="Search Task" controlId="searchDate" onChange={props.onChange} />

            </div>
        );
    }
}

export default Search;