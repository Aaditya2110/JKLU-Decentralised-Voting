import React from "react";

const Connected = (props) => {
    return (
        <div className="connected-container">
            <div className="card">
                <h1 className="connected-header">You are Connected to Metamask</h1>
                <p className="connected-account">Metamask Account: {props.account}</p>
                <p className="connected-account">Remaining Time: {props.remainingTime}</p>

                {props.showButton ? (
                    <p className="connected-account">You have already voted</p>
                ) : (
                    <div className="vote-section">
                        <input
                            type="number"
                            placeholder="Enter Candidate Index"
                            value={props.number}
                            onChange={props.handleNumberChange}
                            className="candidate-input"
                        />
                        <button className="vote-button" onClick={props.voteFunction}>Vote</button>
                    </div>
                )}

                <table className="candidates-table">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Candidate Name</th>
                            <th>Votes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.candidates.map((candidate, index) => (
                            <tr key={index}>
                                <td>{candidate.index}</td>
                                <td>{candidate.name}</td>
                                <td>{candidate.voteCount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Connected;
